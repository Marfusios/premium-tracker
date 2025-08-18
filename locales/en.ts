
export const en = {
    app: {
        title: "IBKR Portfolio Analyzer",
        loading: "Analyzing your statement...",
        tryAgain: "Try Again",
        errors: {
            title: "An Error Occurred",
            fileRead: "Failed to read the file.",
            criticalData: "Could not parse critical data from the file. Please ensure it's a valid IBKR activity statement.",
            unknownParse: "An unknown parsing error occurred."
        }
    },
    fileUpload: {
        title: "Portfolio Analyzer",
        subtitle: "Upload your IBKR activity statement to get started.",
        description: "Turn your Interactive Brokers activity statement into a powerful decision-making tool. Get a crystal-clear view of your performance, specializing in options selling and the wheel strategy. Our dashboard helps you visualize your gains, manage portfolio risk, and trade on margin with confidence.",
        dropzone: {
            dragAndDrop: "Drag and drop",
            or: "or",
            clickToUpload: "click to upload",
            yourCsvFile: "your CSV file",
            acceptedFormats: "(.csv or .txt format accepted)"
        },
        privacyNote: "Note: All processing happens in your browser. Your data is never uploaded to any server.",
        instructions: {
            title: "How to Get Your Activity Statement",
            step1_part1: 'Log in to Interactive Brokers and navigate to the ',
            step1_strong: '"Performance & Reports"',
            step1_part2: ' tab.',
            step2_part1: 'Under "Statements", find ',
            step2_strong1: '"Activity"',
            step2_part2: ' and click the ',
            step2_strong2: '"Run"',
            step2_part3: ' button (the arrow icon).',
            caption1: "Steps 1 & 2: Navigate to Activity Statements.",
            step3_part1: 'In the pop-up window, choose your desired ',
            step3_strong: 'Period',
            step3_part2: ' (e.g., "Monthly", "Year to Date").',
            step4_part1: 'Find the ',
            step4_strong1: 'CSV',
            step4_part2: ' format option and click the corresponding ',
            step4_strong2: '"Download"',
            step4_part3: ' button to save the file.',
            caption2: "Steps 3 & 4: Select period and download CSV.",
            notes: {
                title: "Important Notes",
                note1: "Ensure you are downloading the Activity statement, as other statement types may not be compatible.",
                note2: "The recommended format is CSV. While the app can handle .txt files with the same structure, CSV is preferred.",
                note3: `Longer periods will provide more comprehensive data for analysis. "Year to Date" is a good starting point.`,
                note4: "Do not open and re-save the CSV file in spreadsheet software like Excel, as it may alter the formatting and cause parsing errors. Download it and upload it directly here."
            }
        },
        guide: {
            title: "A Beginner's Guide to The Wheel Strategy",
            description: "The Wheel is an options trading strategy designed to generate consistent income. It involves systematically selling cash-secured puts and covered calls, with the goal of acquiring a stock you like at a discount and then selling it for a profit."
        }
    },
    dashboard: {
        header: {
            title: "Portfolio Dashboard",
            analyzeNewFile: "Analyze New File"
        },
        metrics: {
            totalNAV: { title: "Total Net Asset Value", description: "Current total portfolio value." },
            twr: { title: "Time Weighted Return", description: "TWR for the statement period.", tooltip: "Measures portfolio performance over time, removing the distorting effects of cash flows. It reflects your personal investment performance." },
            putLeverage: { title: "Short Put Leverage", description: "Assignment Value vs. NAV / vs. Cash Balance", tooltip: "Compares total assignment cost of short puts to your NAV and cash. NAV: Total value of all assets. Cash: Just your cash balance. High values indicate higher risk." },
            baseCurrency: { title: "Base Currency", description: "The primary currency of the account." }
        },
        plSummary: {
            title: "Profit & Loss Summary",
            assetClass: "Asset Class",
            realizedPL: "Realized P/L",
            unrealizedPL: "Unrealized P/L",
            totalPL: "Total P/L",
            realizedTooltip: "Profit or loss from positions that have been closed. This is 'locked-in' P/L.",
            unrealizedTooltip: "The current 'on-paper' profit or loss on positions that are still open. This value fluctuates with the market.",
            stocks: "Stocks",
            options: "Options",
            forex: "Forex",
            total: "Total"
        },
        navSankey: {
            title: "NAV Flow",
            nodes: {
                startingNAV: "Starting NAV",
                deposits: "Deposits",
                m2mGains: "M2M Gains",
                interestFXGains: "Interest & FX Gains",
                grossValue: "Gross Value",
                endingNAV: "Ending NAV",
                withdrawals: "Withdrawals",
                m2mLosses: "M2M Losses",
                commissions: "Commissions",
                feesTax: "Fees & Tax",
                interestPaid: "Interest Paid"
            }
        },
        tickerPL: {
            title: "P/L Contribution by Ticker",
            tooltip: { totalPL: "Total P/L" }
        },
        monthlyPerformance: {
            title: {
                income: "Monthly Income Tracker",
                pl: "Monthly P/L Tracker"
            },
            buttons: {
                income: "Income",
                pl: "P/L"
            },
            legend: {
                optionsPremium: "Options Premium",
                optionsPL: "Options P/L",
                syepIncome: "SYEP Income",
                interest: "Interest"
            },
            tooltip: {
                total: "Total"
            }
        },
        fees: {
            title: "Monthly Costs Breakdown",
            legend: {
                commissions: "Commissions",
                otherFees: "Other Fees",
                salesTax: "Sales Tax",
                paidInterest: "Paid Interest"
            },
            tooltip: {
                total: "Total Costs"
            }
        },
        putRisk: {
            title: "Short Put Risk Analysis",
            cashBalance: { title: "Current Cash Balance", description: "Your available cash for assignments." },
            likelyRisk: {
                title: "Likely Assignment Risk",
                assignmentValue: { title: "Assignment Value (ITM)", description: "For puts that are In-The-Money or have a negative P/L.", tooltip: "The total cash required to purchase shares for all short puts that are currently In-The-Money (ITM)." },
                cashShortfall: { title: "Cash Shortfall", description: "Funds needed for these likely assignments.", tooltip: "The amount of additional cash required if all 'Likely' (ITM) puts were assigned today. Calculated as (Assignment Value - Cash Balance)." }
            },
            unlikelyRisk: {
                title: "Unlikely Assignment Risk",
                assignmentValue: { title: "Assignment Value (OTM)", description: "For puts that are Out-of-The-Money or have a positive P/L.", tooltip: "The total cash required to purchase shares for all short puts that are currently Out-of-The-Money (OTM)." },
                additionalShortfall: { title: "Additional Shortfall", description: "More funds needed if these puts are also assigned.", tooltip: "The amount of additional cash required if all 'Unlikely' (OTM) puts were also assigned, after accounting for cash used on likely assignments." }
            }
        },
        shortOptionsStrategy: {
            title: "Short Options Strategy",
            openPositions: {
                title: "Open Positions Performance",
                putsTitle: "Short Puts (Open)",
                callsTitle: "Short Calls (Open)",
                totalPremium: { title: "Total Premium", tooltipPuts: "Total premium collected for all open short put positions.", tooltipCalls: "Total premium collected for all open short call positions." },
                currentValue: { title: "Current Value (Cost to Close)", tooltipPuts: "Current market value of open short put options. This represents the cost to buy them back and close the positions.", tooltipCalls: "Current market value of open short call options. This represents the cost to buy them back and close the positions." },
                premiumCapture: { title: "Premium Capture", tooltip: "The percentage of the initial premium that has been 'captured' as profit so far. Calculated as (Premium - Current Value) / Premium." },
                returnOnMaxRisk: { title: "Return on Max Risk", tooltip: "Total premium from open short puts as a percentage of their total potential assignment cost. Shows the potential return on the capital you have at risk." }
            },
            realizedIncome: {
                title: "Realized Income (All Sources)",
                winRate: { title: "Overall Win Rate", description: "{{wins}} wins of {{total}} closed short options.", tooltip: "The percentage of all closed short option trades (puts and calls) that resulted in a realized profit." },
                syepIncome: { title: "SYEP Income", description: "From the Stock Yield Enhancement Program.", tooltip: "Income earned by allowing IBKR to lend out your fully-paid shares." }
            },
            closedPuts: {
                title: "Closed Short Puts Deep Dive",
                totalPL: { title: "Total Realized P/L", description: "From expired or bought-to-close puts.", tooltip: "Total profit from short put options that expired out-of-the-money or were closed by buying them back." },
                contractsClosed: { title: "Contracts Closed", description: "Total number of put contracts closed.", tooltip: "The total count of individual short put contracts that either expired worthless or were bought back to close." },
                avgPL: { title: "Avg. P/L / Contract", description: "Average profit or loss per closed contract.", tooltip: "The average income or loss generated from each closed short put contract." },
                assignmentRate: { title: "Assignment Rate", description: "Percentage of short puts that were assigned.", tooltip: "Of all closed short puts, this is the percentage that were assigned (i.e., you had to buy the stock)." },
                avgAroc: { title: "Avg. Annualized ROC", description: "Avg. annualized return for profitable closed puts.", tooltip: "Annualized Return on Capital. For profitable short puts, it annualizes the return based on the capital at risk and the trade duration. Helps compare trades of different lengths." }
            }
        },
        allocations: {
            byTickerTitle: "Portfolio Allocation by Ticker",
            byTickerTooltip: "Shows allocation by underlying ticker. Note: Stocks and Calls are weighted by market value, while short Puts are weighted by their potential assignment cost (collateral).",
            byAssetClassTitle: "Asset Class Allocation (by Value)",
            filters: {
                stocks: "Stocks",
                puts: "Put Options",
                calls: "Call Options"
            },
            assetClasses: {
                stocks: "Stocks",
                options: "Options",
                cash: "Cash"
            }
        },
        openPositions: {
            title: "Open Positions",
            total: "Total",
            stocks: {
                title: "Stocks",
                symbol: "Symbol",
                qty: "Qty",
                currentPrice: "Current Price",
                currentPriceTooltip: "The latest available closing price for the stock.",
                costBasis: "Cost Basis",
                costBasisTooltip: "The total amount paid for the shares, including commissions, converted to your base currency.",
                marketValue: "Market Value",
                marketValueTooltip: "The current total value of the position (Quantity * Current Price).",
                unrealizedPL: "Unrealized P/L",
                unrealizedPLTooltip: "The current 'on-paper' profit or loss for this position."
            },
            puts: {
                title: "Puts",
                symbol: "Symbol",
                qty: "Qty",
                strike: "Strike",
                breakeven: "Breakeven",
                breakevenTooltip: "The stock price at which the position breaks even at expiration (Strike Price - Net Premium Per Share).",
                moneyness: "Moneyness",
                moneynessTooltip: "How far the current stock price is from the strike price (as a %). Positive is Out-of-the-Money (good), negative is In-the-Money (risky).",
                dte: "DTE",
                dteTooltip: "Days Till Expiry. The number of calendar days until the option expires.",
                premium: "Premium",
                premiumTooltip: "The net credit received for selling this option, converted to your base currency.",
                unrealizedPL: "Unrealized P/L",
                assignmentCost: "Assignment Cost",
                assignmentCostTooltip: "The total cash required to buy the shares if assigned (Strike Price * Quantity * Multiplier).",
                moneynessPriceAvailable: "Based on the latest close price of {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Latest stock price for {{baseSymbol}} is not available because there is no open stock position for this ticker."
            },
            calls: {
                title: "Calls",
                symbol: "Symbol",
                qty: "Qty",
                strike: "Strike",
                breakeven: "Breakeven",
                breakevenTooltip: "The stock price at which the position breaks even at expiration (Strike Price + Net Premium Per Share).",
                moneyness: "Moneyness",
                moneynessTooltip: "How far the current stock price is from the strike price (as a %). Positive is In-the-Money (risky), negative is Out-of-the-Money (good).",
                dte: "DTE",
                dteTooltip: "Days Till Expiry. The number of calendar days until the option expires.",
                premium: "Premium",
                premiumTooltip: "The net credit received for selling this option, converted to your base currency.",
                unrealizedPL: "Unrealized P/L",
                moneynessPriceAvailable: "Based on the latest close price of {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Latest stock price for {{baseSymbol}} is not available because there is no open stock position for this ticker."
            }
        },
        closedPositions: {
            title: "Closed Positions (Realized P/L)",
            assetCategory: "Asset Category",
            symbol: "Symbol",
            realizedPL: "Realized P/L",
            aroc: "AROC",
            arocTooltip: "Annualized Return on Capital. For profitable short puts, it annualizes the return based on the capital at risk and the trade duration. Helps compare trades of different lengths."
        },
        wheelSummary: {
            title: "Wheel Strategy Performance Summary",
            totalPL: { title: "Total Wheel P/L", description: "Total realized P/L from all completed wheel cycles.", tooltip: "Sum of all profits and losses from every completed wheel cycle (Put Premium + Call Premium + Stock P/L)." },
            totalPremium: { title: "Total Premium Collected", description: "From all completed and pending wheel cycles.", tooltip: "Sum of all put and call premiums collected across every wheel cycle, both completed and still in progress." },
            avgDuration: { title: "Avg. Cycle Duration", description: "Average duration of a completed wheel cycle.", value: "{{days}} Days", tooltip: "The average number of days from the start of a cycle (put assignment) to its end (stock sale)." },
            annualizedReturn: { title: "Overall Annualized Return", description: "Capital & time-weighted annualized return on completed cycles.", tooltip: "The time and capital-weighted annualized return for all completed cycles. This metric provides the most accurate picture of the strategy's overall efficiency." }
        },
        wheel: {
            title: "Wheel Cycle Analysis",
            pending: {
                title: "Pending Cycles",
                headers: {
                    symbol: "Symbol",
                    startDate: "Start Date",
                    netCostBasis: "Net Cost Basis",
                    callPremium: "Call Premium",
                    currentValue: "Current Value",
                    unrealizedStockPL: "Unrealized Stock P/L",
                    currentTotalPL: "Current Total P/L"
                },
                tooltips: {
                    startDate: "The date you were assigned the shares, marking the start of the cycle.",
                    netCostBasis: "The effective cost of your shares after subtracting the premium from the initial put (Gross Cost - Put Premium).",
                    currentTotalPL: "The current unrealized P/L for the entire cycle if you were to close it now (Unrealized Stock P/L + Total Call Premium)."
                }
            },
            completed: {
                title: "Completed Cycles",
                headers: {
                    symbol: "Symbol",
                    startDate: "Start Date",
                    endDate: "End Date",
                    duration: "Duration (Days)",
                    callPremium: "Call Premium",
                    stockPL: "Stock P/L",
                    totalPL: "Total P/L",
                    returnOnCost: "Return on Net Cost"
                },
                tooltips: {
                    endDate: "End Date",
                    duration: "Duration (Days)",
                    totalPL: "The final profit or loss for the entire cycle (Call Premium + Stock P/L).",
                    returnOnCost: "The total P/L of the cycle as a percentage of the net cost basis of the assigned stock."
                }
            },
            details: {
                costBasisTitle: "Cycle Cost Basis",
                costBasisPLTitle: "Cycle Cost Basis & P/L",
                assignment: "Assignment",
                assignmentText: "{{shares}} shares @ {{price}}",
                grossCostBasis: "Gross Cost Basis",
                putPremiumApplied: "Put Premium Applied",
                netCostBasis: "Net Cost Basis",
                sale: "Sale",
                saleText: "{{shares}} shares @ {{price}}",
                totalSaleProceeds: "Total Sale Proceeds",
                stockPLOnNet: "Stock P/L (on Net Cost)",
                tradeLogTitle: "Full Trade Log",
                log: {
                    date: "Date",
                    description: "Description",
                    amount: "Amount"
                }
            }
        }
    },
    publicDashboard: {
        title: "Public Share View",
        backButton: "Back to Private View",
        publicViewButtonTooltip: "Switch to Public View",
        export: "Export",
        exporting: "Exporting...",
        exportAsPng: "Export as PNG",
        exportAsSvg: "Export as SVG",
        reportTitle: "My Portfolio Snapshot",
        period: "Period",
        generatedBy: "Generated by IBKR Portfolio Analyzer",
        metrics: {
            winRate: {
                title: "Win Rate",
                description: "Of all closed short options"
            },
            assignmentRate: {
                title: "Assignment Rate",
                description: "Of all closed short puts"
            },
            annualizedReturn: {
                title: "Wheel Annualized Return",
                description: "On completed cycles"
            }
        }
    },
    metricCard: {
        showDetails: "Details",
        hideDetails: "Hide Details"
    },
    pagination: {
        page: "Page {{currentPage}} of {{totalPages}}",
        prev: "Prev",
        next: "Next"
    },
    assetCategories: {
        stocks: "Stocks",
        options: "Options",
        forex: "Forex"
    },
    dynamicHeaders: {
        expiryDate: "Expiry Date",
        assignmentCost: "Assignment Cost",
        symbol: "Symbol",
        daysOpen: "Days Open",
        premium: "Premium",
        aroc: "AROC"
    },
    footer: {
        disclaimerTitle: "Disclaimer",
        disclaimerText: "This application is provided for informational purposes only. The app is still under development and can contain bugs. We are not responsible for any financial decisions made based on this app. Always do your own research.",
        createdBy: "Created by",
        version: "Version"
    },
    guide: {
        title: "A Beginner's Guide to The Wheel Strategy",
        description: "The Wheel is an options trading strategy designed to generate consistent income. It involves systematically selling cash-secured puts and covered calls, with the goal of acquiring a stock you like at a discount and then selling it for a profit.",
        diagram: {
            footer: "The animation shows the two main loops of the Wheel. The full loop involves being assigned stock and later selling it. Shorter loops occur when options expire worthless, allowing you to simply collect the premium and repeat a step.",
            nodes: {
                yourCash: "Your Cash",
                startEnd: "Start & End",
                sellPut: "1. Sell Put",
                collectPremium: "Collect Premium",
                ownShares: "Own 100 Shares",
                fromAssignment: "From Assignment",
                sellCall: "2. Sell Call",
                sellShares: "Sell 100 Shares",
                calledAway: "Shares Called Away"
            },
            legend: {
                title: "Animation Legend",
                cashFlow: "Cash Flow",
                premiumIncome: "Premium Income",
                stockHolding: "Stock Holding",
                assignment: "Assignment"
            },
            stockPrice: "Stock Price",
            pl: "P/L",
            strikePrice: "Strike Price",
            breakeven: "Breakeven",
            breakevenPutDesc: "(Strike - Premium)",
            breakevenCallDesc: "(Cost - Premium)",
            maxProfit: "Max Profit",
            maxProfitDesc: "(Premium)",
            maxProfitCapped: "(Capped)",
            lossArea: "Loss Area",
            yourCostBasis: "Your Cost Basis"
        },
        step1: {
            title: "Sell a Cash-Secured Put",
            description: "The first step is to sell a put option on a stock you actually want to own. You choose a strike price below the current market price—this is the price you're willing to pay. In exchange for selling this option, you receive instant income, called a premium.",
            outcomeA: {
                title: "Outcome A: Success! (Stock stays above strike)",
                description: "The option expires worthless. You keep 100% of the premium as pure profit. You can then repeat this step, selling another put to generate more income."
            },
            outcomeB: {
                title: "Outcome B: Assignment (Stock drops below strike)",
                description: "You get assigned and must buy 100 shares at the strike price. But because you already received a premium, your effective cost basis is lower than the strike price. You now own the stock at a discount!"
            }
        },
        step2: {
            title: "Sell a Covered Call",
            description: "You only do this step if you were assigned shares from Step 1. Now that you own 100 shares, you can sell a call option against them to generate more income. You choose a strike price above your cost basis.",
            outcomeA: {
                title: "Outcome A: Success! (Stock stays below strike)",
                description: "The option expires worthless. You keep the premium and your 100 shares. You can then repeat this step, selling another call for more income."
            },
            outcomeB: {
                title: "Outcome B: Called Away (Stock rises above strike)",
                description: "Your 100 shares are sold at the strike price. You keep the premium from the call PLUS the profit from selling the shares above your cost basis. The wheel is complete, and you're back in cash, ready to start over."
            }
        },
        benefits: {
            title: "Key Benefits",
            benefit1: { title: "Generates Income", description: "Consistently collect premiums from selling puts and calls." },
            benefit2: { title: "Buy Stocks Cheaper", description: "Acquire stocks you like at a lower effective price." },
            benefit3: { title: "You Define Your Prices", description: "You set the price you're willing to buy and (potentially) sell at." }
        },
        risks: {
            title: "Important Risks",
            risk1: { title: "Holding Risk", description: "The main risk is being assigned a stock whose price then drops significantly. You could be holding a losing stock for a long time." },
            risk2: { title: "Capped Gains", description: "When you sell a covered call, you cap your potential upside on the stock." },
            risk3: { title: "Patience Required", description: "Never use the Wheel strategy on a stock you aren't happy to own for the long term." }
        },
        copilot: {
            title: "This App is Your Wheel Strategy Co-Pilot",
            description: "Manually tracking Wheel trades can be complex. This analyzer does the heavy lifting for you. It automatically identifies your completed and pending Wheel cycles, calculating your exact P/L, total premiums, duration, and annualized returns for each one. Stop guessing and start seeing exactly how your strategy is performing."
        }
    }
};
