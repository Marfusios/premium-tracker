
export const de = {
    app: {
        title: "IBKR Portfolio-Analysator",
        loading: "Ihr Auszug wird analysiert...",
        tryAgain: "Erneut versuchen",
        errors: {
            title: "Ein Fehler ist aufgetreten",
            fileRead: "Die Datei konnte nicht gelesen werden.",
            criticalData: "Kritische Daten konnten aus der Datei nicht analysiert werden. Bitte stellen Sie sicher, dass es sich um einen gültigen IBKR-Aktivitätsauszug handelt.",
            unknownParse: "Ein unbekannter Analysefehler ist aufgetreten."
        }
    },
    fileUpload: {
        title: "Portfolio-Analysator",
        subtitle: "Laden Sie Ihren IBKR-Aktivitätsauszug hoch, um zu beginnen.",
        description: "Verwandeln Sie Ihren Interactive Brokers Aktivitätsauszug in ein leistungsstarkes Entscheidungsinstrument. Erhalten Sie einen kristallklaren Überblick über Ihre Performance, spezialisiert auf den Verkauf von Optionen und die Wheel-Strategie. Unser Dashboard hilft Ihnen, Ihre Gewinne zu visualisieren, das Portfoliorisiko zu steuern und mit Zuversicht auf Marge zu handeln.",
        dropzone: {
            dragAndDrop: "Drag & Drop",
            or: "oder",
            clickToUpload: "klicken Sie zum Hochladen",
            yourCsvFile: "Ihrer CSV-Datei",
            acceptedFormats: "(.csv oder .txt Format akzeptiert)"
        },
        privacyNote: "Hinweis: Die gesamte Verarbeitung findet in Ihrem Browser statt. Ihre Daten werden niemals auf einen Server hochgeladen.",
        instructions: {
            title: "So erhalten Sie Ihren Aktivitätsauszug",
            step1_part1: 'Melden Sie sich bei Interactive Brokers an und navigieren Sie zum Tab ',
            step1_strong: '"Performance & Berichte"',
            step1_part2: '.',
            step2_part1: 'Unter "Auszüge" finden Sie ',
            step2_strong1: '"Aktivität"',
            step2_part2: ' und klicken Sie auf die Schaltfläche ',
            step2_strong2: '"Ausführen"',
            step2_part3: ' (das Pfeilsymbol).',
            caption1: "Schritte 1 & 2: Navigieren Sie zu den Aktivitätsauszügen.",
            step3_part1: 'Wählen Sie im Pop-up-Fenster den gewünschten ',
            step3_strong: 'Zeitraum',
            step3_part2: ' (z.B. "Monatlich", "Seit Jahresbeginn").',
            step4_part1: 'Finden Sie die Formatoption ',
            step4_strong1: 'CSV',
            step4_part2: ' und klicken Sie auf die entsprechende Schaltfläche ',
            step4_strong2: '"Herunterladen"',
            step4_part3: ', um die Datei zu speichern.',
            caption2: "Schritte 3 & 4: Zeitraum auswählen und CSV herunterladen.",
            notes: {
                title: "Wichtige Hinweise",
                note1: "Stellen Sie sicher, dass Sie den Aktivitätsauszug herunterladen, da andere Auszugstypen möglicherweise nicht kompatibel sind.",
                note2: "Das empfohlene Format ist CSV. Obwohl die App auch .txt-Dateien mit derselben Struktur verarbeiten kann, wird CSV bevorzugt.",
                note3: `Längere Zeiträume liefern umfassendere Daten für die Analyse. "Seit Jahresbeginn" ist ein guter Ausgangspunkt.`,
                note4: "Öffnen und speichern Sie die CSV-Datei nicht erneut in Tabellenkalkulationsprogrammen wie Excel, da dies die Formatierung ändern und zu Analysefehlern führen kann. Laden Sie sie herunter und direkt hier hoch."
            }
        },
        guide: {
            title: "Ein Leitfaden für Anfänger zur Wheel-Strategie",
            description: "Die Wheel-Strategie ist eine Optionshandelsstrategie, die darauf abzielt, konsistente Einnahmen zu generieren. Sie beinhaltet den systematischen Verkauf von cash-gesicherten Puts und gedeckten Calls mit dem Ziel, eine Aktie, die Sie mögen, mit einem Rabatt zu erwerben und sie dann mit Gewinn zu verkaufen."
        }
    },
    dashboard: {
        header: {
            title: "Portfolio-Dashboard",
            analyzeNewFile: "Neue Datei analysieren"
        },
        metrics: {
            totalNAV: { title: "Gesamter Nettoinventarwert", description: "Aktueller Gesamtwert des Portfolios." },
            twr: { title: "Zeitgewichtete Rendite", description: "TWR für den Berichtszeitraum.", tooltip: "Misst die Portfolio-Performance im Zeitverlauf und eliminiert die verzerrenden Effekte von Cashflows. Sie spiegelt Ihre persönliche Anlageperformance wider." },
            putLeverage: { title: "Short-Put-Hebel", description: "Andienungswert vs. NAV / vs. Bargeld", tooltip: "Vergleicht die gesamten Andienungskosten von Short-Puts mit Ihrem NAV und Barguthaben. NAV: Gesamtwert aller Vermögenswerte. Bargeld: Nur Ihr Barguthaben. Hohe Werte deuten auf ein höheres Risiko hin." },
            baseCurrency: { title: "Basiswährung", description: "Die Hauptwährung des Kontos." }
        },
        plSummary: {
            title: "Gewinn- und Verlustübersicht",
            assetClass: "Anlageklasse",
            realizedPL: "Realisierter G/V",
            unrealizedPL: "Nicht realisierter G/V",
            totalPL: "Gesamt G/V",
            realizedTooltip: "Gewinn oder Verlust aus geschlossenen Positionen. Dies ist der 'festgeschriebene' G/V.",
            unrealizedTooltip: "Der aktuelle 'theoretische' Gewinn oder Verlust von noch offenen Positionen. Dieser Wert schwankt mit dem Markt.",
            stocks: "Aktien",
            options: "Optionen",
            forex: "Devisen",
            total: "Gesamt"
        },
        navSankey: {
            title: "NAV-Fluss",
            nodes: {
                startingNAV: "Anfangs-NAV",
                deposits: "Einzahlungen",
                m2mGains: "M2M-Gewinne",
                interestFXGains: "Zins- & FX-Gewinne",
                grossValue: "Bruttowert",
                endingNAV: "End-NAV",
                withdrawals: "Auszahlungen",
                m2mLosses: "M2M-Verluste",
                commissions: "Provisionen",
                feesTax: "Gebühren & Steuern",
                interestPaid: "Gezahlte Zinsen"
            }
        },
        tickerPL: {
            title: "G/V-Beitrag nach Ticker",
            tooltip: { totalPL: "Gesamt G/V" }
        },
        monthlyPerformance: {
            title: {
                income: "Monatlicher Einkommenstracker",
                pl: "Monatlicher G/V-Tracker"
            },
            buttons: {
                income: "Einkommen",
                pl: "G/V"
            },
            legend: {
                optionsPremium: "Optionsprämie",
                optionsPL: "Optionen G/V",
                syepIncome: "SYEP-Einkommen",
                interest: "Zinsen"
            },
            tooltip: {
                total: "Gesamt"
            }
        },
        fees: {
            title: "Monatliche Kostenaufschlüsselung",
            legend: {
                commissions: "Provisionen",
                otherFees: "Sonstige Gebühren",
                salesTax: "Umsatzsteuer",
                paidInterest: "Gezahlte Zinsen"
            },
            tooltip: {
                total: "Gesamtkosten"
            }
        },
        putRisk: {
            title: "Short-Put-Risikoanalyse",
            cashBalance: { title: "Aktueller Bargeldbestand", description: "Ihr verfügbares Bargeld für Andienungen." },
            likelyRisk: {
                title: "Wahrscheinliches Andienungsrisiko",
                assignmentValue: { title: "Andienungswert (ITM)", description: "Für Puts, die im Geld (In-The-Money) sind oder einen negativen G/V haben.", tooltip: "Das gesamte Bargeld, das für den Kauf von Aktien für alle Short-Puts benötigt wird, die derzeit im Geld (ITM) sind." },
                cashShortfall: { title: "Bargeld-Fehlbetrag", description: "Benötigte Mittel für diese wahrscheinlichen Andienungen.", tooltip: "Der zusätzliche Bargeldbetrag, der erforderlich wäre, wenn heute alle 'wahrscheinlichen' (ITM) Puts angedient würden. Berechnet als (Andienungswert - Bargeldbestand)." }
            },
            unlikelyRisk: {
                title: "Unwahrscheinliches Andienungsrisiko",
                assignmentValue: { title: "Andienungswert (OTM)", description: "Für Puts, die aus dem Geld (Out-of-The-Money) sind oder einen positiven G/V haben.", tooltip: "Das gesamte Bargeld, das für den Kauf von Aktien für alle Short-Puts benötigt wird, die derzeit aus dem Geld (OTM) sind." },
                additionalShortfall: { title: "Zusätzlicher Fehlbetrag", description: "Weitere Mittel, die benötigt werden, wenn auch diese Puts angedient werden.", tooltip: "Der zusätzliche Bargeldbetrag, der erforderlich wäre, wenn auch alle 'unwahrscheinlichen' (OTM) Puts angedient würden, nachdem das für wahrscheinliche Andienungen verwendete Bargeld berücksichtigt wurde." }
            }
        },
        shortOptionsStrategy: {
            title: "Strategie für Short-Optionen",
            openPositions: {
                title: "Performance offener Positionen",
                putsTitle: "Short Puts (offen)",
                callsTitle: "Short Calls (offen)",
                totalPremium: { title: "Gesamtprämie", tooltipPuts: "Gesamte eingenommene Prämie für alle offenen Short-Put-Positionen.", tooltipCalls: "Gesamte eingenommene Prämie für alle offenen Short-Call-Positionen." },
                currentValue: { title: "Aktueller Wert (Kosten für Schließung)", tooltipPuts: "Aktueller Marktwert offener Short-Put-Optionen. Dies entspricht den Kosten für deren Rückkauf und Schließung der Positionen.", tooltipCalls: "Aktueller Marktwert offener Short-Call-Optionen. Dies entspricht den Kosten für deren Rückkauf und Schließung der Positionen." },
                premiumCapture: { title: "Prämienerfassung", tooltip: "Der Prozentsatz der ursprünglichen Prämie, der bisher als Gewinn 'erfasst' wurde. Berechnet als (Prämie - Aktueller Wert) / Prämie." },
                returnOnMaxRisk: { title: "Rendite auf Max. Risiko", tooltip: "Gesamtprämie von offenen Short-Puts als Prozentsatz ihrer gesamten potenziellen Andienungskosten. Zeigt die potenzielle Rendite auf das von Ihnen riskierte Kapital." }
            },
            realizedIncome: {
                title: "Realisierte Einnahmen (alle Quellen)",
                winRate: { title: "Gesamterfolgsquote", description: "{{wins}} Gewinne von {{total}} geschlossenen Short-Optionen.", tooltip: "Der Prozentsatz aller geschlossenen Short-Optionsgeschäfte (Puts und Calls), die zu einem realisierten Gewinn führten." },
                syepIncome: { title: "SYEP-Einkommen", description: "Aus dem Stock Yield Enhancement Program.", tooltip: "Einnahmen, die durch die Erlaubnis erzielt werden, dass IBKR Ihre voll bezahlten Aktien verleiht." }
            },
            closedPuts: {
                title: "Tiefenanalyse geschlossener Short-Puts",
                totalPL: { title: "Realisierter Gesamt-G/V", description: "Von verfallenen oder zurückgekauften Puts.", tooltip: "Gesamtgewinn aus Short-Put-Optionen, die wertlos verfallen oder durch Rückkauf geschlossen wurden." },
                contractsClosed: { title: "Geschlossene Kontrakte", description: "Gesamtzahl der geschlossenen Put-Kontrakte.", tooltip: "Die Gesamtzahl der einzelnen Short-Put-Kontrakte, die entweder wertlos verfallen oder zur Schließung zurückgekauft wurden." },
                avgPL: { title: "Durchschn. G/V / Kontrakt", description: "Durchschnittlicher Gewinn oder Verlust pro geschlossenem Kontrakt.", tooltip: "Das durchschnittlich erzielte Einkommen oder der Verlust aus jedem geschlossenen Short-Put-Kontrakt." },
                assignmentRate: { title: "Andienungsquote", description: "Prozentsatz der Short-Puts, die angedient wurden.", tooltip: "Von allen geschlossenen Short-Puts ist dies der Prozentsatz, der angedient wurde (d.h. Sie mussten die Aktie kaufen)." },
                avgAroc: { title: "Durchschn. Jahres-ROC", description: "Durchschn. annualisierte Rendite für profitable geschlossene Puts.", tooltip: "Annualisierte Rendite auf das Kapital. Für profitable Short-Puts wird die Rendite auf der Grundlage des riskierten Kapitals und der Haltedauer annualisiert. Hilft beim Vergleich von Trades unterschiedlicher Länge." }
            }
        },
        allocations: {
            byTickerTitle: "Portfolio-Allokation nach Ticker",
            byTickerTooltip: "Zeigt die Allokation nach zugrunde liegendem Ticker. Hinweis: Aktien und Calls werden nach Marktwert gewichtet, während Short-Puts nach ihren potenziellen Andienungskosten (Sicherheiten) gewichtet werden.",
            byAssetClassTitle: "Anlageklassenallokation (nach Wert)",
            filters: {
                stocks: "Aktien",
                puts: "Put-Optionen",
                calls: "Call-Optionen"
            },
            assetClasses: {
                stocks: "Aktien",
                options: "Optionen"
            }
        },
        openPositions: {
            title: "Offene Positionen",
            total: "Gesamt",
            stocks: {
                title: "Aktien",
                symbol: "Symbol",
                qty: "Menge",
                currentPrice: "Aktueller Preis",
                currentPriceTooltip: "Der letzte verfügbare Schlusskurs für die Aktie.",
                costBasis: "Einstandskurs",
                costBasisTooltip: "Der Gesamtbetrag, der für die Aktien bezahlt wurde, einschließlich Provisionen, umgerechnet in Ihre Basiswährung.",
                marketValue: "Marktwert",
                marketValueTooltip: "Der aktuelle Gesamtwert der Position (Menge * Aktueller Preis).",
                unrealizedPL: "Nicht real. G/V",
                unrealizedPLTooltip: "Der aktuelle 'theoretische' Gewinn oder Verlust für diese Position."
            },
            puts: {
                title: "Puts",
                symbol: "Symbol",
                qty: "Menge",
                strike: "Strike",
                breakeven: "Gewinnschwelle",
                breakevenTooltip: "Der Aktienkurs, bei dem die Position bei Verfall ausgeglichen ist (Strikepreis - Nettoprämie pro Aktie).",
                moneyness: "Moneyness",
                moneynessTooltip: "Wie weit der aktuelle Aktienkurs vom Strikepreis entfernt ist (in %). Positiv ist aus dem Geld (gut), negativ ist im Geld (riskant).",
                dte: "DTE",
                dteTooltip: "Tage bis zum Verfall. Die Anzahl der Kalendertage, bis die Option verfällt.",
                premium: "Prämie",
                premiumTooltip: "Die erhaltene Nettogutschrift für den Verkauf dieser Option, umgerechnet in Ihre Basiswährung.",
                unrealizedPL: "Nicht real. G/V",
                assignmentCost: "Andienungskosten",
                assignmentCostTooltip: "Das gesamte Bargeld, das benötigt wird, um die Aktien bei Andienung zu kaufen (Strikepreis * Menge * Multiplikator).",
                moneynessPriceAvailable: "Basierend auf dem letzten Schlusskurs von {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Der letzte Aktienkurs für {{baseSymbol}} ist nicht verfügbar, da keine offene Aktienposition für diesen Ticker vorhanden ist."
            },
            calls: {
                title: "Calls",
                symbol: "Symbol",
                qty: "Menge",
                strike: "Strike",
                breakeven: "Gewinnschwelle",
                breakevenTooltip: "Der Aktienkurs, bei dem die Position bei Verfall ausgeglichen ist (Strikepreis + Nettoprämie pro Aktie).",
                moneyness: "Moneyness",
                moneynessTooltip: "Wie weit der aktuelle Aktienkurs vom Strikepreis entfernt ist (in %). Positiv ist im Geld (riskant), negativ ist aus dem Geld (gut).",
                dte: "DTE",
                dteTooltip: "Tage bis zum Verfall. Die Anzahl der Kalendertage, bis die Option verfällt.",
                premium: "Prämie",
                premiumTooltip: "Die erhaltene Nettogutschrift für den Verkauf dieser Option, umgerechnet in Ihre Basiswährung.",
                unrealizedPL: "Nicht real. G/V",
                moneynessPriceAvailable: "Basierend auf dem letzten Schlusskurs von {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Der letzte Aktienkurs für {{baseSymbol}} ist nicht verfügbar, da keine offene Aktienposition für diesen Ticker vorhanden ist."
            }
        },
        closedPositions: {
            title: "Geschlossene Positionen (Realisierter G/V)",
            assetCategory: "Anlageklasse",
            symbol: "Symbol",
            realizedPL: "Realisierter G/V",
            aroc: "AROC",
            arocTooltip: "Annualisierte Rendite auf das Kapital. Für profitable Short-Puts wird die Rendite auf der Grundlage des riskierten Kapitals und der Haltedauer annualisiert. Hilft beim Vergleich von Trades unterschiedlicher Länge."
        },
        wheelSummary: {
            title: "Zusammenfassung der Wheel-Strategie-Performance",
            totalPL: { title: "Gesamt-G/V der Wheel-Strategie", description: "Gesamter realisierter G/V aus allen abgeschlossenen Wheel-Zyklen.", tooltip: "Summe aller Gewinne und Verluste aus jedem abgeschlossenen Wheel-Zyklus (Put-Prämie + Call-Prämie + Aktien-G/V)." },
            totalPremium: { title: "Gesamte eingenommene Prämie", description: "Aus allen abgeschlossenen und laufenden Wheel-Zyklen.", tooltip: "Summe aller Put- und Call-Prämien, die über jeden Wheel-Zyklus, sowohl abgeschlossen als auch laufend, eingenommen wurden." },
            avgDuration: { title: "Durchschn. Zyklusdauer", description: "Durchschnittliche Dauer eines abgeschlossenen Wheel-Zyklus.", value: "{{days}} Tage", tooltip: "Die durchschnittliche Anzahl der Tage vom Beginn eines Zyklus (Put-Andienung) bis zu seinem Ende (Aktienverkauf)." },
            annualizedReturn: { title: "Gesamte annualisierte Rendite", description: "Kapital- und zeitgewichtete annualisierte Rendite auf abgeschlossene Zyklen.", tooltip: "Die zeit- und kapitalgewichtete annualisierte Rendite für alle abgeschlossenen Zyklen. Diese Kennzahl liefert das genaueste Bild der Gesamteffizienz der Strategie." }
        },
        wheel: {
            title: "Analyse der Wheel-Zyklen",
            pending: {
                title: "Laufende Zyklen",
                headers: {
                    symbol: "Symbol",
                    startDate: "Startdatum",
                    netCostBasis: "Netto-Einstandskurs",
                    callPremium: "Call-Prämie",
                    currentValue: "Aktueller Wert",
                    unrealizedStockPL: "Nicht real. Aktien G/V",
                    currentTotalPL: "Aktueller Gesamt-G/V"
                },
                tooltips: {
                    startDate: "Das Datum, an dem Ihnen die Aktien angedient wurden, was den Beginn des Zyklus markiert.",
                    netCostBasis: "Die effektiven Kosten Ihrer Aktien nach Abzug der Prämie des ursprünglichen Puts (Bruttokosten - Put-Prämie).",
                    currentTotalPL: "Der aktuelle nicht realisierte G/V für den gesamten Zyklus, wenn Sie ihn jetzt schließen würden (Nicht real. Aktien G/V + Gesamt-Call-Prämie)."
                }
            },
            completed: {
                title: "Abgeschlossene Zyklen",
                headers: {
                    symbol: "Symbol",
                    startDate: "Startdatum",
                    endDate: "Enddatum",
                    duration: "Dauer (Tage)",
                    callPremium: "Call-Prämie",
                    stockPL: "Aktien G/V",
                    totalPL: "Gesamt G/V",
                    returnOnCost: "Rendite auf Kosten"
                },
                tooltips: {
                    endDate: "Enddatum",
                    duration: "Dauer (Tage)",
                    totalPL: "Der endgültige Gewinn oder Verlust für den gesamten Zyklus (Call-Prämie + Aktien-G/V).",
                    returnOnCost: "Der gesamte G/V des Zyklus als Prozentsatz des Netto-Einstandskurses der angedienten Aktie."
                }
            },
            details: {
                costBasisTitle: "Einstandskurs des Zyklus",
                costBasisPLTitle: "Einstandskurs & G/V des Zyklus",
                assignment: "Andienung",
                assignmentText: "{{shares}} Aktien @ {{price}}",
                grossCostBasis: "Brutto-Einstandskurs",
                putPremiumApplied: "Angewandte Put-Prämie",
                netCostBasis: "Netto-Einstandskurs",
                sale: "Verkauf",
                saleText: "{{shares}} Aktien @ {{price}}",
                totalSaleProceeds: "Gesamter Verkaufserlös",
                stockPLOnNet: "Aktien G/V (auf Netto-Kosten)",
                tradeLogTitle: "Vollständiges Handelsprotokoll",
                log: {
                    date: "Datum",
                    description: "Beschreibung",
                    amount: "Betrag"
                }
            }
        }
    },
    publicDashboard: {
        title: "Öffentliche Freigabeansicht",
        backButton: "Zurück zur privaten Ansicht",
        publicViewButtonTooltip: "Zur öffentlichen Ansicht wechseln",
        export: "Exportieren",
        exporting: "Exportiere...",
        exportAsPng: "Als PNG exportieren",
        exportAsSvg: "Als SVG exportieren",
        reportTitle: "Mein Portfolio-Snapshot",
        period: "Zeitraum",
        generatedBy: "Erstellt mit dem IBKR Portfolio-Analysator",
        metrics: {
            winRate: {
                title: "Erfolgsquote",
                description: "Aller geschlossenen Short-Optionen"
            },
            assignmentRate: {
                title: "Andienungsquote",
                description: "Aller geschlossenen Short-Puts"
            },
            annualizedReturn: {
                title: "Annualisierte Wheel-Rendite",
                description: "Auf abgeschlossene Zyklen"
            }
        }
    },
    metricCard: {
        showDetails: "Details",
        hideDetails: "Details ausblenden"
    },
    pagination: {
        page: "Seite {{currentPage}} von {{totalPages}}",
        prev: "Zurück",
        next: "Weiter"
    },
    assetCategories: {
        stocks: "Aktien",
        options: "Optionen",
        forex: "Devisen"
    },
    dynamicHeaders: {
        expiryDate: "Verfallsdatum",
        assignmentCost: "Andienungskosten",
        symbol: "Symbol",
        daysOpen: "Offene Tage",
        premium: "Prämie",
        aroc: "AROC"
    },
    footer: {
        disclaimerTitle: "Haftungsausschluss",
        disclaimerText: "Diese Anwendung dient nur zu Informationszwecken. Die App befindet sich noch in der Entwicklung und kann Fehler enthalten. Wir sind nicht für finanzielle Entscheidungen verantwortlich, die auf der Grundlage dieser App getroffen werden. Führen Sie immer Ihre eigene Recherche durch.",
        createdBy: "Erstellt von",
        version: "Version"
    },
    guide: {
        title: "Das große Ganze: Visualisierung des Zyklus",
        diagram: {
            footer: "Die Animation zeigt die beiden Hauptschleifen des Wheels. Die vollständige Schleife beinhaltet die Andienung von Aktien und deren späteren Verkauf. Kürzere Schleifen treten auf, wenn Optionen wertlos verfallen, sodass Sie einfach die Prämie einstreichen und einen Schritt wiederholen können.",
            nodes: {
                yourCash: "Ihr Bargeld",
                startEnd: "Start & Ende",
                sellPut: "1. Put verkaufen",
                collectPremium: "Prämie kassieren",
                ownShares: "100 Aktien besitzen",
                fromAssignment: "Aus Andienung",
                sellCall: "2. Call verkaufen",
                sellShares: "100 Aktien verkaufen",
                calledAway: "Aktien verkauft"
            },
            legend: {
                title: "Animationslegende",
                cashFlow: "Geldfluss",
                premiumIncome: "Prämieneinkommen",
                stockHolding: "Aktienbesitz",
                assignment: "Andienung"
            },
            stockPrice: "Aktienkurs",
            pl: "G/V",
            strikePrice: "Basispreis",
            breakeven: "Gewinnschwelle",
            breakevenPutDesc: "(Strike - Prämie)",
            breakevenCallDesc: "(Kosten - Prämie)",
            maxProfit: "Max. Gewinn",
            maxProfitDesc: "(Prämie)",
            maxProfitCapped: "(Begrenzt)",
            lossArea: "Verlustzone",
            yourCostBasis: "Ihr Einstandskurs"
        },
        step1: {
            title: "Einen Cash-gesicherten Put verkaufen",
            description: "Der erste Schritt ist der Verkauf einer Put-Option auf eine Aktie, die Sie wirklich besitzen möchten. Sie wählen einen Basispreis unter dem aktuellen Marktpreis – dies ist der Preis, den Sie zu zahlen bereit sind. Im Gegenzug für den Verkauf dieser Option erhalten Sie sofortiges Einkommen, eine sogenannte Prämie.",
            outcomeA: {
                title: "Ergebnis A: Erfolg! (Aktie bleibt über dem Strike)",
                description: "Die Option verfällt wertlos. Sie behalten 100% der Prämie als reinen Gewinn. Sie können diesen Schritt dann wiederholen und einen weiteren Put verkaufen, um mehr Einkommen zu generieren."
            },
            outcomeB: {
                title: "Ergebnis B: Andienung (Aktie fällt unter den Strike)",
                description: "Sie werden angedient und müssen 100 Aktien zum Basispreis kaufen. Da Sie aber bereits eine Prämie erhalten haben, ist Ihr effektiver Einstandskurs niedriger als der Basispreis. Sie besitzen die Aktie jetzt mit einem Rabatt!"
            }
        },
        step2: {
            title: "Einen gedeckten Call verkaufen",
            description: "Diesen Schritt führen Sie nur aus, wenn Ihnen Aktien aus Schritt 1 angedient wurden. Da Sie nun 100 Aktien besitzen, können Sie eine Call-Option darauf verkaufen, um weiteres Einkommen zu generieren. Sie wählen einen Basispreis über Ihrem Einstandskurs.",
            outcomeA: {
                title: "Ergebnis A: Erfolg! (Aktie bleibt unter dem Strike)",
                description: "Die Option verfällt wertlos. Sie behalten die Prämie und Ihre 100 Aktien. Sie können diesen Schritt dann wiederholen und einen weiteren Call für mehr Einkommen verkaufen."
            },
            outcomeB: {
                title: "Ergebnis B: Ausübung (Aktie steigt über den Strike)",
                description: "Ihre 100 Aktien werden zum Basispreis verkauft. Sie behalten die Prämie des Calls PLUS den Gewinn aus dem Verkauf der Aktien über Ihrem Einstandskurs. Das Rad ist vollständig, und Sie haben wieder Bargeld, bereit, von vorne zu beginnen."
            }
        },
        benefits: {
            title: "Wichtige Vorteile",
            benefit1: { title: "Generiert Einkommen", description: "Sammeln Sie konsistent Prämien aus dem Verkauf von Puts und Calls." },
            benefit2: { title: "Aktien günstiger kaufen", description: "Erwerben Sie Aktien, die Sie mögen, zu einem niedrigeren effektiven Preis." },
            benefit3: { title: "Sie definieren Ihre Preise", description: "Sie legen den Preis fest, zu dem Sie bereit sind zu kaufen und (potenziell) zu verkaufen." }
        },
        risks: {
            title: "Wichtige Risiken",
            risk1: { title: "Halterisiko", description: "Das Hauptrisiko besteht darin, eine Aktie angedient zu bekommen, deren Kurs dann erheblich fällt. Sie könnten eine verlustbringende Aktie für eine lange Zeit halten." },
            risk2: { title: "Begrenzte Gewinne", description: "Wenn Sie einen gedeckten Call verkaufen, begrenzen Sie Ihr potenzielles Aufwärtspotenzial der Aktie." },
            risk3: { title: "Geduld erforderlich", description: "Verwenden Sie die Wheel-Strategie niemals bei einer Aktie, die Sie nicht gerne langfristig besitzen möchten." }
        },
        copilot: {
            title: "Diese App ist Ihr Copilot für die Wheel-Strategie",
            description: "Die manuelle Verfolgung von Wheel-Trades kann komplex sein. Dieser Analysator nimmt Ihnen die schwere Arbeit ab. Er identifiziert automatisch Ihre abgeschlossenen und laufenden Wheel-Zyklen und berechnet Ihren genauen G/V, die Gesamtprämien, die Dauer und die annualisierten Renditen für jeden einzelnen. Hören Sie auf zu raten und sehen Sie genau, wie Ihre Strategie performt."
        }
    }
};
