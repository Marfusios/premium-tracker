
export const hr = {
    app: {
        title: "IBKR Analizator Portfelja",
        loading: "Analiziram vaš izvod...",
        tryAgain: "Pokušaj ponovno",
        errors: {
            title: "Došlo je do greške",
            fileRead: "Čitanje datoteke nije uspjelo.",
            criticalData: "Nije moguće analizirati ključne podatke iz datoteke. Molimo provjerite je li to važeći IBKR izvod o aktivnostima.",
            unknownParse: "Došlo je do nepoznate greške pri parsiranju."
        }
    },
    fileUpload: {
        title: "Analizator Portfelja",
        subtitle: "Učitajte svoj IBKR izvod o aktivnostima da biste započeli.",
        description: "Pretvorite svoj Interactive Brokers izvod o aktivnostima u moćan alat za donošenje odluka. Dobijte kristalno jasan pregled svoje uspješnosti, specijaliziran za prodaju opcija i 'The Wheel' strategiju. Naša nadzorna ploča pomaže vam vizualizirati dobitke, upravljati rizikom portfelja i s povjerenjem trgovati na marginu.",
        dropzone: {
            dragAndDrop: "Povucite i ispustite",
            or: "ili",
            clickToUpload: "kliknite za prijenos",
            yourCsvFile: "vaše CSV datoteke",
            acceptedFormats: "(prihvaćeni formati .csv ili .txt)"
        },
        privacyNote: "Napomena: Sva obrada odvija se u vašem pregledniku. Vaši se podaci nikada ne prenose na bilo koji poslužitelj.",
        instructions: {
            title: "Kako doći do izvoda o aktivnostima",
            step1_part1: 'Prijavite se na Interactive Brokers i idite na karticu ',
            step1_strong: '"Performanse i izvješća"',
            step1_part2: '.',
            step2_part1: 'Pod "Izvodi", pronađite ',
            step2_strong1: '"Aktivnost"',
            step2_part2: ' i kliknite gumb ',
            step2_strong2: '"Pokreni"',
            step2_part3: ' (ikona strelice).',
            caption1: "Koraci 1 i 2: Idite na Izvod o aktivnostima.",
            step3_part1: 'U skočnom prozoru odaberite željeno ',
            step3_strong: 'Razdoblje',
            step3_part2: ' (npr. "Mjesečno", "Od početka godine").',
            step4_part1: 'Pronađite opciju formata ',
            step4_strong1: 'CSV',
            step4_part2: ' i kliknite odgovarajući gumb ',
            step4_strong2: '"Preuzmi"',
            step4_part3: ' za spremanje datoteke.',
            caption2: "Koraci 3 i 4: Odaberite razdoblje i preuzmite CSV.",
            notes: {
                title: "Važne napomene",
                note1: "Provjerite preuzimate li izvod o Aktivnosti, jer druge vrste izvoda možda nisu kompatibilne.",
                note2: "Preporučeni format je CSV. Iako aplikacija može rukovati .txt datotekama s istom strukturom, CSV je poželjniji.",
                note3: `Duža razdoblja pružit će sveobuhvatnije podatke za analizu. "Od početka godine" je dobra polazna točka.`,
                note4: "Nemojte otvarati i ponovno spremati CSV datoteku u softveru za proračunske tablice poput Excela, jer to može promijeniti formatiranje i uzrokovati pogreške u parsiranju. Preuzmite je i izravno je prenesite ovdje."
            }
        },
        guide: {
            title: "Vodič za početnike o 'The Wheel' strategiji",
            description: "'The Wheel' je strategija trgovanja opcijama osmišljena za generiranje dosljednog prihoda. Uključuje sustavnu prodaju gotovinom osiguranih put opcija i pokrivenih call opcija, s ciljem stjecanja dionice koja vam se sviđa po sniženoj cijeni, a zatim je prodati za profit."
        }
    },
    dashboard: {
        header: {
            title: "Nadzorna ploča portfelja",
            analyzeNewFile: "Analiziraj novu datoteku"
        },
        metrics: {
            totalNAV: { title: "Ukupna neto vrijednost imovine", description: "Trenutna ukupna vrijednost portfelja." },
            twr: { title: "Vremenski ponderirani povrat", description: "TWR za razdoblje izvoda.", tooltip: "Mjeri uspješnost portfelja tijekom vremena, uklanjajući iskrivljujuće učinke novčanih tokova. Odražava vašu osobnu investicijsku uspješnost." },
            putLeverage: { title: "Poluga na kratkim Put opcijama", description: "Vrijednost dodjele vs. NAV / vs. Gotovina", tooltip: "Uspoređuje ukupni trošak dodjele kratkih put opcija s vašom neto vrijednošću imovine (NAV) i gotovinskim saldom. NAV: Ukupna vrijednost sve imovine. Gotovina: Samo vaš gotovinski saldo. Visoke vrijednosti ukazuju na veći rizik." },
            baseCurrency: { title: "Osnovna valuta", description: "Primarna valuta računa." }
        },
        plSummary: {
            title: "Sažetak dobiti i gubitka",
            assetClass: "Klasa imovine",
            realizedPL: "Realizirani D/G",
            unrealizedPL: "Nerealizirani D/G",
            totalPL: "Ukupni D/G",
            realizedTooltip: "Dobit ili gubitak od pozicija koje su zatvorene. Ovo je 'zaključani' D/G.",
            unrealizedTooltip: "Trenutna 'papirnata' dobit ili gubitak na pozicijama koje su još otvorene. Ova vrijednost varira s tržištem.",
            stocks: "Dionice",
            options: "Opcije",
            forex: "Forex",
            total: "Ukupno"
        },
        navSankey: {
            title: "Tijek NAV-a",
            nodes: {
                startingNAV: "Početni NAV",
                deposits: "Uplate",
                m2mGains: "M2M Dobici",
                interestFXGains: "Kamate i FX dobici",
                grossValue: "Bruto vrijednost",
                endingNAV: "Završni NAV",
                withdrawals: "Isplate",
                m2mLosses: "M2M Gubici",
                commissions: "Provizije",
                feesTax: "Naknade i porezi",
                interestPaid: "Plaćene kamate"
            }
        },
        tickerPL: {
            title: "Doprinos D/G po Tickeru",
            tooltip: { totalPL: "Ukupni D/G" }
        },
        monthlyPerformance: {
            title: {
                income: "Mjesečni pratitelj prihoda",
                pl: "Mjesečni pratitelj D/G"
            },
            buttons: {
                income: "Prihod",
                pl: "D/G"
            },
            legend: {
                optionsPremium: "Premija od opcija",
                optionsPL: "D/G od opcija",
                syepIncome: "Prihod od SYEP-a",
                interest: "Kamate"
            },
            tooltip: {
                total: "Ukupno"
            }
        },
        fees: {
            title: "Mjesečni pregled troškova",
            legend: {
                commissions: "Provizije",
                otherFees: "Ostale naknade",
                salesTax: "Porez na promet",
                paidInterest: "Plaćene kamate"
            },
            tooltip: {
                total: "Ukupni troškovi"
            }
        },
        putRisk: {
            title: "Analiza rizika kratkih Put opcija",
            cashBalance: { title: "Trenutno stanje gotovine", description: "Vaša dostupna gotovina za dodjele." },
            likelyRisk: {
                title: "Vjerojatni rizik dodjele",
                assignmentValue: { title: "Vrijednost dodjele (ITM)", description: "Za put opcije koje su u novcu (In-The-Money) ili imaju negativan D/G.", tooltip: "Ukupna gotovina potrebna za kupnju dionica za sve kratke put opcije koje su trenutno u novcu (ITM)." },
                cashShortfall: { title: "Manjak gotovine", description: "Sredstva potrebna za ove vjerojatne dodjele.", tooltip: "Iznos dodatne gotovine potreban ako bi sve 'vjerojatne' (ITM) put opcije bile dodijeljene danas. Izračunato kao (Vrijednost dodjele - Stanje gotovine)." }
            },
            unlikelyRisk: {
                title: "Malo vjerojatan rizik dodjele",
                assignmentValue: { title: "Vrijednost dodjele (OTM)", description: "Za put opcije koje su izvan novca (Out-of-The-Money) ili imaju pozitivan D/G.", tooltip: "Ukupna gotovina potrebna za kupnju dionica za sve kratke put opcije koje su trenutno izvan novca (OTM)." },
                additionalShortfall: { title: "Dodatni manjak", description: "Više sredstava potrebno ako se i ove put opcije dodijele.", tooltip: "Iznos dodatne gotovine potreban ako bi i sve 'malo vjerojatne' (OTM) put opcije bile dodijeljene, nakon uzimanja u obzir gotovine korištene za vjerojatne dodjele." }
            }
        },
        shortOptionsStrategy: {
            title: "Strategija Kratkih Opcija",
            openPositions: {
                title: "Učinak Otvorenih Pozicija",
                putsTitle: "Kratke Put Opcije (Otvorene)",
                callsTitle: "Kratke Call Opcije (Otvorene)",
                totalPremium: { title: "Ukupna Premija", tooltipPuts: "Ukupna premija prikupljena za sve otvorene kratke put pozicije.", tooltipCalls: "Ukupna premija prikupljena za sve otvorene kratke call pozicije." },
                currentValue: { title: "Trenutna Vrijednost (Trošak Zatvaranja)", tooltipPuts: "Trenutna tržišna vrijednost otvorenih kratkih put opcija. Predstavlja trošak njihovog otkupa i zatvaranja pozicija.", tooltipCalls: "Trenutna tržišna vrijednost otvorenih kratkih call opcija. Predstavlja trošak njihovog otkupa i zatvaranja pozicija." },
                premiumCapture: { title: "Zadržana Premija", tooltip: "Postotak početne premije koji je do sada 'zadržan' kao dobit. Izračunato kao (Premija - Trenutna Vrijednost) / Premija." },
                returnOnMaxRisk: { title: "Povrat na Maksimalni Rizik", tooltip: "Ukupna premija od otvorenih kratkih put opcija kao postotak njihovog ukupnog potencijalnog troška dodjele. Prikazuje potencijalni povrat na kapital koji ste riskirali." }
            },
            realizedIncome: {
                title: "Realizirani Prihod (Svi Izvori)",
                winRate: { title: "Ukupna Stopa Uspješnosti", description: "{{wins}} dobitaka od {{total}} zatvorenih kratkih opcija.", tooltip: "Postotak svih zatvorenih trgovina kratkim opcijama (put i call) koje su rezultirale ostvarenom dobiti." },
                syepIncome: { title: "Prihod od SYEP-a", description: "Iz programa za poboljšanje prinosa dionica.", tooltip: "Prihod ostvaren dopuštanjem IBKR-u da posuđuje vaše potpuno plaćene dionice." }
            },
            closedPuts: {
                title: "Detaljna Analiza Zatvorenih Kratkih Put Opcija",
                totalPL: { title: "Ukupni Realizirani D/G", description: "Od isteklih ili otkupljenih put opcija.", tooltip: "Ukupna dobit od kratkih put opcija koje su istekle izvan novca ili su zatvorene otkupom." },
                contractsClosed: { title: "Zatvoreni Ugovori", description: "Ukupan broj zatvorenih put ugovora.", tooltip: "Ukupan broj pojedinačnih kratkih put ugovora koji su ili istekli bezvrijedni ili su otkupljeni radi zatvaranja." },
                avgPL: { title: "Prosj. D/G / Ugovor", description: "Prosječna dobit ili gubitak po zatvorenom ugovoru.", tooltip: "Prosječni prihod ili gubitak ostvaren od svakog zatvorenog kratkog put ugovora." },
                assignmentRate: { title: "Stopa Dodjele", description: "Postotak kratkih put opcija koje su dodijeljene.", tooltip: "Od svih zatvorenih kratkih put opcija, ovo je postotak koji je dodijeljen (tj. morali ste kupiti dionicu)." },
                avgAroc: { title: "Prosj. Godišnji ROC", description: "Prosj. godišnji povrat za profitabilne zatvorene put opcije.", tooltip: "Godišnji povrat na kapital. Za profitabilne kratke put opcije, anualizira povrat na temelju rizičnog kapitala i trajanja trgovine. Pomaže u usporedbi trgovina različitog trajanja." }
            }
        },
        allocations: {
            byTickerTitle: "Alokacija portfelja po Tickeru",
            byTickerTooltip: "Prikazuje alokaciju po osnovnom tickeru. Napomena: Dionice i Call opcije ponderirane su tržišnom vrijednošću, dok su kratke Put opcije ponderirane njihovim potencijalnim troškom dodjele (kolateral).",
            byAssetClassTitle: "Alokacija po klasi imovine (prema vrijednosti)",
            filters: {
                stocks: "Dionice",
                puts: "Put opcije",
                calls: "Call opcije"
            },
            assetClasses: {
                stocks: "Dionice",
                options: "Opcije"
            }
        },
        openPositions: {
            title: "Otvorene pozicije",
            total: "Ukupno",
            stocks: {
                title: "Dionice",
                symbol: "Simbol",
                qty: "Kol.",
                currentPrice: "Trenutna cijena",
                currentPriceTooltip: "Posljednja dostupna zaključna cijena za dionicu.",
                costBasis: "Osnovica troška",
                costBasisTooltip: "Ukupan iznos plaćen za dionice, uključujući provizije, pretvoren u vašu osnovnu valutu.",
                marketValue: "Tržišna vrijednost",
                marketValueTooltip: "Trenutna ukupna vrijednost pozicije (Količina * Trenutna cijena).",
                unrealizedPL: "Nerealizirani D/G",
                unrealizedPLTooltip: "Trenutna 'papirnata' dobit ili gubitak za ovu poziciju."
            },
            puts: {
                title: "Put opcije",
                symbol: "Simbol",
                qty: "Kol.",
                strike: "Strike",
                breakeven: "Točka pokrića",
                breakevenTooltip: "Cijena dionice pri kojoj pozicija na dan isteka nema ni dobiti ni gubitka (Strike cijena - Neto premija po dionici).",
                moneyness: "Moneyness",
                moneynessTooltip: "Koliko je trenutna cijena dionice udaljena od strike cijene (u %). Pozitivno je izvan novca (dobro), negativno je u novcu (rizično).",
                dte: "DDI",
                dteTooltip: "Dana do isteka. Broj kalendarskih dana do isteka opcije.",
                premium: "Premija",
                premiumTooltip: "Neto kredit primljen za prodaju ove opcije, pretvoren u vašu osnovnu valutu.",
                unrealizedPL: "Nerealizirani D/G",
                assignmentCost: "Trošak dodjele",
                assignmentCostTooltip: "Ukupna gotovina potrebna za kupnju dionica ako se dodijeli (Strike cijena * Količina * Multiplikator).",
                moneynessPriceAvailable: "Na temelju posljednje cijene zatvaranja {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Posljednja cijena dionice za {{baseSymbol}} nije dostupna jer ne postoji otvorena pozicija dionica za ovaj ticker."
            },
            calls: {
                title: "Call opcije",
                symbol: "Simbol",
                qty: "Kol.",
                strike: "Strike",
                breakeven: "Točka pokrića",
                breakevenTooltip: "Cijena dionice pri kojoj pozicija na dan isteka nema ni dobiti ni gubitka (Strike cijena + Neto premija po dionici).",
                moneyness: "Moneyness",
                moneynessTooltip: "Koliko je trenutna cijena dionice udaljena od strike cijene (u %). Pozitivno je u novcu (rizično), negativno je izvan novca (dobro).",
                dte: "DDI",
                dteTooltip: "Dana do isteka. Broj kalendarskih dana do isteka opcije.",
                premium: "Premija",
                premiumTooltip: "Neto kredit primljen za prodaju ove opcije, pretvoren u vašu osnovnu valutu.",
                unrealizedPL: "Nerealizirani D/G",
                moneynessPriceAvailable: "Na temelju posljednje cijene zatvaranja {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Posljednja cijena dionice za {{baseSymbol}} nije dostupna jer ne postoji otvorena pozicija dionica za ovaj ticker."
            }
        },
        closedPositions: {
            title: "Zatvorene pozicije (Realizirani D/G)",
            assetCategory: "Klasa imovine",
            symbol: "Simbol",
            realizedPL: "Realizirani D/G",
            aroc: "AROC",
            arocTooltip: "Godišnji povrat na kapital. Za profitabilne kratke put opcije, anualizira povrat na temelju rizičnog kapitala i trajanja trgovine. Pomaže u usporedbi trgovina različitog trajanja."
        },
        wheelSummary: {
            title: "Sažetak uspješnosti strategije Wheel",
            totalPL: { title: "Ukupni D/G od Wheela", description: "Ukupni realizirani D/G iz svih završenih Wheel ciklusa.", tooltip: "Zbroj svih dobiti i gubitaka iz svakog završenog Wheel ciklusa (Premija od Put + Premija od Call + D/G od dionica)." },
            totalPremium: { title: "Ukupno prikupljena premija", description: "Iz svih završenih i tekućih Wheel ciklusa.", tooltip: "Zbroj svih prikupljenih premija od put i call opcija u svim Wheel ciklusima, kako završenim tako i onima u tijeku." },
            avgDuration: { title: "Prosječno trajanje ciklusa", description: "Prosječno trajanje završenog Wheel ciklusa.", value: "{{days}} dana", tooltip: "Prosječan broj dana od početka ciklusa (dodjela put opcije) do njegovog kraja (prodaja dionica)." },
            annualizedReturn: { title: "Ukupni godišnji povrat", description: "Kapitalom i vremenom ponderirani godišnji povrat na završenim ciklusima.", tooltip: "Vremenom i kapitalom ponderirani godišnji povrat za sve završene cikluse. Ova metrika pruža najtočniju sliku ukupne učinkovitosti strategije." }
        },
        wheel: {
            title: "Analiza Wheel ciklusa",
            pending: {
                title: "Tekući ciklusi",
                headers: {
                    symbol: "Simbol",
                    startDate: "Datum početka",
                    netCostBasis: "Neto osnovica troška",
                    callPremium: "Call premija",
                    currentValue: "Trenutna vrijednost",
                    unrealizedStockPL: "Nerealizirani D/G dionica",
                    currentTotalPL: "Trenutni ukupni D/G"
                },
                tooltips: {
                    startDate: "Datum kada su vam dionice dodijeljene, označavajući početak ciklusa.",
                    netCostBasis: "Efektivni trošak vaših dionica nakon oduzimanja premije od početne put opcije (Bruto trošak - Put premija).",
                    currentTotalPL: "Trenutni nerealizirani D/G za cijeli ciklus ako biste ga sada zatvorili (Nerealizirani D/G dionica + Ukupna Call premija)."
                }
            },
            completed: {
                title: "Završeni ciklusi",
                headers: {
                    symbol: "Simbol",
                    startDate: "Datum početka",
                    endDate: "Datum završetka",
                    duration: "Trajanje (dani)",
                    callPremium: "Call premija",
                    stockPL: "D/G dionica",
                    totalPL: "Ukupni D/G",
                    returnOnCost: "Povrat na trošak"
                },
                tooltips: {
                    endDate: "Datum završetka",
                    duration: "Trajanje (dani)",
                    totalPL: "Konačna dobit ili gubitak za cijeli ciklus (Call premija + D/G dionica).",
                    returnOnCost: "Ukupni D/G ciklusa kao postotak neto osnovice troška dodijeljene dionice."
                }
            },
            details: {
                costBasisTitle: "Osnovica troška ciklusa",
                costBasisPLTitle: "Osnovica troška i D/G ciklusa",
                assignment: "Dodjela",
                assignmentText: "{{shares}} dionica @ {{price}}",
                grossCostBasis: "Bruto osnovica troška",
                putPremiumApplied: "Primijenjena put premija",
                netCostBasis: "Neto osnovica troška",
                sale: "Prodaja",
                saleText: "{{shares}} dionica @ {{price}}",
                totalSaleProceeds: "Ukupni prihod od prodaje",
                stockPLOnNet: "D/G dionica (na neto trošak)",
                tradeLogTitle: "Cjeloviti dnevnik trgovine",
                log: {
                    date: "Datum",
                    description: "Opis",
                    amount: "Iznos"
                }
            }
        }
    },
    publicDashboard: {
        title: "Javni prikaz za dijeljenje",
        backButton: "Natrag na privatni prikaz",
        publicViewButtonTooltip: "Prebaci na javni prikaz",
        export: "Izvezi",
        exporting: "Izvozim...",
        exportAsPng: "Izvezi kao PNG",
        exportAsSvg: "Izvezi kao SVG",
        reportTitle: "Snimka mog portfelja",
        period: "Razdoblje",
        generatedBy: "Generirano pomoću IBKR Portfolio Analyzera",
        metrics: {
            winRate: {
                title: "Stopa uspješnosti",
                description: "Svih zatvorenih kratkih opcija"
            },
            assignmentRate: {
                title: "Stopa dodjele",
                description: "Svih zatvorenih kratkih put opcija"
            },
            annualizedReturn: {
                title: "Godišnji povrat od Wheela",
                description: "Na završenim ciklusima"
            }
        }
    },
    metricCard: {
        showDetails: "Detalji",
        hideDetails: "Sakrij detalje"
    },
    pagination: {
        page: "Stranica {{currentPage}} od {{totalPages}}",
        prev: "Preth",
        next: "Sljed"
    },
    assetCategories: {
        stocks: "Dionice",
        options: "Opcije",
        forex: "Forex"
    },
    dynamicHeaders: {
        expiryDate: "Datum isteka",
        assignmentCost: "Trošak dodjele",
        symbol: "Simbol",
        daysOpen: "Otvoreni dani",
        premium: "Premija",
        aroc: "AROC"
    },
    footer: {
        disclaimerTitle: "Odricanje od odgovornosti",
        disclaimerText: "Ova se aplikacija pruža samo u informativne svrhe. Aplikacija je još u razvoju i može sadržavati greške. Nismo odgovorni za bilo kakve financijske odluke donesene na temelju ove aplikacije. Uvijek napravite vlastito istraživanje.",
        createdBy: "Kreirao",
        version: "Verzija"
    },
    guide: {
        title: "Šira slika: Vizualizacija ciklusa",
        diagram: {
            footer: "Animacija prikazuje dvije glavne petlje Wheela. Puna petlja uključuje dobivanje dodijeljenih dionica i njihovu kasniju prodaju. Kraće petlje se događaju kada opcije isteknu bezvrijedne, omogućujući vam da jednostavno prikupite premiju i ponovite korak.",
            nodes: {
                yourCash: "Vaša gotovina",
                startEnd: "Početak i kraj",
                sellPut: "1. Prodaj Put",
                collectPremium: "Prikupi premiju",
                ownShares: "Posjeduj 100 dionica",
                fromAssignment: "Iz dodjele",
                sellCall: "2. Prodaj Call",
                sellShares: "Prodaj 100 dionica",
                calledAway: "Dionice prodane"
            },
            legend: {
                title: "Legenda animacije",
                cashFlow: "Tijek novca",
                premiumIncome: "Prihod od premije",
                stockHolding: "Držanje dionica",
                assignment: "Dodjela"
            },
            stockPrice: "Cijena dionice",
            pl: "D/G",
            strikePrice: "Strike cijena",
            breakeven: "Točka pokrića",
            breakevenPutDesc: "(Strike - Premija)",
            breakevenCallDesc: "(Trošak - Premija)",
            maxProfit: "Maks. dobit",
            maxProfitDesc: "(Premija)",
            maxProfitCapped: "(Ograničeno)",
            lossArea: "Područje gubitka",
            yourCostBasis: "Vaša osnovica troška"
        },
        step1: {
            title: "Prodaj gotovinom osiguranu Put opciju",
            description: "Prvi korak je prodati put opciju na dionicu koju stvarno želite posjedovati. Odaberete strike cijenu ispod trenutne tržišne cijene – to je cijena koju ste voljni platiti. U zamjenu za prodaju ove opcije, dobivate trenutni prihod, koji se zove premija.",
            outcomeA: {
                title: "Ishod A: Uspjeh! (Dionica ostaje iznad strike cijene)",
                description: "Opcija istječe bezvrijedna. Zadržavate 100% premije kao čistu dobit. Zatim možete ponoviti ovaj korak, prodajući drugu put opciju za generiranje više prihoda."
            },
            outcomeB: {
                title: "Ishod B: Dodjela (Dionica pada ispod strike cijene)",
                description: "Dodijeljeni ste i morate kupiti 100 dionica po strike cijeni. Ali budući da ste već primili premiju, vaša efektivna osnovica troška je niža od strike cijene. Sada posjedujete dionicu s popustom!"
            }
        },
        step2: {
            title: "Prodaj pokrivenu Call opciju",
            description: "Ovaj korak radite samo ako su vam dodijeljene dionice iz koraka 1. Sada kada posjedujete 100 dionica, možete prodati call opciju protiv njih kako biste generirali više prihoda. Odaberete strike cijenu iznad vaše osnovice troška.",
            outcomeA: {
                title: "Ishod A: Uspjeh! (Dionica ostaje ispod strike cijene)",
                description: "Opcija istječe bezvrijedna. Zadržavate premiju i svojih 100 dionica. Zatim možete ponoviti ovaj korak, prodajući drugu call opciju za više prihoda."
            },
            outcomeB: {
                title: "Ishod B: Prodaja (Dionica raste iznad strike cijene)",
                description: "Vaših 100 dionica prodaje se po strike cijeni. Zadržavate premiju od call opcije PLUS dobit od prodaje dionica iznad vaše osnovice troška. Krug je završen, i opet ste u gotovini, spremni za početak."
            }
        },
        benefits: {
            title: "Ključne prednosti",
            benefit1: { title: "Generira prihod", description: "Dosljedno prikupljajte premije od prodaje put i call opcija." },
            benefit2: { title: "Kupujte dionice jeftinije", description: "Nabavite dionice koje vam se sviđaju po nižoj efektivnoj cijeni." },
            benefit3: { title: "Vi definirate svoje cijene", description: "Vi postavljate cijenu po kojoj ste voljni kupiti i (potencijalno) prodati." }
        },
        risks: {
            title: "Važni rizici",
            risk1: { title: "Rizik držanja", description: "Glavni rizik je da vam se dodijeli dionica čija cijena zatim značajno padne. Mogli biste dugo držati dionicu s gubitkom." },
            risk2: { title: "Ograničeni dobici", description: "Kada prodate pokrivenu call opciju, ograničavate svoj potencijalni rast na dionici." },
            risk3: { title: "Potrebna je strpljivost", description: "Nikada ne koristite Wheel strategiju na dionici koju niste sretni posjedovati dugoročno." }
        },
        copilot: {
            title: "Ova aplikacija je vaš kopilot za Wheel strategiju",
            description: "Ručno praćenje Wheel trgovina može biti složeno. Ovaj analizator obavlja teži dio posla za vas. Automatski identificira vaše završene i tekuće Wheel cikluse, izračunavajući vaš točan D/G, ukupne premije, trajanje i godišnje povrate za svaki. Prestanite nagađati i počnite točno vidjeti kako vaša strategija funkcionira."
        }
    }
};
