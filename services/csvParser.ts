import { ParsedData, Position, ClosedPosition, ArocTrade, WheelCycle, WheelCycleAnalysis, WheelCycleTrade, PendingWheelCycle, MonthlySummary, TickerPL, NAVChange, ShortPutIncomeSummary } from '../types';

const safeParseFloat = (val: string): number => {
    if (!val || typeof val !== 'string') return 0;
    return parseFloat(val.replace(/,/g, '')) || 0;
};

const parseOptionSymbol = (symbol: string): { isOption: boolean; optionType?: 'P' | 'C'; strikePrice?: number, expiry?: string, baseSymbol: string } => {
    if (!symbol) {
        return { isOption: false, baseSymbol: '' };
    }
    const parts = symbol.trim().split(/\s+/);
    const baseSymbol = parts[0];
    if (parts.length < 4) {
        return { isOption: false, baseSymbol };
    }

    const type = parts[parts.length - 1];
    const strike = parts[parts.length - 2];
    
    if ((type === 'P' || type === 'C') && !isNaN(parseFloat(strike))) {
        const expiry = parts[parts.length - 3];
        return {
            isOption: true,
            optionType: type,
            strikePrice: parseFloat(strike),
            expiry,
            baseSymbol
        };
    }
    
    return { isOption: false, baseSymbol };
};

const parseCsvLine = (line: string): string[] => {
    const columns: string[] = [];
    // This regex handles comma-separated values, including values enclosed in double quotes that may contain commas.
    const regex = /("([^"]*)"|[^,]*)(,|$)/g;
    line.replace(regex, (fullMatch, value, quotedValue) => {
        // If quotedValue is not undefined, it means the value was in quotes.
        // Otherwise, use the non-quoted value.
        columns.push(quotedValue !== undefined ? quotedValue : value);
        return ''; // The return value for replace is not used here.
    });
    // If the last column is empty, the regex might not pick it up, so we check for a trailing comma.
    if (line.endsWith(',')) {
        columns.push('');
    }
    return columns;
};

function analyzeShortPutIncome(trades: any[], exchangeRates: { [key: string]: number }): ShortPutIncomeSummary {
    if (!trades) {
        return { totalRealizedPL: 0, numberOfContracts: 0, averagePLPerContract: 0, hasData: false };
    }

    const closedShortPuts = trades.filter(r => {
        const { isOption, optionType } = parseOptionSymbol(r.Symbol);
        if (!isOption || optionType !== 'P' || r['DataDiscriminator'] !== 'Order') {
            return false;
        }

        const code = r.Code || '';
        const quantity = safeParseFloat(r['Quantity']);

        // Expired short puts (quantity is positive)
        const isExpired = code.includes('Ep');
        
        // Bought-to-close short puts (quantity is positive)
        const isBoughtToClose = code.includes('C') && quantity > 0;

        return isExpired || isBoughtToClose;
    });

    if (closedShortPuts.length === 0) {
        return { totalRealizedPL: 0, numberOfContracts: 0, averagePLPerContract: 0, hasData: false };
    }

    let totalRealizedPL = 0;
    let numberOfContracts = 0;

    for (const trade of closedShortPuts) {
        const currency = trade['Currency'];
        const rate = exchangeRates[currency] || 1;
        
        // For expired puts, realized P/L is the premium.
        // For bought-to-close, it is the net profit.
        const realizedPL = safeParseFloat(trade['Realized P/L']) * rate;
        totalRealizedPL += realizedPL;

        // Quantity will be positive for closing trades
        const quantity = safeParseFloat(trade['Quantity']);
        numberOfContracts += quantity;
    }

    const averagePLPerContract = numberOfContracts > 0 ? totalRealizedPL / numberOfContracts : 0;
    
    return {
        totalRealizedPL,
        numberOfContracts,
        averagePLPerContract,
        hasData: true
    };
}

