export const cs = {
    app: {
        title: "IBKR Analyzátor Portfolia",
        loading: "Analyzuji váš výpis...",
        tryAgain: "Zkusit znovu",
        errors: {
            title: "Došlo k chybě",
            fileRead: "Nepodařilo se přečíst soubor.",
            criticalData: "Nelze analyzovat kritická data ze souboru. Ujistěte se, že se jedná o platný výpis aktivit IBKR.",
            unknownParse: "Došlo k neznámé chybě při zpracování."
        }
    },
    fileUpload: {
        title: "Analyzátor Portfolia",
        subtitle: "Pro začátek nahrajte svůj výpis aktivit z IBKR.",
        description: "Proměňte svůj výpis aktivit z Interactive Brokers v mocný nástroj pro rozhodování. Získejte křišťálově čistý pohled na svou výkonnost se specializací na prodej opcí a strategii 'The Wheel'. Náš dashboard vám pomůže vizualizovat vaše zisky, řídit riziko portfolia a s jistotou obchodovat na marži.",
        dropzone: {
            dragAndDrop: "Přetáhněte",
            or: "nebo",
            clickToUpload: "klikněte pro nahrání",
            yourCsvFile: "vašeho CSV souboru",
            acceptedFormats: "(přijímány formáty .csv nebo .txt)"
        },
        privacyNote: "Poznámka: Veškeré zpracování probíhá ve vašem prohlížeči. Vaše data se nikdy nenahrávají na žádný server.",
        instructions: {
            title: "Jak získat výpis aktivit",
            step1_part1: 'Přihlaste se do Interactive Brokers a přejděte na kartu ',
            step1_strong: '"Výkonnost a sestavy"',
            step1_part2: '.',
            step2_part1: 'Pod "Výpisy" najděte ',
            step2_strong1: '"Aktivita"',
            step2_part2: ' a klikněte na tlačítko ',
            step2_strong2: '"Spustit"',
            step2_part3: ' (ikona šipky).',
            caption1: "Kroky 1 a 2: Přejděte na výpisy aktivit.",
            step3_part1: 'Ve vyskakovacím okně vyberte požadované ',
            step3_strong: 'Období',
            step3_part2: ' (např. "Měsíční", "Od začátku roku").',
            step4_part1: 'Najděte možnost formátu ',
            step4_strong1: 'CSV',
            step4_part2: ' a klikněte na odpovídající tlačítko ',
            step4_strong2: '"Stáhnout"',
            step4_part3: ' pro uložení souboru.',
            caption2: "Kroky 3 a 4: Vyberte období a stáhněte CSV.",
            notes: {
                title: "Důležité poznámky",
                note1: "Ujistěte se, že stahujete výpis Aktivity, protože jiné typy výpisů nemusí být kompatibilní.",
                note2: "Doporučený formát je CSV. Aplikace sice zvládne i soubory .txt se stejnou strukturou, ale CSV je preferováno.",
                note3: `Delší období poskytnou komplexnější data pro analýzu. "Od začátku roku" je dobrý výchozí bod.`,
                note4: "Neotevírejte a znovu neukládejte soubor CSV v tabulkových procesorech jako Excel, mohlo by to změnit formátování a způsobit chyby při zpracování. Stáhněte ho a nahrajte přímo sem."
            }
        },
        guide: {
            title: "Průvodce pro začátečníky: Strategie 'The Wheel'",
            description: "'The Wheel' je opční obchodní strategie navržená k generování konzistentního příjmu. Zahrnuje systematický prodej cash-secured put opcí a covered call opcí s cílem získat akcii, kterou chcete, se slevou a následně ji prodat se ziskem."
        }
    },
    dashboard: {
        header: {
            title: "Přehled Portfolia",
            analyzeNewFile: "Analyzovat nový soubor"
        },
        metrics: {
            totalNAV: { title: "Celková čistá hodnota aktiv", description: "Aktuální celková hodnota portfolia." },
            twr: { title: "Časově vážený výnos", description: "TWR za období výpisu.", tooltip: "Měří výkonnost portfolia v čase a odstraňuje zkreslující vlivy peněžních toků. Odráží vaši osobní investiční výkonnost." },
            putLeverage: { title: "Páka na Short Put opcích", description: "Hodnota přiřazení vs. NAV / vs. Hotovost", tooltip: "Porovnává celkové náklady na přiřazení short put opcí s vaším NAV a hotovostí. NAV: Celková hodnota všech aktiv. Hotovost: Pouze váš hotovostní zůstatek. Vysoké hodnoty značí vyšší riziko." },
            baseCurrency: { title: "Základní měna", description: "Primární měna účtu." }
        },
        plSummary: {
            title: "Shrnutí zisku a ztráty",
            assetClass: "Třída aktiv",
            realizedPL: "Realizovaný Z/Z",
            unrealizedPL: "Nerealizovaný Z/Z",
            totalPL: "Celkový Z/Z",
            realizedTooltip: "Zisk nebo ztráta z pozic, které byly uzavřeny. Jedná se o 'uzamčený' Z/Z.",
            unrealizedTooltip: "Aktuální 'papírový' zisk nebo ztráta u pozic, které jsou stále otevřené. Tato hodnota se mění s trhem.",
            stocks: "Akcie",
            options: "Opce",
            forex: "Forex",
            total: "Celkem"
        },
        navSankey: {
            title: "Tok NAV",
            nodes: {
                startingNAV: "Počáteční NAV",
                deposits: "Vklady",
                m2mGains: "M2M Zisky",
                interestFXGains: "Úroky a FX zisky",
                grossValue: "Hrubá hodnota",
                endingNAV: "Konečné NAV",
                withdrawals: "Výběry",
                m2mLosses: "M2M Ztráty",
                commissions: "Poplatky",
                feesTax: "Poplatky a daně",
                interestPaid: "Placené úroky"
            }
        },
        tickerPL: {
            title: "Příspěvek k Z/Z podle tickeru",
            tooltip: { totalPL: "Celkový Z/Z" }
        },
        monthlyPerformance: {
            title: {
                income: "Měsíční sledování příjmů",
                pl: "Měsíční sledování Z/Z"
            },
            buttons: {
                income: "Příjmy",
                pl: "Z/Z"
            },
            legend: {
                optionsPremium: "Opční prémium",
                optionsPL: "Opční Z/Z",
                stocksPL: "Akcie Z/Z",
                forexPL: "Forex Z/Z",
                syepIncome: "Příjem z SYEP",
                interest: "Úrok"
            },
            tooltip: {
                total: "Celkem"
            }
        },
        fees: {
            title: "Měsíční rozpis nákladů",
            legend: {
                commissions: "Provize",
                otherFees: "Ostatní poplatky",
                salesTax: "Daň z prodeje",
                paidInterest: "Placený úrok"
            },
            tooltip: {
                total: "Celkové náklady"
            }
        },
        putRisk: {
            title: "Analýza rizika Short Put opcí",
            cashBalance: { title: "Aktuální hotovost", description: "Vaše dostupná hotovost pro přiřazení." },
            likelyRisk: {
                title: "Riziko pravděpodobného přiřazení",
                assignmentValue: { title: "Hodnota přiřazení (ITM)", description: "Pro put opce, které jsou v penězích (In-The-Money) nebo mají negativní Z/Z.", tooltip: "Celková hotovost potřebná k nákupu akcií pro všechny short put opce, které jsou aktuálně v penězích (ITM)." },
                cashShortfall: { title: "Nedostatek hotovosti", description: "Prostředky potřebné pro tato pravděpodobná přiřazení.", tooltip: "Částka dodatečné hotovosti potřebná, pokud by dnes byly přiřazeny všechny 'pravděpodobné' (ITM) put opce. Vypočteno jako (Hodnota přiřazení - Hotovost)." }
            },
            unlikelyRisk: {
                title: "Riziko nepravděpodobného přiřazení",
                assignmentValue: { title: "Hodnota přiřazení (OTM)", description: "Pro put opce, které jsou mimo peníze (Out-of-The-Money) nebo mají pozitivní Z/Z.", tooltip: "Celková hotovost potřebná k nákupu akcií pro všechny short put opce, které jsou aktuálně mimo peníze (OTM)." },
                additionalShortfall: { title: "Dodatečný nedostatek", description: "Další prostředky potřebné, pokud budou přiřazeny i tyto put opce.", tooltip: "Částka dodatečné hotovosti potřebná, pokud by byly přiřazeny i všechny 'nepravděpodobné' (OTM) put opce, po zohlednění hotovosti použité na pravděpodobná přiřazení." }
            }
        },
        shortOptionsStrategy: {
            title: "Strategie Krátkých Opcí",
            openPositions: {
                title: "Výkonnost Otevřených Pozic",
                putsTitle: "Krátké Put Opce (Otevřené)",
                callsTitle: "Krátké Call Opce (Otevřené)",
                totalPremium: { title: "Celkové Prémium", tooltipPuts: "Celkové prémium získané za všechny otevřené krátké put pozice.", tooltipCalls: "Celkové prémium získané za všechny otevřené krátké call pozice." },
                currentValue: { title: "Aktuální Hodnota (Náklady na Uzavření)", tooltipPuts: "Aktuální tržní hodnota otevřených krátkých put opcí. Představuje náklady na jejich zpětný odkup a uzavření pozic.", tooltipCalls: "Aktuální tržní hodnota otevřených krátkých call opcí. Představuje náklady na jejich zpětný odkup a uzavření pozic." },
                premiumCapture: { title: "Získané Prémium", tooltip: "Procento původního prémia, které bylo dosud 'získáno' jako zisk. Vypočteno jako (Prémium - Aktuální hodnota) / Prémium." },
                returnOnMaxRisk: { title: "Výnos z Max. Rizika", tooltip: "Celkové prémium z otevřených krátkých put opcí jako procento jejich celkových potenciálních nákladů na přiřazení. Ukazuje potenciální výnos z kapitálu, který máte v riziku." }
            },
            realizedIncome: {
                title: "Realizovaný Příjem (Všechny Zdroje)",
                winRate: { title: "Celková Míra Úspěšnosti", description: "{{wins}} výher z {{total}} uzavřených krátkých opcí.", tooltip: "Procento všech uzavřených obchodů s krátkými opcemi (put i call), které skončily realizovaným ziskem." },
                syepIncome: { title: "Příjem z SYEP", description: "Z programu Stock Yield Enhancement Program.", tooltip: "Příjem získaný tím, že umožníte IBKR půjčovat vaše plně splacené akcie." }
            },
            closedPuts: {
                title: "Detailní Analýza Uzavřených Krátkých Put Opcí",
                totalPL: { title: "Celkový Realizovaný Z/Z", description: "Z expirovaných nebo odkoupených put opcí.", tooltip: "Celkový zisk z krátkých put opcí, které vypršely mimo peníze nebo byly uzavřeny zpětným odkupem." },
                contractsClosed: { title: "Uzavřené Kontrakty", description: "Celkový počet uzavřených put kontraktů.", tooltip: "Celkový počet jednotlivých krátkých put kontraktů, které buď vypršely bezcenné, nebo byly odkoupeny k uzavření." },
                avgPL: { title: "Prům. Z/Z / Kontrakt", description: "Průměrný zisk nebo ztráta na uzavřený kontrakt.", tooltip: "Průměrný příjem nebo ztráta generovaná z každého uzavřeného krátkého put kontraktu." },
                assignmentRate: { title: "Míra Přiřazení", description: "Procento krátkých put opcí, které byly přiřazeny.", tooltip: "Z všech uzavřených krátkých put opcí je toto procento, které bylo přiřazeno (tj. museli jste koupit akcie)." },
                avgAroc: { title: "Prům. Roční ROC", description: "Prům. roční výnos ziskových uzavřených put opcí.", tooltip: "Roční návratnost kapitálu. U ziskových short put opcí anualizuje výnos na základě rizikového kapitálu a doby trvání obchodu. Pomáhá porovnávat obchody různé délky." }
            }
        },
        allocations: {
            byTickerTitle: "Alokace portfolia podle tickeru",
            byTickerTooltip: "Ukazuje alokaci podle podkladového tickeru. Poznámka: Akcie a Call opce jsou váženy tržní hodnotou, zatímco short Put opce jsou váženy jejich potenciálními náklady na přiřazení (kolaterál).",
            byAssetClassTitle: "Alokace podle třídy aktiv (podle hodnoty)",
            filters: {
                stocks: "Akcie",
                puts: "Put opce",
                calls: "Call opce"
            },
            assetClasses: {
                stocks: "Akcie",
                options: "Opce",
                cash: "Hotovost"
            }
        },
        openPositions: {
            title: "Otevřené pozice",
            total: "Celkem",
            stocks: {
                title: "Akcie",
                symbol: "Symbol",
                qty: "Počet",
                currentPrice: "Aktuální cena",
                currentPriceTooltip: "Poslední dostupná zavírací cena akcie.",
                costBasis: "Pořizovací cena",
                costBasisTooltip: "Celková částka zaplacená za akcie, včetně provizí, převedená do vaší základní měny.",
                marketValue: "Tržní hodnota",
                marketValueTooltip: "Aktuální celková hodnota pozice (Počet * Aktuální cena).",
                unrealizedPL: "Nerealizovaný Z/Z",
                unrealizedPLTooltip: "Aktuální 'papírový' zisk nebo ztráta pro tuto pozici."
            },
            puts: {
                title: "Put opce",
                symbol: "Symbol",
                qty: "Počet",
                strike: "Strike",
                breakeven: "Bod zvratu",
                breakevenTooltip: "Cena akcie, při které je pozice na nule při expiraci (Strike cena - Čisté prémium na akcii).",
                moneyness: "V penězích",
                moneynessTooltip: "Jak daleko je aktuální cena akcie od strike ceny (v %). Kladná hodnota je Out-of-the-Money (dobré), záporná je In-the-Money (rizikové).",
                dte: "DTE",
                dteTooltip: "Dní do expirace. Počet kalendářních dní do vypršení opce.",
                premium: "Prémium",
                premiumTooltip: "Čistý kredit získaný za prodej této opce, převedený do vaší základní měny.",
                unrealizedPL: "Nerealizovaný Z/Z",
                assignmentCost: "Cena přiřazení",
                assignmentCostTooltip: "Celková hotovost potřebná k nákupu akcií v případě přiřazení (Strike cena * Počet * Multiplikátor).",
                moneynessPriceAvailable: "Založeno na poslední ceně {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Poslední cena akcie pro {{baseSymbol}} není dostupná, protože nemáte otevřenou akciovou pozici pro tento ticker."
            },
            calls: {
                title: "Call opce",
                symbol: "Symbol",
                qty: "Počet",
                strike: "Strike",
                breakeven: "Bod zvratu",
                breakevenTooltip: "Cena akcie, při které je pozice na nule při expiraci (Strike cena + Čisté prémium na akcii).",
                moneyness: "V penězích",
                moneynessTooltip: "Jak daleko je aktuální cena akcie od strike ceny (v %). Kladná hodnota je In-the-Money (rizikové), záporná je Out-of-the-Money (dobré).",
                dte: "DTE",
                dteTooltip: "Dní do expirace. Počet kalendářních dní do vypršení opce.",
                premium: "Prémium",
                premiumTooltip: "Čistý kredit získaný za prodej této opce, převedený do vaší základní měny.",
                unrealizedPL: "Nerealizovaný Z/Z",
                moneynessPriceAvailable: "Založeno na poslední ceně {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Poslední cena akcie pro {{baseSymbol}} není dostupná, protože nemáte otevřenou akciovou pozici pro tento ticker."
            }
        },
        closedPositions: {
            title: "Uzavřené pozice (Realizovaný Z/Z)",
            assetCategory: "Třída aktiv",
            symbol: "Symbol",
            realizedPL: "Realizovaný Z/Z",
            aroc: "AROC",
            arocTooltip: "Roční návratnost kapitálu. U ziskových short put opcí anualizuje výnos na základě rizikového kapitálu a doby trvání obchodu. Pomáhá porovnávat obchody různé délky."
        },
        wheelSummary: {
            title: "Shrnutí výkonnosti strategie Wheel",
            totalPL: { title: "Celkový Z/Z ze strategie Wheel", description: "Celkový realizovaný Z/Z ze všech dokončených cyklů strategie Wheel.", tooltip: "Součet všech zisků a ztrát z každého dokončeného cyklu Wheel (Put prémium + Call prémium + Z/Z z akcií)." },
            totalPremium: { title: "Celkem vybrané prémium", description: "Ze všech dokončených a probíhajících cyklů Wheel.", tooltip: "Součet všech put a call prémií vybraných v každém cyklu Wheel, jak dokončených, tak stále probíhajících." },
            avgDuration: { title: "Prům. doba cyklu", description: "Průměrná doba dokončeného cyklu Wheel.", value: "{{days}} dní", tooltip: "Průměrný počet dní od začátku cyklu (přiřazení put opce) do jeho konce (prodej akcií)." },
            annualizedReturn: { title: "Celkový roční výnos", description: "Kapitálově a časově vážený roční výnos z dokončených cyklů.", tooltip: "Časově a kapitálově vážený roční výnos pro všechny dokončené cykly. Tato metrika poskytuje nejpřesnější obraz o celkové efektivitě strategie." }
        },
        wheel: {
            title: "Analýza cyklů strategie Wheel",
            pending: {
                title: "Probíhající cykly",
                headers: {
                    symbol: "Symbol",
                    startDate: "Datum zahájení",
                    netCostBasis: "Čistá pořiz. cena",
                    callPremium: "Call prémium",
                    currentValue: "Aktuální hodnota",
                    unrealizedStockPL: "Nereal. Z/Z z akcií",
                    currentTotalPL: "Aktuální celkový Z/Z"
                },
                tooltips: {
                    startDate: "Datum, kdy vám byly přiřazeny akcie, což značí začátek cyklu.",
                    netCostBasis: "Efektivní cena vašich akcií po odečtení prémia z původní put opce (Hrubá cena - Put prémium).",
                    currentTotalPL: "Aktuální nerealizovaný Z/Z za celý cyklus, pokud byste ho nyní uzavřeli (Nerealizovaný Z/Z z akcií + Celkové call prémium)."
                }
            },
            completed: {
                title: "Dokončené cykly",
                headers: {
                    symbol: "Symbol",
                    startDate: "Datum zahájení",
                    endDate: "Datum ukončení",
                    duration: "Doba (dny)",
                    callPremium: "Call prémium",
                    stockPL: "Z/Z z akcií",
                    totalPL: "Celkový Z/Z",
                    returnOnCost: "Návratnost nákladů"
                },
                tooltips: {
                    endDate: "Datum ukončení",
                    duration: "Doba (dny)",
                    totalPL: "Konečný zisk nebo ztráta za celý cyklus (Call prémium + Z/Z z akcií).",
                    returnOnCost: "Celkový Z/Z cyklu jako procento čisté pořizovací ceny přiřazených akcií."
                }
            },
            details: {
                costBasisTitle: "Pořizovací cena cyklu",
                costBasisPLTitle: "Pořizovací cena a Z/Z cyklu",
                assignment: "Přiřazení",
                assignmentText: "{{shares}} akcií @ {{price}}",
                grossCostBasis: "Hrubá pořizovací cena",
                putPremiumApplied: "Aplikované put prémium",
                netCostBasis: "Čistá pořizovací cena",
                sale: "Prodej",
                saleText: "{{shares}} akcií @ {{price}}",
                totalSaleProceeds: "Celkové tržby z prodeje",
                stockPLOnNet: "Z/Z z akcií (z čisté ceny)",
                tradeLogTitle: "Kompletní historie obchodu",
                log: {
                    date: "Datum",
                    description: "Popis",
                    amount: "Částka"
                }
            }
        }
    },
    publicDashboard: {
        title: "Veřejný pohled pro sdílení",
        backButton: "Zpět na soukromý pohled",
        publicViewButtonTooltip: "Přepnout na veřejný pohled",
        export: "Exportovat",
        exporting: "Exportuji...",
        exportAsPng: "Exportovat jako PNG",
        exportAsSvg: "Exportovat jako SVG",
        reportTitle: "Snímek mého portfolia",
        period: "Období",
        generatedBy: "Vytvořeno pomocí IBKR Portfolio Analyzer",
        metrics: {
            winRate: {
                title: "Míra úspěšnosti",
                description: "Ze všech uzavřených krátkých opcí"
            },
            assignmentRate: {
                title: "Míra přiřazení",
                description: "Ze všech uzavřených krátkých put opcí"
            },
            annualizedReturn: {
                title: "Roční výnos Wheel",
                description: "Z dokončených cyklů"
            }
        }
    },
    metricCard: {
        showDetails: "Detaily",
        hideDetails: "Skrýt detaily"
    },
    pagination: {
        page: "Strana {{currentPage}} z {{totalPages}}",
        prev: "Předchozí",
        next: "Další"
    },
    assetCategories: {
        stocks: "Akcie",
        options: "Opce",
        forex: "Forex"
    },
    dynamicHeaders: {
        expiryDate: "Datum expirace",
        assignmentCost: "Náklady na přiřazení",
        symbol: "Symbol",
        daysOpen: "Dny v pozici",
        premium: "Prémium",
        aroc: "AROC"
    },
    footer: {
        disclaimerTitle: "Upozornění",
        disclaimerText: "Tato aplikace je poskytována pouze pro informační účely. Aplikace je stále ve vývoji a může obsahovat chyby. Nejsme zodpovědní za žádná finanční rozhodnutí učiněná na základě této aplikace. Vždy si proveďte vlastní průzkum.",
        createdBy: "Vytvořil",
        version: "Verze"
    },
    guide: {
        title: "Celkový pohled: Vizualizace cyklu",
        diagram: {
            footer: "Animace ukazuje dvě hlavní smyčky strategie Wheel. Plná smyčka zahrnuje přiřazení akcií a jejich pozdější prodej. Kratší smyčky nastávají, když opce vyprší bezcenné, což vám umožní jednoduše inkasovat prémium a opakovat krok.",
            nodes: {
                yourCash: "Vaše hotovost",
                startEnd: "Start a cíl",
                sellPut: "1. Prodej Put",
                collectPremium: "Získej prémium",
                ownShares: "Vlastnictví 100 akcií",
                fromAssignment: "Z přiřazení",
                sellCall: "2. Prodej Call",
                sellShares: "Prodej 100 akcií",
                calledAway: "Akcie odvolány"
            },
            legend: {
                title: "Legenda animace",
                cashFlow: "Tok peněz",
                premiumIncome: "Příjem z prémia",
                stockHolding: "Držení akcií",
                assignment: "Přiřazení"
            },
            stockPrice: "Cena akcie",
            pl: "Z/Z",
            strikePrice: "Strike cena",
            breakeven: "Bod zvratu",
            breakevenPutDesc: "(Strike - Prémium)",
            breakevenCallDesc: "(Cena - Prémium)",
            maxProfit: "Max. zisk",
            maxProfitDesc: "(Prémium)",
            maxProfitCapped: "(Omezený)",
            lossArea: "Oblast ztráty",
            yourCostBasis: "Vaše pořiz. cena"
        },
        step1: {
            title: "Prodejte Cash-Secured Put",
            description: "Prvním krokem je prodej put opce na akcii, kterou skutečně chcete vlastnit. Zvolíte si realizační cenu (strike) pod aktuální tržní cenou – to je cena, za kterou jste ochotni akcii koupit. Za prodej této opce okamžitě obdržíte příjem, zvaný prémium.",
            outcomeA: {
                title: "Výsledek A: Úspěch! (Akcie zůstane nad strike cenou)",
                description: "Opce vyprší bezcenná. Ponecháte si 100 % prémia jako čistý zisk. Poté můžete tento krok opakovat a prodejem další put opce generovat další příjem."
            },
            outcomeB: {
                title: "Výsledek B: Přiřazení (Akcie klesne pod strike cenou)",
                description: "Jste přiřazeni a musíte koupit 100 akcií za realizační cenu. Ale protože jste již obdrželi prémium, vaše efektivní pořizovací cena je nižší než strike cena. Nyní vlastníte akcii se slevou!"
            }
        },
        step2: {
            title: "Prodejte Covered Call",
            description: "Tento krok provedete pouze v případě, že vám byly přiřazeny akcie z kroku 1. Nyní, když vlastníte 100 akcií, můžete proti nim prodat call opci a generovat tak další příjem. Zvolíte si realizační cenu (strike) nad vaší pořizovací cenou.",
            outcomeA: {
                title: "Výsledek A: Úspěch! (Akcie zůstane pod strike cenou)",
                description: "Opce vyprší bezcenná. Ponecháte si prémium i svých 100 akcií. Poté můžete tento krok opakovat a prodejem další call opce získat další příjem."
            },
            outcomeB: {
                title: "Výsledek B: Odvolání (Akcie stoupne nad strike cenou)",
                description: "Vašich 100 akcií je prodáno za realizační cenu. Ponecháte si prémium z call opce PLUS zisk z prodeje akcií nad vaší pořizovací cenou. Kolo je dokončeno a vy jste zpět v hotovosti, připraveni začít znovu."
            }
        },
        benefits: {
            title: "Klíčové výhody",
            benefit1: { title: "Generuje příjem", description: "Konzistentně inkasujte prémie z prodeje put a call opcí." },
            benefit2: { title: "Nákup akcií levněji", description: "Získejte akcie, které se vám líbí, za nižší efektivní cenu." },
            benefit3: { title: "Definujete si ceny", description: "Sami si nastavíte cenu, za kterou jste ochotni nakupovat a (potenciálně) prodávat." }
        },
        risks: {
            title: "Důležitá rizika",
            risk1: { title: "Riziko držení", description: "Hlavním rizikem je být přiřazen akcii, jejíž cena následně výrazně klesne. Mohli byste držet ztrátovou akcii po dlouhou dobu." },
            risk2: { title: "Omezené zisky", description: "Když prodáte covered call, omezíte svůj potenciální růst na akcii." },
            risk3: { title: "Vyžaduje trpělivost", description: "Nikdy nepoužívejte strategii Wheel na akcii, kterou nejste ochotni dlouhodobě vlastnit." }
        },
        copilot: {
            title: "Tato aplikace je váš kopilot pro strategii Wheel",
            description: "Ruční sledování obchodů v rámci strategie Wheel může být složité. Tento analyzátor udělá těžkou práci za vás. Automaticky identifikuje vaše dokončené a probíhající cykly, vypočítá váš přesný Z/Z, celkové prémie, dobu trvání a roční výnosy pro každý z nich. Přestaňte hádat a začněte přesně vidět, jak si vaše strategie vede."
        }
    }
};