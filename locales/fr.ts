
export const fr = {
    app: {
        title: "Analyseur de Portefeuille IBKR",
        loading: "Analyse de votre relevé en cours...",
        tryAgain: "Réessayer",
        errors: {
            title: "Une erreur est survenue",
            fileRead: "Échec de la lecture du fichier.",
            criticalData: "Impossible d'analyser les données critiques du fichier. Veuillez vous assurer qu'il s'agit d'un relevé d'activité IBKR valide.",
            unknownParse: "Une erreur d'analyse inconnue est survenue."
        }
    },
    fileUpload: {
        title: "Analyseur de Portefeuille",
        subtitle: "Téléchargez votre relevé d'activité IBKR pour commencer.",
        description: "Transformez votre relevé d'activité Interactive Brokers en un puissant outil de prise de décision. Obtenez une vision claire de vos performances, spécialisée dans la vente d'options et la stratégie 'Wheel'. Notre tableau de bord vous aide à visualiser vos gains, à gérer le risque de votre portefeuille et à négocier sur marge en toute confiance.",
        dropzone: {
            dragAndDrop: "Glissez et déposez",
            or: "ou",
            clickToUpload: "cliquez pour télécharger",
            yourCsvFile: "votre fichier CSV",
            acceptedFormats: "(formats .csv ou .txt acceptés)"
        },
        privacyNote: "Remarque : Tout le traitement a lieu dans votre navigateur. Vos données ne sont jamais téléchargées sur un serveur.",
        instructions: {
            title: "Comment obtenir votre relevé d'activité",
            step1_part1: 'Connectez-vous à Interactive Brokers et allez dans l\'onglet ',
            step1_strong: '"Performance & Rapports"',
            step1_part2: '.',
            step2_part1: 'Sous "Relevés", trouvez ',
            step2_strong1: '"Activité"',
            step2_part2: ' et cliquez sur le bouton ',
            step2_strong2: '"Exécuter"',
            step2_part3: ' (l\'icône flèche).',
            caption1: "Étapes 1 & 2 : Naviguez vers les Relevés d'Activité.",
            step3_part1: 'Dans la fenêtre contextuelle, choisissez la ',
            step3_strong: 'Période',
            step3_part2: ' souhaitée (par ex., "Mensuel", "Depuis le début de l\'année").',
            step4_part1: 'Trouvez l\'option de format ',
            step4_strong1: 'CSV',
            step4_part2: ' et cliquez sur le bouton correspondant ',
            step4_strong2: '"Télécharger"',
            step4_part3: ' pour enregistrer le fichier.',
            caption2: "Étapes 3 & 4 : Sélectionnez la période et téléchargez le CSV.",
            notes: {
                title: "Notes importantes",
                note1: "Assurez-vous de télécharger le relevé d'Activité, car d'autres types de relevés pourraient ne pas être compatibles.",
                note2: "Le format recommandé est CSV. Bien que l'application puisse gérer les fichiers .txt avec la même structure, le CSV est préférable.",
                note3: `Des périodes plus longues fourniront des données plus complètes pour l'analyse. "Depuis le début de l'année" est un bon point de départ.`,
                note4: "N'ouvrez pas et ne réenregistrez pas le fichier CSV dans un tableur comme Excel, car cela pourrait altérer le formatage et causer des erreurs d'analyse. Téléchargez-le et chargez-le directement ici."
            }
        },
        guide: {
            title: "Guide du débutant sur la stratégie 'Wheel'",
            description: "La 'Wheel' est une stratégie de trading d'options conçue pour générer des revenus constants. Elle implique la vente systématique de puts garantis par des liquidités et de calls couverts, dans le but d'acquérir une action que vous appréciez à un prix réduit, puis de la revendre avec un profit."
        }
    },
    dashboard: {
        header: {
            title: "Tableau de Bord du Portefeuille",
            analyzeNewFile: "Analyser un nouveau fichier"
        },
        metrics: {
            totalNAV: { title: "Valeur Liquidative Totale", description: "Valeur totale actuelle du portefeuille." },
            twr: { title: "Taux de Rendement Pondéré dans le Temps", description: "TWR pour la période du relevé.", tooltip: "Mesure la performance du portefeuille dans le temps, en éliminant les effets de distorsion des flux de trésorerie. Reflète votre performance d'investissement personnelle." },
            putLeverage: { title: "Levier sur Puts Courts", description: "Valeur d'Assignation vs. VL / vs. Liquidités", tooltip: "Compare le coût total d'assignation des puts courts à votre Valeur Liquidative (VL) et à vos liquidités. VL : Valeur totale de tous les actifs. Liquidités : Uniquement votre solde de trésorerie. Des valeurs élevées indiquent un risque plus élevé." },
            baseCurrency: { title: "Devise de Base", description: "La devise principale du compte." }
        },
        plSummary: {
            title: "Résumé des Profits & Pertes",
            assetClass: "Classe d'Actifs",
            realizedPL: "P&L Réalisés",
            unrealizedPL: "P&L Latents",
            totalPL: "P&L Total",
            realizedTooltip: "Profit ou perte sur des positions qui ont été clôturées. Ce sont des P&L 'verrouillés'.",
            unrealizedTooltip: "Le profit ou la perte 'sur le papier' actuel des positions encore ouvertes. Cette valeur fluctue avec le marché.",
            stocks: "Actions",
            options: "Options",
            forex: "Forex",
            total: "Total"
        },
        navSankey: {
            title: "Flux de VL",
            nodes: {
                startingNAV: "VL Initiale",
                deposits: "Dépôts",
                m2mGains: "Gains M2M",
                interestFXGains: "Intérêts & Gains FX",
                grossValue: "Valeur Brute",
                endingNAV: "VL Finale",
                withdrawals: "Retraits",
                m2mLosses: "Pertes M2M",
                commissions: "Commissions",
                feesTax: "Frais & Taxes",
                interestPaid: "Intérêts Payés"
            }
        },
        tickerPL: {
            title: "Contribution aux P&L par Ticker",
            tooltip: { totalPL: "P&L Total" }
        },
        monthlyPerformance: {
            title: {
                income: "Suivi des Revenus Mensuels",
                pl: "Suivi des P&L Mensuels"
            },
            buttons: {
                income: "Revenus",
                pl: "P&L"
            },
            legend: {
                optionsPremium: "Primes d'Options",
                optionsPL: "P&L d'Options",
                syepIncome: "Revenus SYEP",
                interest: "Intérêts"
            },
            tooltip: {
                total: "Total"
            }
        },
        fees: {
            title: "Détail des Coûts Mensuels",
            legend: {
                commissions: "Commissions",
                otherFees: "Autres Frais",
                salesTax: "Taxes de Vente",
                paidInterest: "Intérêts Payés"
            },
            tooltip: {
                total: "Coûts Totaux"
            }
        },
        putRisk: {
            title: "Analyse du Risque des Puts Courts",
            cashBalance: { title: "Solde de Liquidités Actuel", description: "Vos liquidités disponibles pour les assignations." },
            likelyRisk: {
                title: "Risque d'Assignation Probable",
                assignmentValue: { title: "Valeur d'Assignation (ITM)", description: "Pour les puts qui sont dans la monnaie ou ont un P&L négatif.", tooltip: "La trésorerie totale requise pour acheter des actions pour tous les puts courts qui sont actuellement dans la monnaie (ITM)." },
                cashShortfall: { title: "Déficit de Liquidités", description: "Fonds nécessaires pour ces assignations probables.", tooltip: "Le montant de liquidités supplémentaires requis si tous les puts 'Probables' (ITM) étaient assignés aujourd'hui. Calculé comme (Valeur d'Assignation - Solde de Liquidités)." }
            },
            unlikelyRisk: {
                title: "Risque d'Assignation Improbable",
                assignmentValue: { title: "Valeur d'Assignation (OTM)", description: "Pour les puts qui sont hors de la monnaie ou ont un P&L positif.", tooltip: "La trésorerie totale requise pour acheter des actions pour tous les puts courts qui sont actuellement hors de la monnaie (OTM)." },
                additionalShortfall: { title: "Déficit Supplémentaire", description: "Fonds supplémentaires nécessaires si ces puts sont également assignés.", tooltip: "Le montant de liquidités supplémentaires requis si tous les puts 'Improbables' (OTM) étaient également assignés, après avoir pris en compte les liquidités utilisées pour les assignations probables." }
            }
        },
        shortOptionsStrategy: {
            title: "Stratégie d'Options Courtes",
            openPositions: {
                title: "Performance des Positions Ouvertes",
                putsTitle: "Puts Courts (Ouverts)",
                callsTitle: "Calls Courts (Ouverts)",
                totalPremium: { title: "Prime Totale", tooltipPuts: "Prime totale encaissée pour toutes les positions de put courtes ouvertes.", tooltipCalls: "Prime totale encaissée pour toutes les positions de call courtes ouvertes." },
                currentValue: { title: "Valeur Actuelle (Coût de Clôture)", tooltipPuts: "Valeur de marché actuelle des options de put courtes ouvertes. Cela représente le coût pour les racheter et clôturer les positions.", tooltipCalls: "Valeur de marché actuelle des options de call courtes ouvertes. Cela représente le coût pour les racheter et clôturer les positions." },
                premiumCapture: { title: "Capture de Prime", tooltip: "Le pourcentage de la prime initiale qui a été 'capturé' comme profit jusqu'à présent. Calculé comme (Prime - Valeur Actuelle) / Prime." },
                returnOnMaxRisk: { title: "Rendement sur Risque Max", tooltip: "Prime totale des puts courts ouverts en pourcentage de leur coût d'assignation potentiel total. Montre le rendement potentiel sur le capital que vous avez à risque." }
            },
            realizedIncome: {
                title: "Revenus Réalisés (Toutes Sources)",
                winRate: { title: "Taux de Réussite Global", description: "{{wins}} gains sur {{total}} options courtes clôturées.", tooltip: "Le pourcentage de toutes les transactions d'options courtes clôturées (puts et calls) qui ont abouti à un profit réalisé." },
                syepIncome: { title: "Revenus SYEP", description: "Du Programme d'Amélioration du Rendement des Actions.", tooltip: "Revenus gagnés en permettant à IBKR de prêter vos actions entièrement libérées." }
            },
            closedPuts: {
                title: "Analyse Détaillée des Puts Courts Clôturés",
                totalPL: { title: "P&L Réalisé Total", description: "Des puts qui ont expiré ou ont été rachetés.", tooltip: "Profit total des options de vente courtes qui ont expiré hors de la monnaie ou ont été clôturées par rachat." },
                contractsClosed: { title: "Contrats Clôturés", description: "Nombre total de contrats de put clôturés.", tooltip: "Le nombre total de contrats de vente courts individuels qui ont expiré sans valeur ou ont été rachetés pour clôturer." },
                avgPL: { title: "P&L Moy. / Contrat", description: "Profit ou perte moyen par contrat clôturé.", tooltip: "Le revenu ou la perte moyen généré par chaque contrat de vente court clôturé." },
                assignmentRate: { title: "Taux d'Assignation", description: "Pourcentage de puts courts qui ont été assignés.", tooltip: "Sur tous les puts courts clôturés, c'est le pourcentage qui a été assigné (c.-à-d. que vous avez dû acheter l'action)." },
                avgAroc: { title: "ROC Annuel Moyen", description: "Rendement annualisé moyen pour les puts clôturés rentables.", tooltip: "Rendement Annualisé sur le Capital. Pour les puts courts rentables, il annualise le rendement en fonction du capital à risque et de la durée de la transaction. Aide à comparer des transactions de durées différentes." }
            }
        },
        allocations: {
            byTickerTitle: "Allocation du Portefeuille par Ticker",
            byTickerTooltip: "Affiche l'allocation par ticker sous-jacent. Remarque : Les actions et les calls sont pondérés par leur valeur de marché, tandis que les puts courts sont pondérés par leur coût d'assignation potentiel (collatéral).",
            byAssetClassTitle: "Allocation par Classe d'Actifs (par Valeur)",
            filters: {
                stocks: "Actions",
                puts: "Options Put",
                calls: "Options Call"
            },
            assetClasses: {
                stocks: "Actions",
                options: "Options"
            }
        },
        openPositions: {
            title: "Positions Ouvertes",
            total: "Total",
            stocks: {
                title: "Actions",
                symbol: "Symbole",
                qty: "Qté",
                currentPrice: "Prix Actuel",
                currentPriceTooltip: "Le dernier prix de clôture disponible pour l'action.",
                costBasis: "Prix de Revient",
                costBasisTooltip: "Le montant total payé pour les actions, y compris les commissions, converti dans votre devise de base.",
                marketValue: "Valeur de Marché",
                marketValueTooltip: "La valeur totale actuelle de la position (Quantité * Prix Actuel).",
                unrealizedPL: "P&L Latents",
                unrealizedPLTooltip: "Le profit ou la perte 'sur le papier' actuel pour cette position."
            },
            puts: {
                title: "Puts",
                symbol: "Symbole",
                qty: "Qté",
                strike: "Strike",
                breakeven: "Seuil de Rentabilité",
                breakevenTooltip: "Le prix de l'action auquel la position atteint le seuil de rentabilité à l'échéance (Prix d'Exercice - Prime Nette par Action).",
                moneyness: "Moneyness",
                moneynessTooltip: "Distance entre le prix actuel de l'action et le prix d'exercice (en %). Positif signifie hors de la monnaie (bon), négatif signifie dans la monnaie (risqué).",
                dte: "JAE",
                dteTooltip: "Jours Avant Échéance. Le nombre de jours calendaires jusqu'à l'expiration de l'option.",
                premium: "Prime",
                premiumTooltip: "Le crédit net reçu pour la vente de cette option, converti dans votre devise de base.",
                unrealizedPL: "P&L Latents",
                assignmentCost: "Coût d'Assignation",
                assignmentCostTooltip: "La trésorerie totale requise pour acheter les actions en cas d'assignation (Prix d'Exercice * Quantité * Multiplicateur).",
                moneynessPriceAvailable: "Basé sur le dernier cours de clôture de {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Le dernier cours de l'action pour {{baseSymbol}} n'est pas disponible car il n'y a pas de position d'action ouverte pour ce ticker."
            },
            calls: {
                title: "Calls",
                symbol: "Symbole",
                qty: "Qté",
                strike: "Strike",
                breakeven: "Seuil de Rentabilité",
                breakevenTooltip: "Le prix de l'action auquel la position atteint le seuil de rentabilité à l'échéance (Prix d'Exercice + Prime Nette par Action).",
                moneyness: "Moneyness",
                moneynessTooltip: "Distance entre le prix actuel de l'action et le prix d'exercice (en %). Positif signifie dans la monnaie (risqué), négatif signifie hors de la monnaie (bon).",
                dte: "JAE",
                dteTooltip: "Jours Avant Échéance. Le nombre de jours calendaires jusqu'à l'expiration de l'option.",
                premium: "Prime",
                premiumTooltip: "Le crédit net reçu pour la vente de cette option, converti dans votre devise de base.",
                unrealizedPL: "P&L Latents",
                moneynessPriceAvailable: "Basé sur le dernier cours de clôture de {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "Le dernier cours de l'action pour {{baseSymbol}} n'est pas disponible car il n'y a pas de position d'action ouverte pour ce ticker."
            }
        },
        closedPositions: {
            title: "Positions Clôturées (P&L Réalisés)",
            assetCategory: "Classe d'Actifs",
            symbol: "Symbole",
            realizedPL: "P&L Réalisés",
            aroc: "ROC Annuel",
            arocTooltip: "Rendement Annualisé sur le Capital. Pour les puts courts rentables, il annualise le rendement en fonction du capital à risque et de la durée de la transaction. Aide à comparer des transactions de durées différentes."
        },
        wheelSummary: {
            title: "Résumé de la Performance de la Stratégie Wheel",
            totalPL: { title: "P&L Total de la Wheel", description: "P&L total réalisé de tous les cycles Wheel terminés.", tooltip: "Somme de tous les profits et pertes de chaque cycle Wheel terminé (Prime de Put + Prime de Call + P&L sur Actions)." },
            totalPremium: { title: "Prime Totale Encaissée", description: "De tous les cycles Wheel terminés et en cours.", tooltip: "Somme de toutes les primes de put et de call encaissées dans chaque cycle Wheel, à la fois terminés et en cours." },
            avgDuration: { title: "Durée Moyenne du Cycle", description: "Durée moyenne d'un cycle Wheel terminé.", value: "{{days}} Jours", tooltip: "Le nombre moyen de jours entre le début d'un cycle (assignation de put) et sa fin (vente de l'action)." },
            annualizedReturn: { title: "Rendement Annualisé Global", description: "Rendement annualisé pondéré par le capital et le temps sur les cycles terminés.", tooltip: "Le rendement annualisé pondéré par le temps et le capital pour tous les cycles terminés. Cette métrique fournit l'image la plus précise de l'efficacité globale de la stratégie." }
        },
        wheel: {
            title: "Analyse des Cycles de la Stratégie Wheel",
            pending: {
                title: "Cycles en Cours",
                headers: {
                    symbol: "Symbole",
                    startDate: "Date de Début",
                    netCostBasis: "Prix de Revient Net",
                    callPremium: "Prime de Call",
                    currentValue: "Valeur Actuelle",
                    unrealizedStockPL: "P&L Latent sur Actions",
                    currentTotalPL: "P&L Total Actuel"
                },
                tooltips: {
                    startDate: "La date à laquelle les actions vous ont été assignées, marquant le début du cycle.",
                    netCostBasis: "Le coût effectif de vos actions après déduction de la prime du put initial (Coût Brut - Prime de Put).",
                    currentTotalPL: "Le P&L latent actuel pour l'ensemble du cycle si vous le fermiez maintenant (P&L Latent sur Actions + Prime Totale de Call)."
                }
            },
            completed: {
                title: "Cycles Terminés",
                headers: {
                    symbol: "Symbole",
                    startDate: "Date de Début",
                    endDate: "Date de Fin",
                    duration: "Durée (Jours)",
                    callPremium: "Prime de Call",
                    stockPL: "P&L sur Actions",
                    totalPL: "P&L Total",
                    returnOnCost: "Rendement sur Coût"
                },
                tooltips: {
                    endDate: "Date de Fin",
                    duration: "Durée (Jours)",
                    totalPL: "Le profit ou la perte final pour l'ensemble du cycle (Prime de Call + P&L sur Actions).",
                    returnOnCost: "Le P&L total du cycle en pourcentage du prix de revient net de l'action assignée."
                }
            },
            details: {
                costBasisTitle: "Prix de Revient du Cycle",
                costBasisPLTitle: "Prix de Revient & P&L du Cycle",
                assignment: "Assignation",
                assignmentText: "{{shares}} actions @ {{price}}",
                grossCostBasis: "Prix de Revient Brut",
                putPremiumApplied: "Prime de Put Appliquée",
                netCostBasis: "Prix de Revient Net",
                sale: "Vente",
                saleText: "{{shares}} actions @ {{price}}",
                totalSaleProceeds: "Produit Total de la Vente",
                stockPLOnNet: "P&L sur Actions (sur coût net)",
                tradeLogTitle: "Journal de Transactions Complet",
                log: {
                    date: "Date",
                    description: "Description",
                    amount: "Montant"
                }
            }
        }
    },
    publicDashboard: {
        title: "Vue Publique de Partage",
        backButton: "Retour à la Vue Privée",
        publicViewButtonTooltip: "Passer en Vue Publique",
        export: "Exporter",
        exporting: "Exportation...",
        exportAsPng: "Exporter en PNG",
        exportAsSvg: "Exporter en SVG",
        reportTitle: "Aperçu de Mon Portefeuille",
        period: "Période",
        generatedBy: "Généré par l'Analyseur de Portefeuille IBKR",
        metrics: {
            winRate: {
                title: "Taux de Réussite",
                description: "De toutes les options courtes clôturées"
            },
            assignmentRate: {
                title: "Taux d'Assignation",
                description: "De tous les puts courts clôturés"
            },
            annualizedReturn: {
                title: "Rendement Annualisé de la Wheel",
                description: "Sur les cycles terminés"
            }
        }
    },
    metricCard: {
        showDetails: "Détails",
        hideDetails: "Masquer"
    },
    pagination: {
        page: "Page {{currentPage}} sur {{totalPages}}",
        prev: "Préc",
        next: "Suiv"
    },
    assetCategories: {
        stocks: "Actions",
        options: "Options",
        forex: "Forex"
    },
    dynamicHeaders: {
        expiryDate: "Date d'Échéance",
        assignmentCost: "Coût d'Assignation",
        symbol: "Symbole",
        daysOpen: "Jours Ouverts",
        premium: "Prime",
        aroc: "ROC Annuel"
    },
    footer: {
        disclaimerTitle: "Avis de non-responsabilité",
        disclaimerText: "Cette application est fournie à titre informatif uniquement. L'application est encore en développement et peut contenir des bugs. Nous ne sommes pas responsables des décisions financières prises sur la base de cette application. Faites toujours vos propres recherches.",
        createdBy: "Créé par",
        version: "Version"
    },
    guide: {
        title: "Vue d'Ensemble : Visualisation du Cycle",
        diagram: {
            footer: "L'animation montre les deux boucles principales de la Wheel. La boucle complète implique l'assignation d'actions et leur vente ultérieure. Des boucles plus courtes se produisent lorsque les options expirent sans valeur, vous permettant simplement d'encaisser la prime et de répéter une étape.",
            nodes: {
                yourCash: "Vos Liquidités",
                startEnd: "Début & Fin",
                sellPut: "1. Vendre Put",
                collectPremium: "Encaisser Prime",
                ownShares: "Posséder 100 Actions",
                fromAssignment: "Par Assignation",
                sellCall: "2. Vendre Call",
                sellShares: "Vendre 100 Actions",
                calledAway: "Actions Cédées"
            },
            legend: {
                title: "Légende Animation",
                cashFlow: "Flux de Trésorerie",
                premiumIncome: "Revenu de Prime",
                stockHolding: "Détention d'Actions",
                assignment: "Assignation"
            },
            stockPrice: "Prix de l'Action",
            pl: "P&L",
            strikePrice: "Prix d'Exercice",
            breakeven: "Seuil de Rentabilité",
            breakevenPutDesc: "(Strike - Prime)",
            breakevenCallDesc: "(Coût - Prime)",
            maxProfit: "Profit Max",
            maxProfitDesc: "(Prime)",
            maxProfitCapped: "(Plafonné)",
            lossArea: "Zone de Perte",
            yourCostBasis: "Votre Prix de Revient"
        },
        step1: {
            title: "Vendre un Put Garanti par des Liquidités",
            description: "La première étape consiste à vendre une option put sur une action que vous souhaitez réellement posséder. Vous choisissez un prix d'exercice inférieur au prix du marché actuel – c'est le prix que vous êtes prêt à payer. En échange de la vente de cette option, vous recevez un revenu instantané, appelé une prime.",
            outcomeA: {
                title: "Résultat A : Succès ! (L'action reste au-dessus du strike)",
                description: "L'option expire sans valeur. Vous conservez 100 % de la prime comme pur profit. Vous pouvez alors répéter cette étape, en vendant un autre put pour générer plus de revenus."
            },
            outcomeB: {
                title: "Résultat B : Assignation (L'action tombe en dessous du strike)",
                description: "Vous êtes assigné et devez acheter 100 actions au prix d'exercice. Mais comme vous avez déjà reçu une prime, votre prix de revient effectif est inférieur au prix d'exercice. Vous possédez maintenant l'action à un prix réduit !"
            }
        },
        step2: {
            title: "Vendre un Call Couvert",
            description: "Vous ne faites cette étape que si vous avez été assigné des actions à l'étape 1. Maintenant que vous possédez 100 actions, vous pouvez vendre une option call contre elles pour générer plus de revenus. Vous choisissez un prix d'exercice supérieur à votre prix de revient.",
            outcomeA: {
                title: "Résultat A : Succès ! (L'action reste en dessous du strike)",
                description: "L'option expire sans valeur. Vous conservez la prime et vos 100 actions. Vous pouvez alors répéter cette étape, en vendant un autre call pour plus de revenus."
            },
            outcomeB: {
                title: "Résultat B : Cession (L'action monte au-dessus du strike)",
                description: "Vos 100 actions sont vendues au prix d'exercice. Vous conservez la prime du call PLUS le profit de la vente des actions au-dessus de votre prix de revient. La roue est terminée, et vous êtes de retour en liquidités, prêt à recommencer."
            }
        },
        benefits: {
            title: "Avantages Clés",
            benefit1: { title: "Génère des Revenus", description: "Encaissez régulièrement des primes en vendant des puts et des calls." },
            benefit2: { title: "Acheter des Actions Moins Cher", description: "Acquérez des actions que vous aimez à un prix effectif plus bas." },
            benefit3: { title: "Définit Vos Prix", description: "Vous fixez le prix auquel vous êtes prêt à acheter et (potentiellement) à vendre." }
        },
        risks: {
            title: "Risques Importants",
            risk1: { title: "Risque de Détention", description: "Le principal risque est d'être assigné à une action dont le prix chute ensuite de manière significative. Vous pourriez détenir une action en perte pendant longtemps." },
            risk2: { title: "Gains Plafonnés", description: "Lorsque vous vendez un call couvert, vous plafonnez votre potentiel de hausse sur l'action." },
            risk3: { title: "Patience Requise", description: "N'utilisez jamais la stratégie Wheel sur une action que vous n'êtes pas heureux de posséder à long terme." }
        },
        copilot: {
            title: "Cette App est Votre Copilote pour la Stratégie Wheel",
            description: "Le suivi manuel des transactions de la Wheel peut être complexe. Cet analyseur fait le gros du travail pour vous. Il identifie automatiquement vos cycles Wheel terminés et en cours, calculant votre P&L exact, les primes totales, la durée et les rendements annualisés pour chacun. Arrêtez de deviner et commencez à voir exactement comment votre stratégie performe."
        }
    }
};