function analyzeMonthlySummary(
    trades: any[],
    forexPlDetails: any[],
    syepInterest: any[], 
    brokerInterest: any[],
    otherFees: any[],
    cashReport: any[],
    exchangeRates: { [key: string]: number }
): MonthlySummary[] {
    const summaryByMonth: { [month: string]: { optionsPL: number; optionsPremium: number; stocksPL: number; forexPL: number; syepIncome: number; interest: number; commissions: number; fees: number; interestPaid: number; salesTax: number; } } = {};

    const getMonthKey = (date: Date): string => {
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    };
    
    const ensureMonthKey = (key: string) => {
        if (!summaryByMonth[key]) {
            summaryByMonth[key] = { optionsPL: 0, optionsPremium: 0, stocksPL: 0, forexPL: 0, syepIncome: 0, interest: 0, commissions: 0, fees: 0, interestPaid: 0, salesTax: 0 };
        }
    };

    // 1. Realized P/L from trades
    const realizedPlTrades = (trades || []).filter(r => r['DataDiscriminator'] === 'Order');

    for (const trade of realizedPlTrades) {
        const date = new Date(trade['Date/Time'].replace(',', ''));
        if (isNaN(date.getTime())) continue;

        const monthKey = getMonthKey(date);
        ensureMonthKey(monthKey);
        
        const currency = trade['Currency'];
        const rate = exchangeRates[currency] || 1;
        const category = trade['Asset Category'];

        if (category === 'Equity and Index Options' || category === 'Stocks') {
            const realizedPL = safeParseFloat(trade['Realized P/L']) * rate;
            if (realizedPL !== 0) {
                if (category === 'Equity and Index Options') {
                    summaryByMonth[monthKey].optionsPL += realizedPL;
                } else {
                    summaryByMonth[monthKey].stocksPL += realizedPL;
                }
            }
        } else if (category === 'Forex') {
            // MTM P/L is used for Forex spot conversions as Realized P/L is often missing/zero.
            const mtmPlKey = Object.keys(trade).find(k => k.startsWith('MTM'));
            if (mtmPlKey) {
                const mtmPL = safeParseFloat(trade[mtmPlKey]);
                summaryByMonth[monthKey].forexPL += mtmPL;
            }
        }
    }


    // 1b. Realized P/L from Forex P/L Details section (currency fluctuations)
    if (forexPlDetails) {
        const forexRows = forexPlDetails.filter(r => r['Realized P/L'] && safeParseFloat(r['Realized P/L']) !== 0);
        for (const row of forexRows) {
            const date = new Date(row['Date']); // Date format is simpler here
            if (isNaN(date.getTime())) continue;

            const monthKey = getMonthKey(date);
            ensureMonthKey(monthKey);

            // In this section, P/L is already in the base currency.
            const realizedPL = safeParseFloat(row['Realized P/L']);
            summaryByMonth[monthKey].forexPL += realizedPL;
        }
    }
    
    // 2. Options Premium from Opening Trades (Income)
    const optionOpeningTrades = (trades || []).filter(r => 
        r['Asset Category'] === 'Equity and Index Options' &&
        r.Code?.includes('O') && // Opening trade
        safeParseFloat(r.Quantity) < 0 // Selling
    );

    for (const trade of optionOpeningTrades) {
        const date = new Date(trade['Date/Time'].replace(',', ''));
        if (isNaN(date.getTime())) continue;
        
        const monthKey = getMonthKey(date);
        ensureMonthKey(monthKey);
        
        const currency = trade['Currency'];
        const rate = exchangeRates[currency] || 1;
        const proceeds = safeParseFloat(trade['Proceeds']) * rate;
        const commFee = safeParseFloat(trade['Comm/Fee']) * rate; // comm/fee is usually negative

        summaryByMonth[monthKey].optionsPremium += (proceeds + commFee);
    }

    // 3. SYEP Income
    if (syepInterest) {
        const syepRows = syepInterest.filter(r => r['Value Date'] && r['Interest Paid to Customer']);
        for (const row of syepRows) {
            const date = new Date(row['Value Date']);
            if (isNaN(date.getTime())) continue;
            
            const monthKey = getMonthKey(date);
            ensureMonthKey(monthKey);
            
            const currency = row['Currency'];
            const rate = exchangeRates[currency] || 1;
            const interest = safeParseFloat(row['Interest Paid to Customer']) * rate;

            summaryByMonth[monthKey].syepIncome += interest;
        }
    }

    // 4. Broker Interest
    if (brokerInterest) {
        const interestRows = brokerInterest.filter(r => r['Date'] && r['Amount']);
        for (const row of interestRows) {
            const date = new Date(row['Date']);
            if (isNaN(date.getTime())) continue;

            const monthKey = getMonthKey(date);
            ensureMonthKey(monthKey);

            const currency = row['Currency'];
            const rate = exchangeRates[currency] || 1;
            const amount = safeParseFloat(row['Amount']) * rate;

            // Interest can be debit (negative) or credit (positive).
            // This is for net interest (income/pl charts)
            summaryByMonth[monthKey].interest += amount;
            
            // Also track paid interest separately for the costs chart.
            if (amount < 0) {
                summaryByMonth[monthKey].interestPaid += Math.abs(amount);
            }
        }
    }
    
    // 5. Commissions from all trades
    const allOrderTrades = (trades || []).filter(r => r['DataDiscriminator'] === 'Order');
    for (const trade of allOrderTrades) {
        const date = new Date(trade['Date/Time'].replace(',', ''));
        if (isNaN(date.getTime())) continue;

        const monthKey = getMonthKey(date);
        ensureMonthKey(monthKey);

        const currency = trade['Currency'];
        const rate = exchangeRates[currency] || 1;
        
        const commissionKey = Object.keys(trade).find(k => k.toLowerCase().startsWith('comm'));
        if(commissionKey) {
            const commission = safeParseFloat(trade[commissionKey]); // This is negative
            summaryByMonth[monthKey].commissions += Math.abs(commission * rate);
        }
    }
    
    // 6. Other Fees
    if (otherFees) {
        const feeRows = otherFees.filter(r => r['Date'] && r['Amount']);
        for (const row of feeRows) {
            const date = new Date(row['Date']);
            if (isNaN(date.getTime())) continue;

            const monthKey = getMonthKey(date);
            ensureMonthKey(monthKey);
            
            const currency = row['Currency'];
            const rate = exchangeRates[currency] || 1;
            const amount = safeParseFloat(row['Amount']); // This is negative

            // Storing as a positive number
            summaryByMonth[monthKey].fees += Math.abs(amount * rate);
        }
    }

    // 7. Sales Tax
    let totalSalesTax = 0;
    if (cashReport) {
        // Find sales tax rows which summarize the total tax without a date.
        const taxRows = cashReport.filter(r => r['Currency Summary'] === 'Sales Tax');
        for (const row of taxRows) {
            const currency = row['Currency'];
            const rate = exchangeRates[currency] || 1;
            const amount = safeParseFloat(row['Total']); // This is negative
            totalSalesTax += Math.abs(amount * rate);
        }
    }

    if (totalSalesTax > 0) {
        const totalCommissions = Object.values(summaryByMonth).reduce((sum, month) => sum + month.commissions, 0);

        if (totalCommissions > 0) {
            // Distribute tax proportionally to monthly commissions, as a reasonable proxy.
            for (const monthKey in summaryByMonth) {
                const monthCommissions = summaryByMonth[monthKey].commissions;
                const commissionRatio = monthCommissions / totalCommissions;
                summaryByMonth[monthKey].salesTax = totalSalesTax * commissionRatio;
            }
        } else if (Object.keys(summaryByMonth).length > 0) {
            // Fallback: if no commissions, distribute evenly across active months.
            const monthlyTax = totalSalesTax / Object.keys(summaryByMonth).length;
            for (const monthKey in summaryByMonth) {
                summaryByMonth[monthKey].salesTax = monthlyTax;
            }
        }
    }

    // Convert to array and sort
    return Object.entries(summaryByMonth)
        .map(([month, data]) => ({
            month,
            ...data
        }))
        .sort((a, b) => a.month.localeCompare(b.month));
}


