
import React, { useMemo, useState } from 'react';
import { ParsedData, Position } from '../types';

import Header from './dashboard/Header';
import MetricCards from './dashboard/MetricCards';
import PLSummary from './dashboard/PLSummary';
import NAVSankeyChart from './dashboard/NAVSankeyChart';
import MonthlyPerformanceChart from './dashboard/MonthlyIncomeChart';
import FeesChart from './dashboard/FeesChart';
import TickerPLChart from './dashboard/TickerPLChart';
import ShortPutRisk from './dashboard/ShortPutRisk';
import ShortOptionsPerformance from './dashboard/ShortOptionsPerformance';
import AllocationCharts from './dashboard/AllocationCharts';
import OpenPositions from './dashboard/OpenPositions';
import ClosedPositions from './dashboard/ClosedPositions';
import WheelStrategySummary from './dashboard/WheelStrategySummary';
import WheelCycles from './dashboard/WheelCycles';
import Footer from './Footer';
import PublicDashboard from './dashboard/PublicDashboard';
import { useLocalization } from '../context/LocalizationContext';

interface DashboardProps {
  data: ParsedData;
  onReset: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ data, onReset }) => {
    const { locale } = useLocalization();
    const [view, setView] = useState<'private' | 'public'>('private');
    const [selectedCurrency, setSelectedCurrency] = useState<string>(data.nav.baseCurrency);
    const [allocationFilters, setAllocationFilters] = useState({ stocks: true, puts: true, calls: true });

    const formatCurrency = useMemo(() => (value: number, currency: string) => {
        return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    }, [locale]);

    const formatInSelectedCurrency = useMemo(() => (valueInBase: number) => {
        if (selectedCurrency === data.nav.baseCurrency) {
            return formatCurrency(valueInBase, selectedCurrency);
        }
        const rate = data.exchangeRates[selectedCurrency];
        if (!rate) {
            return formatCurrency(valueInBase, data.nav.baseCurrency); // Fallback
        }
        const convertedValue = valueInBase / rate;
        return formatCurrency(convertedValue, selectedCurrency);
    }, [locale, selectedCurrency, data.nav.baseCurrency, data.exchangeRates, formatCurrency]);


    const handleAllocationFilterChange = (filter: keyof typeof allocationFilters) => {
        setAllocationFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
    };

    const dashboardData = useMemo(() => {
        const stockPositions = data.positions.filter(p => !p.isOption);
        const stockPriceMap = new Map<string, number>(stockPositions.map(p => [p.symbol, p.closePrice]));
        const today = new Date();

        const shortPuts = data.positions
            .filter(p => p.isOption && p.optionType === 'P' && p.quantity < 0)
            .map(p => {
                const assignmentCostInOriginalCurrency = (p.strikePrice || 0) * Math.abs(p.quantity) * p.multiplier;
                const exchangeRate = data.exchangeRates[p.currency] || 1;
                const stockPrice = stockPriceMap.get(p.baseSymbol);
                
                const expiryDate = p.expiry ? new Date(p.expiry) : null;
                const dte = expiryDate ? Math.round((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) : undefined;

                const moneyness = (stockPrice !== undefined && p.strikePrice) ? (stockPrice - p.strikePrice) / p.strikePrice : undefined;

                // p.collectedPremium is in BASE currency. For the breakeven calculation, we must work in the position's currency.
                const collectedPremiumInBase = p.collectedPremium || 0;
                const positionCurrency = p.currency;
                const baseCurrency = data.nav.baseCurrency;
                
                let premiumInPositionCurrency = collectedPremiumInBase;

                // If the position's currency is different from the base currency, convert the premium
                if (positionCurrency !== baseCurrency) {
                    const exchangeRateForPosition = data.exchangeRates[positionCurrency];
                    // The rate is 'base currency per 1 unit of position currency'.
                    // To convert from base to position currency, we divide.
                    if (exchangeRateForPosition && exchangeRateForPosition !== 0) {
                        premiumInPositionCurrency = collectedPremiumInBase / exchangeRateForPosition;
                    } else {
                        // If rate is missing, we cannot calculate accurately. Set to 0 to avoid bad data.
                        premiumInPositionCurrency = 0;
                    }
                }
                
                const premiumPerShare = (premiumInPositionCurrency && p.multiplier > 0) ? (premiumInPositionCurrency / (Math.abs(p.quantity) * p.multiplier)) : 0;
                const breakevenPrice = p.strikePrice ? p.strikePrice - premiumPerShare : undefined;

                return { 
                    ...p, 
                    assignmentCost: assignmentCostInOriginalCurrency * exchangeRate,
                    dte,
                    moneyness,
                    breakevenPrice,
                    stockPrice
                };
            });
        
        const shortCalls = data.positions
            .filter(p => p.isOption && p.optionType === 'C' && p.quantity < 0)
            .map(p => {
                const stockPrice = stockPriceMap.get(p.baseSymbol);
                
                const expiryDate = p.expiry ? new Date(p.expiry) : null;
                const dte = expiryDate ? Math.max(0, Math.round((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))) : undefined;

                const moneyness = (stockPrice !== undefined && p.strikePrice) ? (stockPrice - p.strikePrice) / p.strikePrice : undefined;

                // Breakeven calculation for calls
                const collectedPremiumInBase = p.collectedPremium || 0;
                const positionCurrency = p.currency;
                const baseCurrency = data.nav.baseCurrency;
                
                let premiumInPositionCurrency = collectedPremiumInBase;

                if (positionCurrency !== baseCurrency) {
                    const exchangeRateForPosition = data.exchangeRates[positionCurrency];
                    if (exchangeRateForPosition && exchangeRateForPosition !== 0) {
                        premiumInPositionCurrency = collectedPremiumInBase / exchangeRateForPosition;
                    } else {
                        premiumInPositionCurrency = 0;
                    }
                }
                
                const premiumPerShare = (premiumInPositionCurrency && p.multiplier > 0) ? (premiumInPositionCurrency / (Math.abs(p.quantity) * p.multiplier)) : 0;
                // Breakeven for call is STRIKE + PREMIUM
                const breakevenPrice = p.strikePrice ? p.strikePrice + premiumPerShare : undefined;

                return {
                    ...p,
                    dte,
                    moneyness,
                    breakevenPrice,
                    stockPrice
                };
            });
        
        const likelyAssignments: (typeof shortPuts[0])[] = [];
        const unlikelyAssignments: (typeof shortPuts[0])[] = [];

        shortPuts.forEach(p => {
            let isLikely = false;
            // Use moneyness if available, otherwise fallback to P/L
            if (p.moneyness !== undefined) {
                isLikely = p.moneyness < 0; // Negative moneyness means ITM for puts
            } else {
                isLikely = p.unrealizedPL < 0;
            }
            
            if (isLikely) {
                likelyAssignments.push(p);
            } else {
                unlikelyAssignments.push(p);
            }
        });

        const likelyAssignmentValue = likelyAssignments.reduce((sum, p) => sum + p.assignmentCost, 0);
        const unlikelyAssignmentValue = unlikelyAssignments.reduce((sum, p) => sum + p.assignmentCost, 0);

        const cashBalance = data.nav.cash;
        const likelyCashNeeded = Math.max(0, likelyAssignmentValue - cashBalance);
        const cashAfterLikely = Math.max(0, cashBalance - likelyAssignmentValue);
        const unlikelyCashNeeded = Math.max(0, unlikelyAssignmentValue - cashAfterLikely);
        
        const createExpiryDetails = (assignments: (typeof shortPuts[0])[]) => {
             const assignmentByExpiry = assignments.reduce((acc, p) => {
                const expiry = p.expiry || 'Unknown';
                acc[expiry] = (acc[expiry] || 0) + p.assignmentCost;
                return acc;
            }, {} as Record<string, number>);

            return {
                headers: ['expiryDate', 'assignmentCost'],
                rows: Object.entries(assignmentByExpiry)
                    .sort((a, b) => {
                        const expiryA = a[0];
                        const expiryB = b[0];
                        
                        const timeA = new Date(expiryA).getTime();
                        const timeB = new Date(expiryB).getTime();

                        const aIsInvalid = isNaN(timeA);
                        const bIsInvalid = isNaN(timeB);

                        if (aIsInvalid && bIsInvalid) {
                            return expiryA.localeCompare(expiryB); // sort alphabetically if both invalid
                        }
                        if (aIsInvalid) {
                            return 1; // invalid dates at the end
                        }
                        if (bIsInvalid) {
                            return -1; // invalid dates at the end
                        }

                        return timeA - timeB;
                    })
                    .map(([expiry, cost]: [string, number]) => ({
                        expiryDate: expiry,
                        assignmentCost: formatInSelectedCurrency(cost),
                    })),
            };
        };

        const likelyShortfallDetails = createExpiryDetails(likelyAssignments);
        const unlikelyShortfallDetails = createExpiryDetails(unlikelyAssignments);

        const shortPutAssignmentCostMap = new Map(shortPuts.map(p => [p.symbol, p.assignmentCost]));

        const allocation = data.positions.reduce<Record<string, number>>((acc, p) => {
            const key = p.baseSymbol;
            if (!key) return acc;

            const isStock = p.assetCategory === 'Stocks';
            const isPut = p.isOption && p.optionType === 'P';
            const isCall = p.isOption && p.optionType === 'C';

            // Apply filters from state
            if ((isStock && !allocationFilters.stocks) ||
                (isPut && !allocationFilters.puts) ||
                (isCall && !allocationFilters.calls)) {
                return acc;
            }
             // Exclude positions that don't match any filter type
            if (!isStock && !isPut && !isCall) return acc;

            // For short puts, allocation is based on potential assignment cost (collateral).
            // For all other positions, it's based on absolute market value.
            const valueToUse = shortPutAssignmentCostMap.has(p.symbol) 
                ? shortPutAssignmentCostMap.get(p.symbol)! 
                : Math.abs(p.value);
            
            acc[key] = (acc[key] || 0) + valueToUse;
            return acc;
        }, {});

        const portfolioAllocation = Object.entries(allocation).map(([name, value]) => ({name, value})).sort((a,b) => b.value - a.value);

        const stockValue = stockPositions.reduce((sum, p) => sum + Math.abs(p.value), 0);
        const optionValue = data.positions.filter(p => p.isOption).reduce((sum, p) => sum + Math.abs(p.value), 0);
        
        const assetClassAllocation = [
            { name: 'Stocks', value: stockValue },
            { name: 'Options', value: optionValue }
        ];
        
        const calculatePerformance = (positions: Position[]) => {
            const premium = positions.reduce((sum, p) => sum + (p.collectedPremium || 0), 0);
            const currentValue = positions.reduce((sum, p) => sum + Math.abs(p.value), 0);
            const capture = premium > 0 ? ((premium - currentValue) / premium) * 100 : 0;
            return { premium, currentValue, capture };
        };

        const shortPutPerformance = calculatePerformance(shortPuts);
        const shortCallPerformance = calculatePerformance(shortCalls);

        const categoryOrder: { [key: string]: number } = {
            'Stocks': 1,
            'Forex': 2,
            'Options': 3,
        };

        const arocBySymbol = new Map<string, number>();
        if (data.arocAnalysis && data.arocAnalysis.trades.length > 0) {
            const arocTradesBySymbol = data.arocAnalysis.trades.reduce((acc, trade) => {
                const symbol = trade.symbol; // Use the full option symbol
                if (!acc[symbol]) {
                    acc[symbol] = [];
                }
                acc[symbol].push(trade.aroc);
                return acc;
            }, {} as Record<string, number[]>);

            for (const symbol in arocTradesBySymbol) {
                const arocs = arocTradesBySymbol[symbol];
                const avgAroc = arocs.reduce((sum, val) => sum + val, 0) / arocs.length;
                arocBySymbol.set(symbol, avgAroc);
            }
        }
        
        const closedPositions = data.closedPositions
            .filter(p => p.realizedPL !== 0)
            .map(p => ({
                ...p,
                aroc: arocBySymbol.get(p.symbol) // Look up with full symbol
            }))
            .sort((a, b) => {
                const orderA = categoryOrder[a.assetCategory] || 99;
                const orderB = categoryOrder[b.assetCategory] || 99;
                
                if (orderA !== orderB) {
                    return orderA - orderB;
                }
                
                // Sort by close date if available (newest first)
                if (a.closeDate && b.closeDate) {
                    return new Date(b.closeDate).getTime() - new Date(a.closeDate).getTime();
                }
                if (a.closeDate) { // a has date, b doesn't. a comes first.
                    return -1;
                }
                if (b.closeDate) { // b has date, a doesn't. b comes first.
                    return 1;
                }

                // Fallback for items without a date, sort by realized P/L
                return Math.abs(b.realizedPL) - Math.abs(a.realizedPL);
            });
            
        const stockTotals = {
            costBasis: stockPositions.reduce((sum, p) => sum + p.costBasis, 0),
            value: stockPositions.reduce((sum, p) => sum + p.value, 0),
            unrealizedPL: stockPositions.reduce((sum, p) => sum + p.unrealizedPL, 0),
        };

        const putTotals = {
            collectedPremium: shortPuts.reduce((sum, p) => sum + (p.collectedPremium || 0), 0),
            unrealizedPL: shortPuts.reduce((sum, p) => sum + p.unrealizedPL, 0),
            assignmentCost: shortPuts.reduce((sum, p) => sum + p.assignmentCost, 0),
        };

        const callTotals = {
            collectedPremium: shortCalls.reduce((sum, p) => sum + (p.collectedPremium || 0), 0),
            unrealizedPL: shortCalls.reduce((sum, p) => sum + p.unrealizedPL, 0),
        };
        
        const maxAssignmentValue = shortPuts.reduce((sum, p) => sum + p.assignmentCost, 0);
        const returnOnMaxRisk = maxAssignmentValue > 0 ? (shortPutPerformance.premium / maxAssignmentValue * 100) : 0;
        const shortPutLeverage = data.totalNAV > 0 ? maxAssignmentValue / data.totalNAV : 0;
        const shortPutLeverageCash = data.nav.cash > 0 ? maxAssignmentValue / data.nav.cash : (maxAssignmentValue > 0 ? Infinity : 0);


        return { 
            shortPuts,
            shortCalls,
            stockPositions, 
            cashBalance, 
            portfolioAllocation, 
            assetClassAllocation,
            shortPutPerformance,
            shortCallPerformance, 
            closedPositions, 
            stockTotals,
            putTotals,
            callTotals,
            returnOnMaxRisk,
            shortPutLeverage,
            shortPutLeverageCash,
            likelyAssignmentValue,
            unlikelyAssignmentValue,
            likelyCashNeeded,
            unlikelyCashNeeded,
            likelyShortfallDetails,
            unlikelyShortfallDetails,
        };
    }, [data, selectedCurrency, allocationFilters, locale]);

    if (view === 'public') {
        return <PublicDashboard data={data} dashboardData={dashboardData} onExit={() => setView('private')} />;
    }
    
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <Header 
                accountInfo={data.accountInfo} 
                exchangeRates={data.exchangeRates} 
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
                onReset={onReset}
                onPublicViewClick={() => setView('public')}
            />
            <MetricCards 
                data={data} 
                formatInSelectedCurrency={formatInSelectedCurrency} 
                shortPutLeverage={dashboardData.shortPutLeverage}
                shortPutLeverageCash={dashboardData.shortPutLeverageCash}
            />
            <PLSummary plSummary={data.plSummary} valueFormatter={formatInSelectedCurrency} />
            <NAVSankeyChart navChange={data.navChange} formatInSelectedCurrency={formatInSelectedCurrency} />
            <TickerPLChart 
                data={data.tickerPL} 
                formatInSelectedCurrency={formatInSelectedCurrency} 
            />
            <MonthlyPerformanceChart 
                data={data.monthlySummary}
                valueFormatter={(value) => formatInSelectedCurrency(value).replace(/(\.00|,[0-9]{2})$/, '')}
                tooltipValueFormatter={formatInSelectedCurrency}
            />
            <FeesChart 
                data={data.monthlySummary}
                formatInSelectedCurrency={formatInSelectedCurrency}
            />
            <ShortPutRisk 
                cashBalance={dashboardData.cashBalance}
                likelyAssignmentValue={dashboardData.likelyAssignmentValue}
                unlikelyAssignmentValue={dashboardData.unlikelyAssignmentValue}
                likelyCashNeeded={dashboardData.likelyCashNeeded}
                unlikelyCashNeeded={dashboardData.unlikelyCashNeeded}
                likelyShortfallDetails={dashboardData.likelyShortfallDetails}
                unlikelyShortfallDetails={dashboardData.unlikelyShortfallDetails}
                formatInSelectedCurrency={formatInSelectedCurrency}
            />
            <ShortOptionsPerformance 
                shortPutPerformance={dashboardData.shortPutPerformance}
                shortCallPerformance={dashboardData.shortCallPerformance}
                returnOnMaxRisk={dashboardData.returnOnMaxRisk}
                syepIncome={data.syepIncome}
                arocAnalysis={data.arocAnalysis}
                optionsStrategyMetrics={data.optionsStrategyMetrics}
                shortPutIncomeSummary={data.shortPutIncomeSummary}
                formatInSelectedCurrency={formatInSelectedCurrency}
            />
            <AllocationCharts
                portfolioAllocation={dashboardData.portfolioAllocation}
                assetClassAllocation={dashboardData.assetClassAllocation}
                formatInSelectedCurrency={formatInSelectedCurrency}
                allocationFilters={allocationFilters}
                onAllocationFilterChange={handleAllocationFilterChange}
            />
            <OpenPositions 
                stockPositions={dashboardData.stockPositions}
                shortPuts={dashboardData.shortPuts}
                shortCalls={dashboardData.shortCalls}
                stockTotals={dashboardData.stockTotals}
                putTotals={dashboardData.putTotals}
                callTotals={dashboardData.callTotals}
                formatInSelectedCurrency={formatInSelectedCurrency}
                formatCurrency={formatCurrency}
            />
            <ClosedPositions
                closedPositions={dashboardData.closedPositions}
                formatInSelectedCurrency={formatInSelectedCurrency}
            />
            <WheelStrategySummary 
                wheelCycleAnalysis={data.wheelCycleAnalysis}
                formatInSelectedCurrency={formatInSelectedCurrency}
            />
            <WheelCycles 
                wheelCycleAnalysis={data.wheelCycleAnalysis}
                formatInSelectedCurrency={formatInSelectedCurrency}
                formatCurrency={formatCurrency}
                baseCurrency={data.nav.baseCurrency}
            />
            <Footer />
        </div>
    );
};

export default Dashboard;
