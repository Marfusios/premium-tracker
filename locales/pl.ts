
export const pl = {
    app: {
        title: "Analizator Portfela IBKR",
        loading: "Analizowanie wyciągu...",
        tryAgain: "Spróbuj ponownie",
        errors: {
            title: "Wystąpił błąd",
            fileRead: "Nie udało się odczytać pliku.",
            criticalData: "Nie można przeanalizować krytycznych danych z pliku. Upewnij się, że jest to prawidłowy wyciąg z aktywności IBKR.",
            unknownParse: "Wystąpił nieznany błąd parsowania."
        }
    },
    fileUpload: {
        title: "Analizator Portfela",
        subtitle: "Prześlij wyciąg z aktywności IBKR, aby rozpocząć.",
        description: "Zmień swój wyciąg z aktywności Interactive Brokers w potężne narzędzie do podejmowania decyzji. Uzyskaj krystalicznie czysty obraz swoich wyników, specjalizując się w sprzedaży opcji i strategii 'The Wheel'. Nasz pulpit nawigacyjny pomaga wizualizować zyski, zarządzać ryzykiem portfela i pewnie handlować na marży.",
        dropzone: {
            dragAndDrop: "Przeciągnij i upuść",
            or: "lub",
            clickToUpload: "kliknij, aby przesłać",
            yourCsvFile: "swój plik CSV",
            acceptedFormats: "(akceptowane formaty .csv lub .txt)"
        },
        privacyNote: "Uwaga: Całe przetwarzanie odbywa się w Twojej przeglądarce. Twoje dane nigdy nie są przesyłane na żaden serwer.",
        instructions: {
            title: "Jak uzyskać wyciąg z aktywności",
            step1_part1: 'Zaloguj się do Interactive Brokers i przejdź do zakładki ',
            step1_strong: '"Wyniki i Raporty"',
            step1_part2: '.',
            step2_part1: 'W sekcji "Wyciągi" znajdź ',
            step2_strong1: '"Aktywność"',
            step2_part2: ' i kliknij przycisk ',
            step2_strong2: '"Uruchom"',
            step2_part3: ' (ikona strzałki).',
            caption1: "Kroki 1 i 2: Przejdź do Wyciągów z Aktywności.",
            step3_part1: 'W oknie podręcznym wybierz żądany ',
            step3_strong: 'Okres',
            step3_part2: ' (np. "Miesięczny", "Od początku roku").',
            step4_part1: 'Znajdź opcję formatu ',
            step4_strong1: 'CSV',
            step4_part2: ' i kliknij odpowiedni przycisk ',
            step4_strong2: '"Pobierz"',
            step4_part3: ', aby zapisać plik.',
            caption2: "Kroki 3 i 4: Wybierz okres i pobierz CSV.",
            notes: {
                title: "Ważne uwagi",
                note1: "Upewnij się, że pobierasz wyciąg z Aktywności, ponieważ inne typy wyciągów mogą być niekompatybilne.",
                note2: "Zalecany format to CSV. Chociaż aplikacja może obsługiwać pliki .txt o tej samej strukturze, preferowany jest format CSV.",
                note3: `Dłuższe okresy dostarczą bardziej kompleksowych danych do analizy. "Od początku roku" to dobry punkt wyjścia.`,
                note4: "Nie otwieraj i nie zapisuj ponownie pliku CSV w oprogramowaniu do arkuszy kalkulacyjnych, takim jak Excel, ponieważ może to zmienić formatowanie i spowodować błędy parsowania. Pobierz go i prześlij bezpośrednio tutaj."
            }
        },
        guide: {
            title: "Przewodnik dla początkujących po strategii 'The Wheel'",
            description: "'The Wheel' to strategia handlu opcjami zaprojektowana w celu generowania stałego dochodu. Polega na systematycznej sprzedaży opcji put zabezpieczonych gotówką i opcji call zabezpieczonych akcjami, w celu nabycia akcji, które lubisz, po obniżonej cenie, a następnie sprzedaży ich z zyskiem."
        }
    },
    dashboard: {
        header: {
            title: "Pulpit Portfela",
            analyzeNewFile: "Analizuj nowy plik"
        },
        metrics: {
            totalNAV: { title: "Całkowita Wartość Aktywów Netto", description: "Bieżąca całkowita wartość portfela." },
            twr: { title: "Stopa Zwrotu Ważona Czasem", description: "TWR dla okresu wyciągu.", tooltip: "Mierzy wyniki portfela w czasie, eliminując zniekształcający wpływ przepływów pieniężnych. Odzwierciedla Twoje osobiste wyniki inwestycyjne." },
            putLeverage: { title: "Dźwignia na Krótkich Opcjach Put", description: "Wartość Wystawienia vs. NAV / vs. Gotówka", tooltip: "Porównuje całkowity koszt wystawienia krótkich opcji put z Twoją wartością aktywów netto (NAV) i saldem gotówkowym. NAV: Całkowita wartość wszystkich aktywów. Gotówka: Tylko Twoje saldo gotówkowe. Wysokie wartości wskazują na wyższe ryzyko." },
            baseCurrency: { title: "Waluta Bazowa", description: "Główna waluta konta." }
        },
        plSummary: {
            title: "Podsumowanie Zysków i Strat",
            assetClass: "Klasa Aktywów",
            realizedPL: "Zrealizowany Z/S",
            unrealizedPL: "Niezrealizowany Z/S",
            totalPL: "Całkowity Z/S",
            realizedTooltip: "Zysk lub strata z pozycji, które zostały zamknięte. Jest to 'zaksięgowany' Z/S.",
            unrealizedTooltip: "Bieżący 'papierowy' zysk lub strata na pozycjach, które są wciąż otwarte. Ta wartość zmienia się wraz z rynkiem.",
            stocks: "Akcje",
            options: "Opcje",
            forex: "Forex",
            total: "Suma"
        },
        navSankey: {
            title: "Przepływ NAV",
            nodes: {
                startingNAV: "Początkowe NAV",
                deposits: "Wpłaty",
                m2mGains: "Zyski M2M",
                interestFXGains: "Odsetki i Zyski FX",
                grossValue: "Wartość Brutto",
                endingNAV: "Końcowe NAV",
                withdrawals: "Wypłaty",
                m2mLosses: "Straty M2M",
                commissions: "Prowizje",
                feesTax: "Opłaty i Podatki",
                interestPaid: "Zapłacone Odsetki"
            }
        },
        tickerPL: {
            title: "Wkład w Z/S według Tickera",
            tooltip: { totalPL: "Całkowity Z/S" }
        },
        monthlyPerformance: {
            title: {
                income: "Miesięczny Monitor Dochodów",
                pl: "Miesięczny Monitor Z/S"
            },
            buttons: {
                income: "Dochód",
                pl: "Z/S"
            },
            legend: {
                optionsPremium: "Premia z Opcji",
                optionsPL: "Z/S z Opcji",
                syepIncome: "Dochód z SYEP",
                interest: "Odsetki"
            },
            tooltip: {
                total: "Suma"
            }
        },
        fees: {
            title: "Miesięczny Podział Kosztów",
            legend: {
                commissions: "Prowizje",
                otherFees: "Inne Opłaty",
                salesTax: "Podatek od Sprzedaży",
                paidInterest: "Zapłacone Odsetki"
            },
            tooltip: {
                total: "Koszty Całkowite"
            }
        },
        putRisk: {
            title: "Analiza Ryzyka Krótkich Opcji Put",
            cashBalance: { title: "Bieżące Saldo Gotówki", description: "Twoja dostępna gotówka na wykonanie opcji." },
            likelyRisk: {
                title: "Ryzyko Prawdopodobnego Wykonania",
                assignmentValue: { title: "Wartość Wykonania (ITM)", description: "Dla opcji put, które są w cenie (In-The-Money) lub mają ujemny Z/S.", tooltip: "Całkowita gotówka wymagana do zakupu akcji dla wszystkich krótkich opcji put, które są obecnie w cenie (ITM)." },
                cashShortfall: { title: "Niedobór Gotówki", description: "Środki potrzebne na te prawdopodobne wykonania.", tooltip: "Kwota dodatkowej gotówki wymagana, jeśli wszystkie 'prawdopodobne' (ITM) opcje put zostałyby wykonane dzisiaj. Obliczana jako (Wartość Wykonania - Saldo Gotówki)." }
            },
            unlikelyRisk: {
                title: "Ryzyko Mało Prawdopodobnego Wykonania",
                assignmentValue: { title: "Wartość Wykonania (OTM)", description: "Dla opcji put, które są poza ceną (Out-of-The-Money) lub mają dodatni Z/S.", tooltip: "Całkowita gotówka wymagana do zakupu akcji dla wszystkich krótkich opcji put, które są obecnie poza ceną (OTM)." },
                additionalShortfall: { title: "Dodatkowy Niedobór", description: "Więcej środków potrzebnych, jeśli te opcje put również zostaną wykonane.", tooltip: "Kwota dodatkowej gotówki wymagana, jeśli wszystkie 'mało prawdopodobne' (OTM) opcje put również zostałyby wykonane, po uwzględnieniu gotówki zużytej na prawdopodobne wykonania." }
            }
        },
        shortOptionsStrategy: {
            title: "Strategia Krótkich Opcji",
            openPositions: {
                title: "Wyniki Otwartych Pozycji",
                putsTitle: "Krótkie Opcje Put (Otwarte)",
                callsTitle: "Krótkie Opcje Call (Otwarte)",
                totalPremium: { title: "Całkowita Premia", tooltipPuts: "Całkowita premia zebrana za wszystkie otwarte krótkie pozycje opcji put.", tooltipCalls: "Całkowita premia zebrana za wszystkie otwarte krótkie pozycje opcji call." },
                currentValue: { title: "Wartość Bieżąca (Koszt Zamknięcia)", tooltipPuts: "Bieżąca wartość rynkowa otwartych krótkich opcji put. Reprezentuje koszt ich odkupienia i zamknięcia pozycji.", tooltipCalls: "Bieżąca wartość rynkowa otwartych krótkich opcji call. Reprezentuje koszt ich odkupienia i zamknięcia pozycji." },
                premiumCapture: { title: "Przechwycenie Premii", tooltip: "Procent początkowej premii, który został dotychczas 'przechwycony' jako zysk. Obliczany jako (Premia - Wartość Bieżąca) / Premia." },
                returnOnMaxRisk: { title: "Zwrot z Maksymalnego Ryzyka", tooltip: "Całkowita premia z otwartych krótkich opcji put jako procent ich całkowitego potencjalnego kosztu wykonania. Pokazuje potencjalny zwrot z zaryzykowanego kapitału." }
            },
            realizedIncome: {
                title: "Zrealizowany Dochód (Wszystkie Źródła)",
                winRate: { title: "Ogólny Wskaźnik Wygranych", description: "{{wins}} wygranych z {{total}} zamkniętych krótkich opcji.", tooltip: "Procent wszystkich zamkniętych transakcji na krótkich opcjach (put i call), które przyniosły zrealizowany zysk." },
                syepIncome: { title: "Dochód z SYEP", description: "Z Programu Zwiększania Rentowności Akcji.", tooltip: "Dochód uzyskany dzięki zezwoleniu IBKR na pożyczanie Twoich w pełni opłaconych akcji." }
            },
            closedPuts: {
                title: "Szczegółowa Analiza Zamkniętych Krótkich Opcji Put",
                totalPL: { title: "Całkowity Zrealizowany Z/S", description: "Z wygasłych lub odkupionych opcji put.", tooltip: "Całkowity zysk z krótkich opcji put, które wygasły poza ceną (out-of-the-money) lub zostały zamknięte przez odkupienie." },
                contractsClosed: { title: "Zamknięte Kontrakty", description: "Całkowita liczba zamkniętych kontraktów put.", tooltip: "Całkowita liczba pojedynczych krótkich kontraktów put, które wygasły bez wartości lub zostały odkupione w celu zamknięcia." },
                avgPL: { title: "Śr. Z/S / Kontrakt", description: "Średni zysk lub strata na zamknięty kontrakt.", tooltip: "Średni dochód lub strata wygenerowana z każdego zamkniętego krótkiego kontraktu put." },
                assignmentRate: { title: "Wskaźnik Wykonania", description: "Procent krótkich opcji put, które zostały wykonane.", tooltip: "Spośród wszystkich zamkniętych krótkich opcji put, jest to procent, który został wykonany (tzn. musiałeś kupić akcje)." },
                avgAroc: { title: "Śr. Roczny ROC", description: "Śr. roczny zwrot dla zyskownych zamkniętych opcji put.", tooltip: "Roczny Zwrot z Kapitału. Dla zyskownych krótkich opcji put, roczna stopa zwrotu jest obliczana na podstawie zaryzykowanego kapitału i czasu trwania transakcji. Pomaga porównywać transakcje o różnej długości." }
            }
        },
        allocations: {
            byTickerTitle: "Alokacja Portfela według Tickera",
            byTickerTooltip: "Pokazuje alokację według bazowego tickera. Uwaga: Akcje i opcje Call są ważone według wartości rynkowej, podczas gdy krótkie opcje Put są ważone według ich potencjalnego kosztu wykonania (zabezpieczenia).",
            byAssetClassTitle: "Alokacja według Klasy Aktywów (wg Wartości)",
            filters: {
                stocks: "Akcje",
                puts: "Opcje Put",
                calls: "Opcje Call"
            },
            assetClasses: {
                stocks: "Akcje",
                options: "Opcje"
            }
        },
        openPositions: {
            title: "Otwarte Pozycje",
            total: "Suma",
            stocks: {
                title: "Akcje",
                symbol: "Symbol",
                qty: "Ilość",
                currentPrice: "Cena Bieżąca",
                currentPriceTooltip: "Ostatnia dostępna cena zamknięcia dla akcji.",
                costBasis: "Podstawa Kosztowa",
                costBasisTooltip: "Całkowita kwota zapłacona za akcje, wliczając prowizje, przeliczona na walutę bazową.",
                marketValue: "Wartość Rynkowa",
                marketValueTooltip: "Bieżąca całkowita wartość pozycji (Ilość * Cena Bieżąca).",
                unrealizedPL: "Niezrealizowany Z/S",
                unrealizedPLTooltip: "Bieżący 'papierowy' zysk lub strata dla tej pozycji."
            },
            puts: {
                title: "Opcje Put",
                symbol: "Symbol",
                qty: "Ilość",
                strike: "Cena Wyk.",
                breakeven: "Próg Rent.",
                breakevenTooltip: "Cena akcji, przy której pozycja osiąga próg rentowności w momencie wygaśnięcia (Cena Wykonania - Premia Netto na Akcję).",
                moneyness: "Moneyness",
                moneynessTooltip: "Jak daleko cena akcji jest od ceny wykonania (w %). Dodatnia wartość oznacza pozycję poza ceną (dobrze), ujemna w cenie (ryzykownie).",
                dte: "DTE",
                dteTooltip: "Dni do wygaśnięcia. Liczba dni kalendarzowych do wygaśnięcia opcji.",
                premium: "Premia",
                premiumTooltip: "Kredyt netto otrzymany za sprzedaż tej opcji, przeliczony na walutę bazową.",
                unrealizedPL: "Niezrealizowany Z/S",
                assignmentCost: "Koszt Wykonania",
                assignmentCostTooltip: "Całkowita gotówka wymagana do zakupu akcji w przypadku wykonania (Cena Wykonania * Ilość * Mnożnik).",
                moneynessPriceAvailable: "Na podstawie ostatniej ceny zamknięcia {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Ostatnia cena akcji dla {{baseSymbol}} jest niedostępna, ponieważ nie ma otwartej pozycji na akcje tego tickera."
            },
            calls: {
                title: "Opcje Call",
                symbol: "Symbol",
                qty: "Ilość",
                strike: "Cena Wyk.",
                breakeven: "Próg Rent.",
                breakevenTooltip: "Cena akcji, przy której pozycja osiąga próg rentowności w momencie wygaśnięcia (Cena Wykonania + Premia Netto na Akcję).",
                moneyness: "Moneyness",
                moneynessTooltip: "Jak daleko cena akcji jest od ceny wykonania (w %). Dodatnia wartość oznacza pozycję w cenie (ryzykownie), ujemna poza ceną (dobrze).",
                dte: "DTE",
                dteTooltip: "Dni do wygaśnięcia. Liczba dni kalendarzowych do wygaśnięcia opcji.",
                premium: "Premia",
                premiumTooltip: "Kredyt netto otrzymany za sprzedaż tej opcji, przeliczony na walutę bazową.",
                unrealizedPL: "Niezrealizowany Z/S",
                moneynessPriceAvailable: "Na podstawie ostatniej ceny zamknięcia {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Ostatnia cena akcji dla {{baseSymbol}} jest niedostępna, ponieważ nie ma otwartej pozycji na akcje tego tickera."
            }
        },
        closedPositions: {
            title: "Zamknięte Pozycje (Zrealizowany Z/S)",
            assetCategory: "Klasa Aktywów",
            symbol: "Symbol",
            realizedPL: "Zrealizowany Z/S",
            aroc: "AROC",
            arocTooltip: "Roczny Zwrot z Kapitału. Dla zyskownych krótkich opcji put, roczna stopa zwrotu jest obliczana na podstawie zaryzykowanego kapitału i czasu trwania transakcji. Pomaga porównywać transakcje o różnej długości."
        },
        wheelSummary: {
            title: "Podsumowanie Wyników Strategii Wheel",
            totalPL: { title: "Całkowity Z/S z Wheel", description: "Całkowity zrealizowany Z/S ze wszystkich zakończonych cykli Wheel.", tooltip: "Suma wszystkich zysków i strat z każdego zakończonego cyklu Wheel (Premia z Put + Premia z Call + Z/S z Akcji)." },
            totalPremium: { title: "Całkowita Zebrana Premia", description: "Ze wszystkich zakończonych i trwających cykli Wheel.", tooltip: "Suma wszystkich premii z opcji put i call zebranych w każdym cyklu Wheel, zarówno zakończonych, jak i w toku." },
            avgDuration: { title: "Śr. Czas Trwania Cyklu", description: "Średni czas trwania zakończonego cyklu Wheel.", value: "{{days}} Dni", tooltip: "Średnia liczba dni od początku cyklu (wykonanie opcji put) do jego końca (sprzedaż akcji)." },
            annualizedReturn: { title: "Ogólny Roczny Zwrot", description: "Ważony kapitałem i czasem roczny zwrot z zakończonych cykli.", tooltip: "Ważony czasem i kapitałem roczny zwrot dla wszystkich zakończonych cykli. Ta metryka dostarcza najdokładniejszego obrazu ogólnej efektywności strategii." }
        },
        wheel: {
            title: "Analiza Cykli Strategii Wheel",
            pending: {
                title: "Trwające Cykle",
                headers: {
                    symbol: "Symbol",
                    startDate: "Data Rozpoczęcia",
                    netCostBasis: "Koszt Netto",
                    callPremium: "Premia z Call",
                    currentValue: "Wartość Bieżąca",
                    unrealizedStockPL: "Niezreal. Z/S Akcji",
                    currentTotalPL: "Bieżący Całk. Z/S"
                },
                tooltips: {
                    startDate: "Data, w której zostały Ci przypisane akcje, co oznacza początek cyklu.",
                    netCostBasis: "Efektywny koszt Twoich akcji po odjęciu premii z początkowej opcji put (Koszt Brutto - Premia z Put).",
                    currentTotalPL: "Bieżący niezrealizowany Z/S dla całego cyklu, gdybyś go teraz zamknął (Niezreal. Z/S Akcji + Całkowita Premia z Call)."
                }
            },
            completed: {
                title: "Zakończone Cykle",
                headers: {
                    symbol: "Symbol",
                    startDate: "Data Rozpoczęcia",
                    endDate: "Data Zakończenia",
                    duration: "Czas (Dni)",
                    callPremium: "Premia z Call",
                    stockPL: "Z/S z Akcji",
                    totalPL: "Całkowity Z/S",
                    returnOnCost: "Zwrot z Kosztu"
                },
                tooltips: {
                    endDate: "Data Zakończenia",
                    duration: "Czas (Dni)",
                    totalPL: "Ostateczny zysk lub strata dla całego cyklu (Premia z Call + Z/S z Akcji).",
                    returnOnCost: "Całkowity Z/S cyklu jako procent kosztu netto przypisanych akcji."
                }
            },
            details: {
                costBasisTitle: "Koszt Cyklu",
                costBasisPLTitle: "Koszt i Z/S Cyklu",
                assignment: "Przypisanie",
                assignmentText: "{{shares}} akcji @ {{price}}",
                grossCostBasis: "Koszt Brutto",
                putPremiumApplied: "Zastosowana Premia Put",
                netCostBasis: "Koszt Netto",
                sale: "Sprzedaż",
                saleText: "{{shares}} akcji @ {{price}}",
                totalSaleProceeds: "Całkowity Przychód ze Sprzedaży",
                stockPLOnNet: "Z/S Akcji (od kosztu netto)",
                tradeLogTitle: "Pełny Dziennik Transakcji",
                log: {
                    date: "Data",
                    description: "Opis",
                    amount: "Kwota"
                }
            }
        }
    },
    publicDashboard: {
        title: "Widok Publiczny do Udostępniania",
        backButton: "Powrót do Widoku Prywatnego",
        publicViewButtonTooltip: "Przełącz na Widok Publiczny",
        export: "Eksportuj",
        exporting: "Eksportowanie...",
        exportAsPng: "Eksportuj jako PNG",
        exportAsSvg: "Eksportuj jako SVG",
        reportTitle: "Migawka Mojego Portfela",
        period: "Okres",
        generatedBy: "Wygenerowano przez Analizator Portfela IBKR",
        metrics: {
            winRate: {
                title: "Wskaźnik Wygranych",
                description: "Wszystkich zamkniętych krótkich opcji"
            },
            assignmentRate: {
                title: "Wskaźnik Przypisania",
                description: "Wszystkich zamkniętych krótkich opcji put"
            },
            annualizedReturn: {
                title: "Roczny Zwrot z Wheel",
                description: "Z zakończonych cykli"
            }
        }
    },
    metricCard: {
        showDetails: "Szczegóły",
        hideDetails: "Ukryj szczegóły"
    },
    pagination: {
        page: "Strona {{currentPage}} z {{totalPages}}",
        prev: "Poprz",
        next: "Nast"
    },
    assetCategories: {
        stocks: "Akcje",
        options: "Opcje",
        forex: "Forex"
    },
    dynamicHeaders: {
        expiryDate: "Data Wygaśnięcia",
        assignmentCost: "Koszt Wykonania",
        symbol: "Symbol",
        daysOpen: "Dni w Pozycji",
        premium: "Premia",
        aroc: "AROC"
    },
    footer: {
        disclaimerTitle: "Zastrzeżenie",
        disclaimerText: "Ta aplikacja jest dostarczana wyłącznie w celach informacyjnych. Aplikacja jest wciąż w fazie rozwoju i może zawierać błędy. Nie ponosimy odpowiedzialności za żadne decyzje finansowe podjęte na podstawie tej aplikacji. Zawsze przeprowadzaj własne badania.",
        createdBy: "Stworzone przez",
        version: "Wersja"
    },
    guide: {
        title: "Szersza Perspektywa: Wizualizacja Cyklu",
        diagram: {
            footer: "Animacja pokazuje dwie główne pętle strategii Wheel. Pełna pętla obejmuje otrzymanie akcji i ich późniejszą sprzedaż. Krótsze pętle występują, gdy opcje wygasają bez wartości, co pozwala po prostu zebrać premię i powtórzyć krok.",
            nodes: {
                yourCash: "Twoja Gotówka",
                startEnd: "Start i Koniec",
                sellPut: "1. Sprzedaj Put",
                collectPremium: "Zbierz Premię",
                ownShares: "Posiadaj 100 Akcji",
                fromAssignment: "Z Przypisania",
                sellCall: "2. Sprzedaj Call",
                sellShares: "Sprzedaj 100 Akcji",
                calledAway: "Akcje Sprzedane"
            },
            legend: {
                title: "Legenda Animacji",
                cashFlow: "Przepływ Gotówki",
                premiumIncome: "Dochód z Premii",
                stockHolding: "Posiadanie Akcji",
                assignment: "Przypisanie"
            },
            stockPrice: "Cena Akcji",
            pl: "Z/S",
            strikePrice: "Cena Wykonania",
            breakeven: "Próg Rentowności",
            breakevenPutDesc: "(Strike - Premia)",
            breakevenCallDesc: "(Koszt - Premia)",
            maxProfit: "Maks. Zysk",
            maxProfitDesc: "(Premia)",
            maxProfitCapped: "(Ograniczony)",
            lossArea: "Strefa Straty",
            yourCostBasis: "Twój Koszt Nabycia"
        },
        step1: {
            title: "Sprzedaj Opcję Put Zabezpieczoną Gotówką",
            description: "Pierwszym krokiem jest sprzedaż opcji put na akcję, którą naprawdę chcesz posiadać. Wybierasz cenę wykonania poniżej bieżącej ceny rynkowej – to jest cena, którą jesteś gotów zapłacić. W zamian za sprzedaż tej opcji otrzymujesz natychmiastowy dochód, zwany premią.",
            outcomeA: {
                title: "Wynik A: Sukces! (Akcja pozostaje powyżej ceny wykonania)",
                description: "Opcja wygasa bez wartości. Zachowujesz 100% premii jako czysty zysk. Następnie możesz powtórzyć ten krok, sprzedając kolejną opcję put, aby wygenerować więcej dochodu."
            },
            outcomeB: {
                title: "Wynik B: Przypisanie (Akcja spada poniżej ceny wykonania)",
                description: "Zostajesz przypisany i musisz kupić 100 akcji po cenie wykonania. Ale ponieważ już otrzymałeś premię, Twój efektywny koszt nabycia jest niższy niż cena wykonania. Teraz posiadasz akcję z rabatem!"
            }
        },
        step2: {
            title: "Sprzedaj Opcję Call Zabezpieczoną Akcjami",
            description: "Ten krok wykonujesz tylko, jeśli zostały Ci przypisane akcje z Kroku 1. Teraz, gdy posiadasz 100 akcji, możesz sprzedać na nie opcję call, aby wygenerować więcej dochodu. Wybierasz cenę wykonania powyżej swojego kosztu nabycia.",
            outcomeA: {
                title: "Wynik A: Sukces! (Akcja pozostaje poniżej ceny wykonania)",
                description: "Opcja wygasa bez wartości. Zachowujesz premię i swoje 100 akcji. Następnie możesz powtórzyć ten krok, sprzedając kolejną opcję call, aby uzyskać więcej dochodu."
            },
            outcomeB: {
                title: "Wynik B: Sprzedaż (Akcja wzrasta powyżej ceny wykonania)",
                description: "Twoje 100 akcji zostaje sprzedane po cenie wykonania. Zachowujesz premię z opcji call PLUS zysk ze sprzedaży akcji powyżej Twojego kosztu nabycia. Koło jest zakończone, a Ty wracasz do gotówki, gotowy do rozpoczęcia od nowa."
            }
        },
        benefits: {
            title: "Kluczowe Korzyści",
            benefit1: { title: "Generuje Dochód", description: "Regularnie zbieraj premie ze sprzedaży opcji put i call." },
            benefit2: { title: "Kupuj Akcje Taniej", description: "Nabywaj akcje, które lubisz, po niższej cenie efektywnej." },
            benefit3: { title: "Definiujesz Swoje Ceny", description: "Sam ustalasz cenę, po której jesteś gotów kupować i (potencjalnie) sprzedawać." }
        },
        risks: {
            title: "Ważne Ryzyka",
            risk1: { title: "Ryzyko Posiadania", description: "Głównym ryzykiem jest przypisanie akcji, której cena następnie znacznie spadnie. Możesz trzymać tracącą na wartości akcję przez długi czas." },
            risk2: { title: "Ograniczone Zyski", description: "Kiedy sprzedajesz opcję call zabezpieczoną akcjami, ograniczasz swój potencjalny zysk z wzrostu ceny akcji." },
            risk3: { title: "Wymagana Cierpliwość", description: "Nigdy nie używaj strategii Wheel na akcji, której nie jesteś zadowolony z posiadania na dłuższą metę." }
        },
        copilot: {
            title: "Ta Aplikacja to Twój Drugi Pilot w Strategii Wheel",
            description: "Ręczne śledzenie transakcji w strategii Wheel może być skomplikowane. Ten analizator wykonuje ciężką pracę za Ciebie. Automatycznie identyfikuje Twoje zakończone i trwające cykle Wheel, obliczając dokładny Z/S, całkowite premie, czas trwania i roczne zwroty dla każdego z nich. Przestań zgadywać i zacznij dokładnie widzieć, jak radzi sobie Twoja strategia."
        }
    }
};