function analyzeWheelCycles(trades: any[], exchangeRates: { [key: string]: number }, baseCurrency: string, instrumentMultipliers: Map<string, number>, openPositions: Position[]): WheelCycleAnalysis {
    const completedCycles: WheelCycle[] = [];
    const stockLots = new Map<string, { quantity: number; costBasis: number; acquisitionDate: Date; coveredShares: number }[]>();
    const inProgressCycles = new Map<string, Partial<WheelCycle> & { lotIndex: number }>();
    const openShortPuts = new Map<string, any[]>();

    const allTrades = trades
        .filter(r => r['DataDiscriminator'] === 'Order' && ['Stocks', 'Equity and Index Options'].includes(r['Asset Category']))
        .map(trade => ({
            ...trade,
            parsedDate: new Date(trade['Date/Time'].replace(',', '')),
        }))
        .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

    for (const trade of allTrades) {
        const { baseSymbol, isOption, optionType, strikePrice } = parseOptionSymbol(trade.Symbol);
        const quantity = safeParseFloat(trade.Quantity);
        const code = trade.Code || '';
        const currency = trade['Currency'];
        const rate = exchangeRates[currency] || 1;
        const commFee = safeParseFloat(trade['Comm/Fee']) * rate;
        const proceeds = safeParseFloat(trade.Proceeds) * rate;

        // Track opening of short puts
        if (isOption && optionType === 'P' && quantity < 0 && code.includes('O')) {
            if (!openShortPuts.has(trade.Symbol)) {
                openShortPuts.set(trade.Symbol, []);
            }
            // Add one record for each contract sold
            for (let i = 0; i < Math.abs(quantity); i++) {
                openShortPuts.get(trade.Symbol)?.push(trade);
            }
        }
        // Put Assignment -> Stock Acquisition
        else if (isOption && optionType === 'P' && quantity > 0 && code.includes('A')) {
            const openTradeQueue = openShortPuts.get(trade.Symbol);
            const numContractsAssigned = quantity;

            if (openTradeQueue && openTradeQueue.length >= numContractsAssigned) {
                // FIFO for open trades.
                const matchedOpenTrades = openTradeQueue.splice(0, numContractsAssigned);

                // Calculate the premium from the original opening trade(s).
                let initialPutPremium = 0;
                for (const openTrade of matchedOpenTrades) {
                    const openProceeds = safeParseFloat(openTrade.Proceeds);
                    const openCommFee = safeParseFloat(openTrade['Comm/Fee']);
                    const openCurrency = openTrade['Currency'];
                    const openRate = exchangeRates[openCurrency] || 1;
                    // Proceeds are positive for sale, commFee is negative.
                    initialPutPremium += (openProceeds + openCommFee) * openRate;
                }

                const multiplier = instrumentMultipliers.get(trade.Symbol.trim()) || 100;
                const sharesAcquired = numContractsAssigned * multiplier;

                const grossStockCostBasis = (strikePrice! * sharesAcquired) * rate;
                const effectiveCostBasis = grossStockCostBasis - initialPutPremium;

                if (!stockLots.has(baseSymbol)) {
                    stockLots.set(baseSymbol, []);
                }
                const newLot = {
                    quantity: sharesAcquired,
                    costBasis: effectiveCostBasis,
                    acquisitionDate: trade.parsedDate,
                    coveredShares: 0
                };
                stockLots.get(baseSymbol)?.push(newLot);
                const lotIndex = stockLots.get(baseSymbol)!.length - 1;

                inProgressCycles.set(`${baseSymbol}-${lotIndex}`, {
                    symbol: baseSymbol,
                    currency: currency,
                    initialPutPremium: initialPutPremium,
                    totalCallPremium: 0,
                    stockPL: 0,
                    startDate: trade.parsedDate.toISOString().split('T')[0],
                    lotIndex: lotIndex,
                    assignmentPrice: strikePrice!,
                    assignmentShares: sharesAcquired,
                    assignmentCost: grossStockCostBasis, // Store gross cost for transparency
                    netAssignmentCost: effectiveCostBasis,
                    tradeLog: [{
                        date: trade.parsedDate.toISOString().split('T')[0],
                        description: `Assigned ${sharesAcquired} shares @ ${strikePrice!.toFixed(2)}`,
                        amount: -grossStockCostBasis
                    }, {
                        date: trade.parsedDate.toISOString().split('T')[0],
                        description: `Put Premium Applied (${trade.Symbol})`,
                        amount: initialPutPremium
                    }]
                });

            } else {
                console.warn(`Could not find opening trade for assignment of ${trade.Symbol}. Put premium will be incorrect.`);
                const putPremiumRealized = 0; // Fallback to 0 if no open trade is found
                const multiplier = instrumentMultipliers.get(trade.Symbol.trim()) || 100;
                const sharesAcquired = quantity * multiplier;
                const grossStockCostBasis = (strikePrice! * sharesAcquired) * rate;
                const effectiveCostBasis = grossStockCostBasis - putPremiumRealized;
                if (!stockLots.has(baseSymbol)) stockLots.set(baseSymbol, []);
                const newLot = { quantity: sharesAcquired, costBasis: effectiveCostBasis, acquisitionDate: trade.parsedDate, coveredShares: 0 };
                stockLots.get(baseSymbol)?.push(newLot);
                const lotIndex = stockLots.get(baseSymbol)!.length - 1;
                inProgressCycles.set(`${baseSymbol}-${lotIndex}`, {
                    symbol: baseSymbol, currency: currency, initialPutPremium: putPremiumRealized, totalCallPremium: 0, stockPL: 0,
                    startDate: trade.parsedDate.toISOString().split('T')[0], lotIndex: lotIndex, assignmentPrice: strikePrice!, assignmentShares: sharesAcquired,
                    assignmentCost: grossStockCostBasis,
                    netAssignmentCost: effectiveCostBasis,
                    tradeLog: [{ date: trade.parsedDate.toISOString().split('T')[0], description: `Assigned ${sharesAcquired} shares @ ${strikePrice!.toFixed(2)}`, amount: -grossStockCostBasis }]
                });
            }
        }

        // Covered Call Premium
        else if (isOption && optionType === 'C' && quantity < 0 && code.includes('O')) {
            const contractsSold = Math.abs(quantity);
            const multiplier = instrumentMultipliers.get(trade.Symbol.trim()) || 100;
            let sharesToCover = contractsSold * multiplier;
            const totalPremiumForTrade = proceeds + commFee;

            const lotsForSymbol = stockLots.get(baseSymbol);

            if (lotsForSymbol) {
                for (let i = 0; i < lotsForSymbol.length; i++) {
                    if (sharesToCover <= 0) break;

                    const lot = lotsForSymbol[i];
                    const availableShares = lot.quantity - lot.coveredShares;
                    
                    if (availableShares > 0) {
                        const sharesInThisLotToCover = Math.min(sharesToCover, availableShares);
                        
                        const cycleKey = `${baseSymbol}-${i}`;
                        const cycle = inProgressCycles.get(cycleKey);

                        if (cycle && cycle.tradeLog) {
                            // Apportion the premium based on shares being covered vs total shares in trade
                            const premiumForThisLot = totalPremiumForTrade * (sharesInThisLotToCover / (contractsSold * multiplier));

                            cycle.totalCallPremium = (cycle.totalCallPremium || 0) + premiumForThisLot;
                            cycle.tradeLog.push({
                                date: trade.parsedDate.toISOString().split('T')[0],
                                description: `Call Premium (${trade.Symbol})`,
                                amount: premiumForThisLot
                            });

                            lot.coveredShares += sharesInThisLotToCover;
                            sharesToCover -= sharesInThisLotToCover;
                        }
                    }
                }
            }
        }
        
        // Closing a short call (expiration or buy-to-close) -> makes a lot available again
        else if (isOption && optionType === 'C' && quantity > 0 && (code.includes('C') || code.includes('Ep'))) {
            const contractsClosed = quantity;
            const multiplier = instrumentMultipliers.get(trade.Symbol.trim()) || 100;
            let sharesToUncover = contractsClosed * multiplier;
            
            const lotsForSymbol = stockLots.get(baseSymbol);

            if (lotsForSymbol) {
                // FIFO for un-covering
                for (let i = 0; i < lotsForSymbol.length; i++) {
                    if (sharesToUncover <= 0) break;
                    
                    const lot = lotsForSymbol[i];
                    if (lot.coveredShares > 0) {
                        const sharesInThisLotToUncover = Math.min(sharesToUncover, lot.coveredShares);
                        lot.coveredShares -= sharesInThisLotToUncover;
                        sharesToUncover -= sharesInThisLotToUncover;
                    }
                }
            }
        }

        // Stock Sale (Called Away or Sold)
        else if ((code.includes('C') || code.includes('A')) && trade['Asset Category'] === 'Stocks' && quantity < 0) {
            const lots = stockLots.get(baseSymbol);
            if (lots && lots.length > 0) {
                const soldLot = lots.shift()!; // FIFO, has effectiveCostBasis
                const cycleKey = `${baseSymbol}-${lots.length}`;
                const cycle = inProgressCycles.get(cycleKey);

                if (cycle) {
                    const saleProceedsValue = proceeds + commFee;
                    const stockPLValue = saleProceedsValue - soldLot.costBasis;
                    cycle.stockPL = stockPLValue;
                    cycle.salePrice = safeParseFloat(trade['T. Price']);
                    cycle.saleProceeds = saleProceedsValue;

                    if (cycle.tradeLog) {
                        cycle.tradeLog.push({
                            date: trade.parsedDate.toISOString().split('T')[0],
                            description: `Sold ${Math.abs(quantity)} shares`,
                            amount: saleProceedsValue
                        });
                    }

                    const totalPL = stockPLValue + (cycle.totalCallPremium || 0);

                    const startDate = new Date(cycle.startDate!);
                    const endDate = trade.parsedDate;
                    const durationDays = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

                    completedCycles.push({
                        symbol: baseSymbol,
                        currency: cycle.currency!,
                        initialPutPremium: cycle.initialPutPremium || 0,
                        totalCallPremium: cycle.totalCallPremium || 0,
                        stockPL: stockPLValue,
                        totalPL: totalPL,
                        durationDays: durationDays > 0 ? durationDays : 1,
                        returnOnCost: soldLot.costBasis > 0 ? totalPL / soldLot.costBasis : 0,
                        startDate: cycle.startDate!,
                        endDate: endDate.toISOString().split('T')[0],
                        assignmentPrice: cycle.assignmentPrice!,
                        assignmentShares: cycle.assignmentShares!,
                        assignmentCost: cycle.assignmentCost!, // Gross cost
                        netAssignmentCost: soldLot.costBasis, // Net cost
                        salePrice: cycle.salePrice!,
                        saleProceeds: cycle.saleProceeds!,
                        tradeLog: cycle.tradeLog || []
                    });

                    inProgressCycles.delete(cycleKey);
                }
            }
        }
    }

    const pendingCycles: PendingWheelCycle[] = [];
    const stockPositionsMap = new Map<string, Position>(
        openPositions.filter(p => p.assetCategory === 'Stocks').map(p => [p.symbol, p])
    );

    for (const cycleInProgress of inProgressCycles.values()) {
        const stockPosition = stockPositionsMap.get(cycleInProgress.symbol!);
        if (stockPosition && stockPosition.quantity !== 0) {
            const pricePerShare = stockPosition.value / stockPosition.quantity;
            const currentStockValue = pricePerShare * cycleInProgress.assignmentShares!;
            
            const unrealizedStockPL = currentStockValue - cycleInProgress.netAssignmentCost!;
            const currentTotalPL = unrealizedStockPL + (cycleInProgress.totalCallPremium || 0);

            pendingCycles.push({
                symbol: cycleInProgress.symbol!,
                currency: cycleInProgress.currency!,
                initialPutPremium: cycleInProgress.initialPutPremium || 0,
                startDate: cycleInProgress.startDate!,
                assignmentShares: cycleInProgress.assignmentShares!,
                assignmentPrice: cycleInProgress.assignmentPrice!,
                assignmentCost: cycleInProgress.assignmentCost!,
                netAssignmentCost: cycleInProgress.netAssignmentCost!,
                totalCallPremium: cycleInProgress.totalCallPremium || 0,
                currentStockValue,
                unrealizedStockPL,
                currentTotalPL,
                tradeLog: cycleInProgress.tradeLog || []
            });
        }
    }

    return { completedCycles, pendingCycles };
}


export function parseIbkrCsv(csvString: string): ParsedData {
    const lines = csvString.split('\n').filter(line => line.trim() !== '');
    
    const sections: { [key: string]: Record<string, string>[] } = {};
    let currentSection = '';
    let headers: string[] = [];

    // More robust parser that handles multiple header rows within a single section (e.g., Trades section)
    const allData: {section: string, headers: string[], data: string[][]}[] = [];
    let currentBlock: {section: string, headers: string[], data: string[][]} | null = null;

    for (const line of lines) {
        const columns = parseCsvLine(line);
        if (columns.length < 2) continue;
        const sectionName = columns[0].trim();
        const dataType = columns[1].trim();

        if (dataType === 'Header') {
            if (currentBlock) {
                allData.push(currentBlock);
            }
            currentBlock = {
                section: sectionName,
                headers: columns.map(h => h.trim()),
                data: []
            };
        } else if (dataType === 'Data' && currentBlock) {
            currentBlock.data.push(columns);
        }
    }
    if (currentBlock) {
        allData.push(currentBlock);
    }

    for (const block of allData) {
        if (!sections[block.section]) {
            sections[block.section] = [];
        }
        const blockHeaders = block.headers;
        for (const dataRow of block.data) {
            const row: Record<string, string> = {};
            dataRow.forEach((col, i) => {
                if (blockHeaders[i]) {
                    row[blockHeaders[i]] = col.trim();
                }
            });
            sections[block.section].push(row);
        }
    }

    const data: ParsedData = {
        positions: [],
        closedPositions: [],
        nav: { cash: 0, baseCurrency: 'USD' },
        accountInfo: { baseCurrency: 'USD', account: '', name: '', period: '' },
        exchangeRates: {},
        plSummary: {
            stocks: { realized: 0, unrealized: 0, total: 0 },
            options: { realized: 0, unrealized: 0, total: 0 },
            forex: { realized: 0, unrealized: 0, total: 0 },
            total: { realized: 0, unrealized: 0, total: 0 },
        },
        rateOfReturn: 0,
        totalNAV: 0,
        arocAnalysis: { averageAroc: 0, trades: [] },
        optionsStrategyMetrics: { winRate: 0, assignmentRate: 0, totalClosed: 0, wins: 0 },
        wheelCycleAnalysis: { completedCycles: [], pendingCycles: [] },
        monthlySummary: [],
        tickerPL: [],
        navChange: {
            startingValue: 0,
            markToMarket: 0,
            depositsAndWithdrawals: 0,
            interest: 0,
            changeInInterestAccruals: 0,
            otherFees: 0,
            commissions: 0,
            salesTax: 0,
            otherFXTranslations: 0,
            endingValue: 0,
        },
        shortPutIncomeSummary: { totalRealizedPL: 0, numberOfContracts: 0, averagePLPerContract: 0, hasData: false },
    };

     // Process Statement for Period
    if (sections['Statement']) {
        const periodRow = sections['Statement'].find(r => r['Field Name'] === 'Period');
        if (periodRow && periodRow['Field Value']) {
            data.accountInfo.period = periodRow['Field Value'];
        }
    }

    // Process Account Information to get Base Currency
    if (sections['Account Information']) {
        const infoMap = new Map(sections['Account Information'].map(r => [r['Field Name'], r['Field Value']]));
        
        const baseCurrency = infoMap.get('Base Currency');
        if (baseCurrency) {
            data.accountInfo.baseCurrency = baseCurrency;
            data.nav.baseCurrency = baseCurrency;
            data.exchangeRates[baseCurrency] = 1;
        }
        data.accountInfo.account = infoMap.get('Account') || '';
        data.accountInfo.name = infoMap.get('Name') || '';
    }

    // Process Exchange Rates from Mark-to-Market section
    if (sections['Mark-to-Market Performance Summary']) {
        const forexRows = sections['Mark-to-Market Performance Summary'].filter(r => r['Asset Category'] === 'Forex');
        forexRows.forEach(row => {
            const currency = row['Symbol'];
            const rateStr = row['Current Price'];
            if(currency && rateStr && currency !== data.accountInfo.baseCurrency) {
                const rate = safeParseFloat(rateStr);
                if (rate > 0) {
                    data.exchangeRates[currency] = rate;
                }
            }
        });
    }

    // Process Trades to get premium for options
    const premiumMap: { [symbol: string]: number } = {};
    if (sections['Trades']) {
        const tradeRows = sections['Trades'].filter(
            r =>
                r['DataDiscriminator'] === 'Order' &&
                r['Asset Category'] === 'Equity and Index Options' &&
                r['Code']?.includes('O') && // It's an opening trade
                safeParseFloat(r['Quantity']) < 0 // It's a sale (credit)
        );

        tradeRows.forEach(row => {
            const symbol = row['Symbol'];
            if (symbol) {
                const currency = row['Currency'];
                const exchangeRate = data.exchangeRates[currency] || 1;
                // Proceeds are positive for sales (credits). Comm/Fee is negative.
                const proceeds = safeParseFloat(row['Proceeds']);
                const commFee = safeParseFloat(row['Comm/Fee']);
                const netPremium = proceeds + commFee;
                premiumMap[symbol] = (premiumMap[symbol] || 0) + (netPremium * exchangeRate);
            }
        });
    }

    // Process Net Asset Value for Cash, TWR, and Total NAV
    if (sections['Net Asset Value']) {
        const cashRow = sections['Net Asset Value'].find(r => r['Asset Class'] && r['Asset Class'].trim() === 'Cash');
        if (cashRow) {
            data.nav.cash = safeParseFloat(cashRow['Current Total']);
        }
        const totalRow = sections['Net Asset Value'].find(r => r['Asset Class'] && r['Asset Class'].trim() === 'Total');
        if (totalRow) {
            data.totalNAV = safeParseFloat(totalRow['Current Total']);
        }
        
        // Correctly parse Time Weighted Rate of Return
        const rateOfReturnRow = sections['Net Asset Value'].find(r => r['Time Weighted Rate of Return']);
        if (rateOfReturnRow) {
            data.rateOfReturn = safeParseFloat(rateOfReturnRow['Time Weighted Rate of Return']);
        }
    }

    // Process Change in NAV for Waterfall chart
    if(sections['Change in NAV']) {
        const navMap = new Map(sections['Change in NAV'].map(r => [r['Field Name'], r['Field Value']]));
        data.navChange.startingValue = safeParseFloat(navMap.get('Starting Value') || '0');
        data.navChange.markToMarket = safeParseFloat(navMap.get('Mark-to-Market') || '0');
        data.navChange.depositsAndWithdrawals = safeParseFloat(navMap.get('Deposits & Withdrawals') || '0');
        data.navChange.interest = safeParseFloat(navMap.get('Interest') || '0');
        data.navChange.changeInInterestAccruals = safeParseFloat(navMap.get('Change in Interest Accruals') || '0');
        data.navChange.otherFees = safeParseFloat(navMap.get('Other Fees') || '0');
        data.navChange.commissions = safeParseFloat(navMap.get('Commissions') || '0');
        data.navChange.salesTax = safeParseFloat(navMap.get('Sales Tax') || '0');
        data.navChange.otherFXTranslations = safeParseFloat(navMap.get('Other FX Translations') || '0');
        data.navChange.endingValue = safeParseFloat(navMap.get('Ending Value') || '0');
    }

    // Create a map of symbol to the latest closing trade date.
    // This is used to enrich the "Realized & Unrealized" summary which lacks dates.
    const closeDateBySymbol = new Map<string, string>();
    if (sections['Trades']) {
        const closingTrades = sections['Trades']
            .filter(r => r['DataDiscriminator'] === 'Order' && r['Realized P/L'] && safeParseFloat(r['Realized P/L']) !== 0)
            .map(trade => ({
                ...trade,
                parsedDate: new Date(trade['Date/Time'].replace(',', '')).getTime()
            }))
            .sort((a, b) => b.parsedDate - a.parsedDate); // Sort descending by date

        closingTrades.forEach(trade => {
            const symbol = trade['Symbol'];
            if (symbol && !closeDateBySymbol.has(symbol)) {
                closeDateBySymbol.set(symbol, new Date(trade.parsedDate).toISOString());
            }
        });
    }

    // Process Realized & Unrealized Performance Summary
    if (sections['Realized & Unrealized Performance Summary']) {
        let lastAssetCategory = '';
        const summaryRows = sections['Realized & Unrealized Performance Summary'];
        
        for (const row of summaryRows) {
            let assetCategory = row['Asset Category'];
            if (assetCategory === 'Equity and Index Options') {
                assetCategory = 'Options';
            }
            const symbol = row['Symbol'];

            if (assetCategory && !assetCategory.startsWith('Total')) {
                lastAssetCategory = assetCategory;
            }

            if (symbol && assetCategory && !assetCategory.startsWith('Total')) {
                const realizedPL = safeParseFloat(row['Realized Total']);
                if (realizedPL !== 0) {
                    data.closedPositions.push({
                        assetCategory,
                        symbol,
                        realizedPL,
                        closeDate: closeDateBySymbol.get(symbol),
                    });
                }
            }

            if (assetCategory === 'Total') {
                const realized = safeParseFloat(row['Realized Total']);
                const unrealized = safeParseFloat(row['Unrealized Total']);
                const total = safeParseFloat(row['Total']);
                
                if (lastAssetCategory === 'Stocks') {
                    data.plSummary.stocks = { realized, unrealized, total };
                } else if (lastAssetCategory === 'Options') {
                    data.plSummary.options = { realized, unrealized, total };
                } else if (lastAssetCategory === 'Forex') {
                    data.plSummary.forex = { realized, unrealized, total };
                }
            } else if (assetCategory === 'Total (All Assets)') {
                const realized = safeParseFloat(row['Realized Total']);
                const unrealized = safeParseFloat(row['Unrealized Total']);
                const total = safeParseFloat(row['Total']);
                data.plSummary.total = { realized, unrealized, total };
            }
        }
    }
    
    // Process Open Positions
    if(sections['Open Positions']) {
        const posRows = sections['Open Positions'].filter(r => r['DataDiscriminator'] === 'Summary');
        posRows.forEach(row => {
            if (!row['Symbol']) return;

            let assetCategory = row['Asset Category'];
            if (assetCategory === 'Equity and Index Options') {
                assetCategory = 'Options';
            }
            
            const currency = row['Currency'];
            const exchangeRate = data.exchangeRates[currency] || 1;
            const { isOption, optionType, strikePrice, expiry, baseSymbol } = parseOptionSymbol(row['Symbol']);
            
            const position: Position = {
                assetCategory: assetCategory,
                symbol: row['Symbol'],
                baseSymbol,
                quantity: safeParseFloat(row['Quantity']),
                multiplier: safeParseFloat(row['Mult']),
                costBasis: safeParseFloat(row['Cost Basis']) * exchangeRate,
                closePrice: safeParseFloat(row['Close Price']),
                value: safeParseFloat(row['Value']) * exchangeRate,
                unrealizedPL: safeParseFloat(row['Unrealized P/L']) * exchangeRate,
                currency: row['Currency'],
                isOption,
                optionType,
                strikePrice,
                expiry,
            };

            if (position.isOption) {
                position.collectedPremium = premiumMap[position.symbol] || 0;
            }
            data.positions.push(position);
        });
    }

    // Process Stock Yield Enhancement Program Income
    if (sections['Stock Yield Enhancement Program Securities Lent Interest Details']) {
        const syepRow = sections['Stock Yield Enhancement Program Securities Lent Interest Details'].find(r => r['Currency'] === `Total in ${data.accountInfo.baseCurrency}`);
        if (syepRow && syepRow['Interest Paid to Customer']) {
            data.syepIncome = safeParseFloat(syepRow['Interest Paid to Customer']);
        }
    }

    // --- AROC, Win Rate, Assignment Rate, Wheel Cycle Calculation ---
    const instrumentMultipliers = new Map<string, number>();
    if (sections['Financial Instrument Information']) {
        for (const row of sections['Financial Instrument Information']) {
            if (row['Symbol'] && row['Multiplier']) {
                instrumentMultipliers.set(row['Symbol'].trim(), safeParseFloat(row['Multiplier']));
            }
        }
    }

    if (sections['Trades']) {
        data.shortPutIncomeSummary = analyzeShortPutIncome(sections['Trades'], data.exchangeRates);
        data.wheelCycleAnalysis = analyzeWheelCycles(sections['Trades'], data.exchangeRates, data.accountInfo.baseCurrency, instrumentMultipliers, data.positions);
        const openTrades = new Map<string, any[]>();
        const arocTrades: ArocTrade[] = [];
        
        let totalClosedShortOptions = 0;
        let winningShortOptions = 0;
        let totalClosedShortPuts = 0;
        let assignedShortPuts = 0;

        const allOptionTrades = sections['Trades']
            .filter(r => r['DataDiscriminator'] === 'Order' && r['Asset Category'] === 'Equity and Index Options')
            .map(trade => ({
                ...trade,
                parsedDate: new Date(trade['Date/Time'].replace(',', '')),
            }))
            .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());

        for (const trade of allOptionTrades) {
            const quantity = safeParseFloat(trade['Quantity']);
            const symbol = trade['Symbol'];
            const code = trade['Code'] || '';

            if (quantity < 0 && code.includes('O')) { // Opening a short position
                if (!openTrades.has(symbol)) {
                    openTrades.set(symbol, []);
                }
                // Push one entry for each contract in the trade
                for (let i = 0; i < Math.abs(quantity); i++) {
                    openTrades.get(symbol)?.push(trade);
                }
            } else if (quantity > 0 && (code.includes('C') || code.includes('Ep') || code.includes('A'))) { // Closing a short position
                const openTradeQueue = openTrades.get(symbol);
                if (openTradeQueue && openTradeQueue.length >= quantity) {
                    
                    const numContractsClosed = Math.round(quantity);
                    totalClosedShortOptions += numContractsClosed;
                    
                    const realizedPLForTrade = safeParseFloat(trade['Realized P/L']);
                    if (realizedPLForTrade > 0) {
                        winningShortOptions += numContractsClosed;
                    }

                    const { isOption, optionType, strikePrice } = parseOptionSymbol(symbol);
                    if (isOption && optionType === 'P') {
                        totalClosedShortPuts += numContractsClosed;
                        if (code.includes('A')) {
                            assignedShortPuts += numContractsClosed;
                        }
                    }

                    // AROC calculation
                    const matchedOpenTrades = openTradeQueue.splice(0, numContractsClosed);
                    const avgOpenTimestamp = matchedOpenTrades.reduce((sum, t) => sum + t.parsedDate.getTime(), 0) / matchedOpenTrades.length;
                    const avgOpenDate = new Date(avgOpenTimestamp);
                    
                    const closeDate = trade.parsedDate;
                    let daysOpen = (closeDate.getTime() - avgOpenDate.getTime()) / (1000 * 60 * 60 * 24);
                    if (daysOpen < 1) daysOpen = 1;

                    const premiumCollected = realizedPLForTrade;
                    const tradeCurrency = trade['Currency'];
                    const exchangeRate = data.exchangeRates[tradeCurrency] || 1;
                    const premiumInBase = premiumCollected * exchangeRate;

                    if (isOption && optionType === 'P' && strikePrice) {
                        const multiplier = instrumentMultipliers.get(symbol.trim()) || 100;
                        const capitalAtRisk = strikePrice * quantity * multiplier;
                        const capitalAtRiskInBase = capitalAtRisk * exchangeRate;

                        if (capitalAtRiskInBase > 0 && premiumInBase > 0) { // Only calculate for winning trades
                            const aroc = (premiumInBase / capitalAtRiskInBase) * (365 / daysOpen);
                            arocTrades.push({
                                symbol,
                                premiumCollected: premiumInBase,
                                capitalAtRisk: capitalAtRiskInBase,
                                daysOpen: Math.round(daysOpen),
                                aroc,
                            });
                        }
                    }
                }
            }
        }
        
        if (arocTrades.length > 0) {
            const totalAroc = arocTrades.reduce((sum, t) => sum + t.aroc, 0);
            data.arocAnalysis = {
                averageAroc: totalAroc / arocTrades.length,
                trades: arocTrades,
            };
        }
        
        data.optionsStrategyMetrics = {
            winRate: totalClosedShortOptions > 0 ? winningShortOptions / totalClosedShortOptions : 0,
            assignmentRate: totalClosedShortPuts > 0 ? assignedShortPuts / totalClosedShortPuts : 0,
            totalClosed: totalClosedShortOptions,
            wins: winningShortOptions,
        };
    }
    
    data.monthlySummary = analyzeMonthlySummary(
        sections['Trades'],
        sections['Forex P/L Details'],
        sections['Stock Yield Enhancement Program Securities Lent Interest Details'],
        sections['Interest'],
        sections['Fees'],
        sections['Cash Report'],
        data.exchangeRates
    );

    // --- P/L Contribution by Ticker ---
    const plByTicker = new Map<string, number>();
    data.closedPositions.forEach(pos => {
        const baseSymbol = pos.assetCategory === 'Stocks' 
            ? pos.symbol 
            : parseOptionSymbol(pos.symbol).baseSymbol;

        if (baseSymbol) {
            const currentPL = plByTicker.get(baseSymbol) || 0;
            plByTicker.set(baseSymbol, currentPL + pos.realizedPL);
        }
    });

    data.tickerPL = Array.from(plByTicker.entries())
        .map(([ticker, totalPL]) => ({ ticker, totalPL }))
        .sort((a, b) => b.totalPL - a.totalPL);

    return data;
}
