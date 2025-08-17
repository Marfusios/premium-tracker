
export const es = {
    app: {
        title: "Analizador de Cartera IBKR",
        loading: "Analizando su extracto...",
        tryAgain: "Intentar de nuevo",
        errors: {
            title: "Ocurrió un error",
            fileRead: "No se pudo leer el archivo.",
            criticalData: "No se pudieron analizar datos críticos del archivo. Por favor, asegúrese de que es un extracto de actividad válido de IBKR.",
            unknownParse: "Ocurrió un error de análisis desconocido."
        }
    },
    fileUpload: {
        title: "Analizador de Cartera",
        subtitle: "Suba su extracto de actividad de IBKR para empezar.",
        description: "Convierta su extracto de actividad de Interactive Brokers en una potente herramienta para la toma de decisiones. Obtenga una visión clara de su rendimiento, especializándose en la venta de opciones y la estrategia 'Wheel'. Nuestro panel le ayuda a visualizar sus ganancias, gestionar el riesgo de la cartera y operar con margen con confianza.",
        dropzone: {
            dragAndDrop: "Arrastre y suelte",
            or: "o",
            clickToUpload: "haga clic para subir",
            yourCsvFile: "su archivo CSV",
            acceptedFormats: "(se aceptan formatos .csv o .txt)"
        },
        privacyNote: "Nota: Todo el procesamiento se realiza en su navegador. Sus datos nunca se suben a ningún servidor.",
        instructions: {
            title: "Cómo obtener su extracto de actividad",
            step1_part1: 'Inicie sesión en Interactive Brokers y vaya a la pestaña ',
            step1_strong: '"Rendimiento e Informes"',
            step1_part2: '.',
            step2_part1: 'En "Extractos", busque ',
            step2_strong1: '"Actividad"',
            step2_part2: ' y haga clic en el botón ',
            step2_strong2: '"Ejecutar"',
            step2_part3: ' (el icono de la flecha).',
            caption1: "Pasos 1 y 2: Vaya a los Extractos de Actividad.",
            step3_part1: 'En la ventana emergente, elija el ',
            step3_strong: 'Período',
            step3_part2: ' deseado (p. ej., "Mensual", "Desde principio de año").',
            step4_part1: 'Busque la opción de formato ',
            step4_strong1: 'CSV',
            step4_part2: ' y haga clic en el botón correspondiente de ',
            step4_strong2: '"Descargar"',
            step4_part3: ' para guardar el archivo.',
            caption2: "Pasos 3 y 4: Seleccione el período y descargue el CSV.",
            notes: {
                title: "Notas Importantes",
                note1: "Asegúrese de que está descargando el extracto de Actividad, ya que otros tipos de extractos pueden no ser compatibles.",
                note2: "El formato recomendado es CSV. Aunque la aplicación puede manejar archivos .txt con la misma estructura, se prefiere CSV.",
                note3: `Períodos más largos proporcionarán datos más completos para el análisis. "Desde principio de año" es un buen punto de partida.`,
                note4: "No abra y vuelva a guardar el archivo CSV en software de hojas de cálculo como Excel, ya que puede alterar el formato y causar errores de análisis. Descárguelo y súbalo directamente aquí."
            }
        },
        guide: {
            title: "Guía para principiantes de la Estrategia 'Wheel'",
            description: "'The Wheel' es una estrategia de trading de opciones diseñada para generar ingresos consistentes. Implica la venta sistemática de puts garantizadas con efectivo y calls cubiertas, con el objetivo de adquirir una acción que le guste con un descuento y luego venderla con una ganancia."
        }
    },
    dashboard: {
        header: {
            title: "Panel de Cartera",
            analyzeNewFile: "Analizar nuevo archivo"
        },
        metrics: {
            totalNAV: { title: "Valor Liquidativo Total", description: "Valor total actual de la cartera." },
            twr: { title: "Rentabilidad Ponderada en el Tiempo", description: "TWR para el período del extracto.", tooltip: "Mide el rendimiento de la cartera a lo largo del tiempo, eliminando los efectos distorsionadores de los flujos de efectivo. Refleja su rendimiento de inversión personal." },
            putLeverage: { title: "Apalancamiento de Puts Cortas", description: "Valor de Asignación vs. NAV / vs. Efectivo", tooltip: "Compara el costo total de asignación de las puts cortas con su NAV y su efectivo. NAV: Valor total de todos los activos. Efectivo: Solo su saldo de efectivo. Valores altos indican un mayor riesgo." },
            baseCurrency: { title: "Moneda Base", description: "La moneda principal de la cuenta." }
        },
        plSummary: {
            title: "Resumen de Pérdidas y Ganancias",
            assetClass: "Clase de Activo",
            realizedPL: "P/G Realizadas",
            unrealizedPL: "P/G No Realizadas",
            totalPL: "P/G Totales",
            realizedTooltip: "Ganancia o pérdida de posiciones que han sido cerradas. Estas son P/G 'fijadas'.",
            unrealizedTooltip: "La ganancia o pérdida actual 'en papel' de las posiciones que todavía están abiertas. Este valor fluctúa con el mercado.",
            stocks: "Acciones",
            options: "Opciones",
            forex: "Forex",
            total: "Total"
        },
        navSankey: {
            title: "Flujo de NAV",
            nodes: {
                startingNAV: "NAV Inicial",
                deposits: "Depósitos",
                m2mGains: "Ganancias M2M",
                interestFXGains: "Intereses y Ganancias FX",
                grossValue: "Valor Bruto",
                endingNAV: "NAV Final",
                withdrawals: "Retiros",
                m2mLosses: "Pérdidas M2M",
                commissions: "Comisiones",
                feesTax: "Tasas e Impuestos",
                interestPaid: "Intereses Pagados"
            }
        },
        tickerPL: {
            title: "Contribución a P/G por Ticker",
            tooltip: { totalPL: "P/G Total" }
        },
        monthlyPerformance: {
            title: {
                income: "Seguimiento de Ingresos Mensuales",
                pl: "Seguimiento de P/G Mensuales"
            },
            buttons: {
                income: "Ingresos",
                pl: "P/G"
            },
            legend: {
                optionsPremium: "Prima de Opciones",
                optionsPL: "P/G de Opciones",
                syepIncome: "Ingresos SYEP",
                interest: "Intereses"
            },
            tooltip: {
                total: "Total"
            }
        },
        fees: {
            title: "Desglose de Costos Mensuales",
            legend: {
                commissions: "Comisiones",
                otherFees: "Otras Tasas",
                salesTax: "Impuesto sobre Ventas",
                paidInterest: "Intereses Pagados"
            },
            tooltip: {
                total: "Costos Totales"
            }
        },
        putRisk: {
            title: "Análisis de Riesgo de Puts Cortas",
            cashBalance: { title: "Saldo de Efectivo Actual", description: "Su efectivo disponible para asignaciones." },
            likelyRisk: {
                title: "Riesgo de Asignación Probable",
                assignmentValue: { title: "Valor de Asignación (ITM)", description: "Para puts que están In-The-Money o tienen P/G negativas.", tooltip: "El efectivo total requerido para comprar acciones para todas las puts cortas que están actualmente In-The-Money (ITM)." },
                cashShortfall: { title: "Déficit de Efectivo", description: "Fondos necesarios para estas asignaciones probables.", tooltip: "La cantidad de efectivo adicional requerida si todas las puts 'Probables' (ITM) fueran asignadas hoy. Calculado como (Valor de Asignación - Saldo de Efectivo)." }
            },
            unlikelyRisk: {
                title: "Riesgo de Asignación Improbable",
                assignmentValue: { title: "Valor de Asignación (OTM)", description: "Para puts que están Out-of-The-Money o tienen P/G positivas.", tooltip: "El efectivo total requerido para comprar acciones para todas las puts cortas que están actualmente Out-of-The-Money (OTM)." },
                additionalShortfall: { title: "Déficit Adicional", description: "Más fondos necesarios si estas puts también son asignadas.", tooltip: "La cantidad de efectivo adicional requerida si todas las puts 'Improbables' (OTM) también fueran asignadas, después de contabilizar el efectivo utilizado en las asignaciones probables." }
            }
        },
        shortOptionsStrategy: {
            title: "Estrategia de Opciones Cortas",
            openPositions: {
                title: "Rendimiento de Posiciones Abiertas",
                putsTitle: "Puts Cortas (Abiertas)",
                callsTitle: "Calls Cortas (Abiertas)",
                totalPremium: { title: "Prima Total", tooltipPuts: "Prima total recaudada para todas las posiciones de put cortas abiertas.", tooltipCalls: "Prima total recaudada para todas las posiciones de call cortas abiertas." },
                currentValue: { title: "Valor Actual (Costo de Cierre)", tooltipPuts: "Valor de mercado actual de las opciones de put cortas abiertas. Representa el costo de recomprarlas y cerrar las posiciones.", tooltipCalls: "Valor de mercado actual de las opciones de call cortas abiertas. Representa el costo de recomprarlas y cerrar las posiciones." },
                premiumCapture: { title: "Captura de Prima", tooltip: "El porcentaje de la prima inicial que ha sido 'capturado' como ganancia hasta ahora. Calculado como (Prima - Valor Actual) / Prima." },
                returnOnMaxRisk: { title: "Retorno sobre Riesgo Máximo", tooltip: "Prima total de las puts cortas abiertas como porcentaje de su costo total de asignación potencial. Muestra el retorno potencial sobre el capital que tiene en riesgo." }
            },
            realizedIncome: {
                title: "Ingresos Realizados (Todas las Fuentes)",
                winRate: { title: "Tasa de Aciertos General", description: "{{wins}} aciertos de {{total}} opciones cortas cerradas.", tooltip: "El porcentaje de todas las operaciones de opciones cortas cerradas (puts y calls) que resultaron en una ganancia realizada." },
                syepIncome: { title: "Ingresos SYEP", description: "Del Programa de Mejora del Rendimiento de Acciones.", tooltip: "Ingresos obtenidos al permitir que IBKR preste sus acciones totalmente pagadas." }
            },
            closedPuts: {
                title: "Análisis Profundo de Puts Cortas Cerradas",
                totalPL: { title: "P/G Realizadas Totales", description: "De puts que vencieron o fueron recomprados.", tooltip: "Ganancia total de opciones put cortas que vencieron fuera del dinero o fueron cerradas mediante recompra." },
                contractsClosed: { title: "Contratos Cerrados", description: "Número total de contratos de put cerrados.", tooltip: "El recuento total de contratos individuales de put cortos que vencieron sin valor o fueron recomprados para cerrar." },
                avgPL: { title: "P/G Promedio / Contrato", description: "Ganancia o pérdida promedio por contrato cerrado.", tooltip: "El ingreso o pérdida promedio generado por cada contrato de put corto cerrado." },
                assignmentRate: { title: "Tasa de Asignación", description: "Porcentaje de puts cortas que fueron asignadas.", tooltip: "De todas las puts cortas cerradas, este es el porcentaje que fue asignado (es decir, tuvo que comprar las acciones)." },
                avgAroc: { title: "AROC Promedio Anualizado", description: "Retorno anualizado promedio para puts cerradas rentables.", tooltip: "Retorno Anualizado sobre el Capital. Para puts cortas rentables, anualiza el retorno basado en el capital en riesgo y la duración de la operación. Ayuda a comparar operaciones de diferentes duraciones." }
            }
        },
        allocations: {
            byTickerTitle: "Asignación de Cartera por Ticker",
            byTickerTooltip: "Muestra la asignación por ticker subyacente. Nota: Las acciones y las calls se ponderan por su valor de mercado, mientras que las puts cortas se ponderan por su costo de asignación potencial (colateral).",
            byAssetClassTitle: "Asignación por Clase de Activo (por Valor)",
            filters: {
                stocks: "Acciones",
                puts: "Opciones Put",
                calls: "Opciones Call"
            },
            assetClasses: {
                stocks: "Acciones",
                options: "Opciones"
            }
        },
        openPositions: {
            title: "Posiciones Abiertas",
            total: "Total",
            stocks: {
                title: "Acciones",
                symbol: "Símbolo",
                qty: "Cant.",
                currentPrice: "Precio Actual",
                currentPriceTooltip: "El último precio de cierre disponible para la acción.",
                costBasis: "Base de Costo",
                costBasisTooltip: "La cantidad total pagada por las acciones, incluidas las comisiones, convertida a su moneda base.",
                marketValue: "Valor de Mercado",
                marketValueTooltip: "El valor total actual de la posición (Cantidad * Precio Actual).",
                unrealizedPL: "P/G No Realizadas",
                unrealizedPLTooltip: "La ganancia o pérdida actual 'en papel' para esta posición."
            },
            puts: {
                title: "Puts",
                symbol: "Símbolo",
                qty: "Cant.",
                strike: "Strike",
                breakeven: "Punto de Equilibrio",
                breakevenTooltip: "El precio de la acción en el que la posición alcanza el punto de equilibrio en el vencimiento (Precio de Strike - Prima Neta por Acción).",
                moneyness: "Moneyness",
                moneynessTooltip: "Qué tan lejos está el precio actual de la acción del precio de strike (en %). Positivo es Out-of-the-Money (bueno), negativo es In-the-Money (riesgoso).",
                dte: "DTE",
                dteTooltip: "Días hasta el vencimiento. El número de días calendario hasta que la opción expire.",
                premium: "Prima",
                premiumTooltip: "El crédito neto recibido por vender esta opción, convertido a su moneda base.",
                unrealizedPL: "P/G No Realizadas",
                assignmentCost: "Costo de Asignación",
                assignmentCostTooltip: "El efectivo total requerido para comprar las acciones si es asignado (Precio de Strike * Cantidad * Multiplicador).",
                moneynessPriceAvailable: "Basado en el último precio de cierre de {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "El último precio de la acción para {{baseSymbol}} no está disponible porque no hay una posición de acciones abierta para este ticker."
            },
            calls: {
                title: "Calls",
                symbol: "Símbolo",
                qty: "Cant.",
                strike: "Strike",
                breakeven: "Punto de Equilibrio",
                breakevenTooltip: "El precio de la acción en el que la posición alcanza el punto de equilibrio en el vencimiento (Precio de Strike + Prima Neta por Acción).",
                moneyness: "Moneyness",
                moneynessTooltip: "Qué tan lejos está el precio actual de la acción del precio de strike (en %). Positivo es In-the-Money (riesgoso), negativo es Out-of-the-Money (bueno).",
                dte: "DTE",
                dteTooltip: "Días hasta el vencimiento. El número de días calendario hasta que la opción expire.",
                premium: "Prima",
                premiumTooltip: "El crédito neto recibido por vender esta opción, convertido a su moneda base.",
                unrealizedPL: "P/G No Realizadas",
                moneynessPriceAvailable: "Basado en el último precio de cierre de {{baseSymbol}}: {{price}}",
                moneynessPriceUnavailable: "El último precio de la acción para {{baseSymbol}} no está disponible porque no hay una posición de acciones abierta para este ticker."
            }
        },
        closedPositions: {
            title: "Posiciones Cerradas (P/G Realizadas)",
            assetCategory: "Clase de Activo",
            symbol: "Símbolo",
            realizedPL: "P/G Realizadas",
            aroc: "AROC",
            arocTooltip: "Retorno Anualizado sobre el Capital. Para puts cortas rentables, anualiza el retorno basado en el capital en riesgo y la duración de la operación. Ayuda a comparar operaciones de diferentes duraciones."
        },
        wheelSummary: {
            title: "Resumen de Rendimiento de la Estrategia Wheel",
            totalPL: { title: "P/G Total de Wheel", description: "P/G total realizada de todos los ciclos Wheel completados.", tooltip: "Suma de todas las ganancias y pérdidas de cada ciclo Wheel completado (Prima de Put + Prima de Call + P/G de Acciones)." },
            totalPremium: { title: "Prima Total Recaudada", description: "De todos los ciclos Wheel completados y pendientes.", tooltip: "Suma de todas las primas de put y call recaudadas en cada ciclo Wheel, tanto completados como en curso." },
            avgDuration: { title: "Duración Promedio del Ciclo", description: "Duración promedio de un ciclo Wheel completado.", value: "{{days}} Días", tooltip: "El número promedio de días desde el inicio de un ciclo (asignación de put) hasta su fin (venta de acciones)." },
            annualizedReturn: { title: "Retorno Anualizado General", description: "Retorno anualizado ponderado por capital y tiempo en ciclos completados.", tooltip: "El retorno anualizado ponderado por tiempo y capital para todos los ciclos completados. Esta métrica proporciona la imagen más precisa de la eficiencia general de la estrategia." }
        },
        wheel: {
            title: "Análisis de Ciclos de la Estrategia Wheel",
            pending: {
                title: "Ciclos Pendientes",
                headers: {
                    symbol: "Símbolo",
                    startDate: "Fecha de Inicio",
                    netCostBasis: "Base de Costo Neta",
                    callPremium: "Prima de Call",
                    currentValue: "Valor Actual",
                    unrealizedStockPL: "P/G No Real. de Acciones",
                    currentTotalPL: "P/G Total Actual"
                },
                tooltips: {
                    startDate: "La fecha en que se le asignaron las acciones, marcando el inicio del ciclo.",
                    netCostBasis: "El costo efectivo de sus acciones después de restar la prima de la put inicial (Costo Bruto - Prima de Put).",
                    currentTotalPL: "Las P/G no realizadas actuales para todo el ciclo si lo cerrara ahora (P/G No Real. de Acciones + Prima Total de Call)."
                }
            },
            completed: {
                title: "Ciclos Completados",
                headers: {
                    symbol: "Símbolo",
                    startDate: "Fecha de Inicio",
                    endDate: "Fecha de Fin",
                    duration: "Duración (Días)",
                    callPremium: "Prima de Call",
                    stockPL: "P/G de Acciones",
                    totalPL: "P/G Total",
                    returnOnCost: "Retorno sobre Costo"
                },
                tooltips: {
                    endDate: "Fecha de Fin",
                    duration: "Duración (Días)",
                    totalPL: "La ganancia o pérdida final para todo el ciclo (Prima de Call + P/G de Acciones).",
                    returnOnCost: "Las P/G totales del ciclo como un porcentaje de la base de costo neta de la acción asignada."
                }
            },
            details: {
                costBasisTitle: "Base de Costo del Ciclo",
                costBasisPLTitle: "Base de Costo y P/G del Ciclo",
                assignment: "Asignación",
                assignmentText: "{{shares}} acciones @ {{price}}",
                grossCostBasis: "Base de Costo Bruta",
                putPremiumApplied: "Prima de Put Aplicada",
                netCostBasis: "Base de Costo Neta",
                sale: "Venta",
                saleText: "{{shares}} acciones @ {{price}}",
                totalSaleProceeds: "Ingresos Totales de Venta",
                stockPLOnNet: "P/G de Acciones (sobre Costo Neto)",
                tradeLogTitle: "Registro Completo de Operaciones",
                log: {
                    date: "Fecha",
                    description: "Descripción",
                    amount: "Monto"
                }
            }
        }
    },
    publicDashboard: {
        title: "Vista Pública para Compartir",
        backButton: "Volver a Vista Privada",
        publicViewButtonTooltip: "Cambiar a Vista Pública",
        export: "Exportar",
        exporting: "Exportando...",
        exportAsPng: "Exportar como PNG",
        exportAsSvg: "Exportar como SVG",
        reportTitle: "Instantánea de Mi Cartera",
        period: "Período",
        generatedBy: "Generado por Analizador de Cartera IBKR",
        metrics: {
            winRate: {
                title: "Tasa de Aciertos",
                description: "De todas las opciones cortas cerradas"
            },
            assignmentRate: {
                title: "Tasa de Asignación",
                description: "De todas las puts cortas cerradas"
            },
            annualizedReturn: {
                title: "Retorno Anualizado de Wheel",
                description: "En ciclos completados"
            }
        }
    },
    metricCard: {
        showDetails: "Detalles",
        hideDetails: "Ocultar Detalles"
    },
    pagination: {
        page: "Página {{currentPage}} de {{totalPages}}",
        prev: "Ant",
        next: "Sig"
    },
    assetCategories: {
        stocks: "Acciones",
        options: "Opciones",
        forex: "Forex"
    },
    dynamicHeaders: {
        expiryDate: "Fecha de Vencimiento",
        assignmentCost: "Costo de Asignación",
        symbol: "Símbolo",
        daysOpen: "Días Abierta",
        premium: "Prima",
        aroc: "AROC"
    },
    footer: {
        disclaimerTitle: "Descargo de responsabilidad",
        disclaimerText: "Esta aplicación se proporciona únicamente con fines informativos. La aplicación todavía está en desarrollo y puede contener errores. No nos hacemos responsables de ninguna decisión financiera tomada en base a esta aplicación. Siempre haga su propia investigación.",
        createdBy: "Creado por",
        version: "Versión"
    },
    guide: {
        title: "La Visión General: Visualizando el Ciclo",
        diagram: {
            footer: "La animación muestra los dos bucles principales de la estrategia Wheel. El bucle completo implica ser asignado acciones y luego venderlas. Los bucles más cortos ocurren cuando las opciones vencen sin valor, permitiéndole simplemente cobrar la prima y repetir un paso.",
            nodes: {
                yourCash: "Su Dinero",
                startEnd: "Inicio y Fin",
                sellPut: "1. Vender Put",
                collectPremium: "Cobrar Prima",
                ownShares: "Poseer 100 Acciones",
                fromAssignment: "Por Asignación",
                sellCall: "2. Vender Call",
                sellShares: "Vender 100 Acciones",
                calledAway: "Acciones Asignadas"
            },
            legend: {
                title: "Leyenda de Animación",
                cashFlow: "Flujo de Dinero",
                premiumIncome: "Ingreso por Prima",
                stockHolding: "Tenencia de Acciones",
                assignment: "Asignación"
            },
            stockPrice: "Precio de Acción",
            pl: "P/G",
            strikePrice: "Precio de Ejercicio",
            breakeven: "Punto de Equilibrio",
            breakevenPutDesc: "(Strike - Prima)",
            breakevenCallDesc: "(Costo - Prima)",
            maxProfit: "Ganancia Máx.",
            maxProfitDesc: "(Prima)",
            maxProfitCapped: "(Limitada)",
            lossArea: "Zona de Pérdida",
            yourCostBasis: "Su Base de Costo"
        },
        step1: {
            title: "Vender una Put Garantizada con Efectivo",
            description: "El primer paso es vender una opción put sobre una acción que realmente desea poseer. Elige un precio de ejercicio por debajo del precio de mercado actual; este es el precio que está dispuesto a pagar. A cambio de vender esta opción, recibe un ingreso instantáneo, llamado prima.",
            outcomeA: {
                title: "Resultado A: ¡Éxito! (La acción se mantiene por encima del strike)",
                description: "La opción vence sin valor. Se queda con el 100% de la prima como ganancia pura. Luego puede repetir este paso, vendiendo otra put para generar más ingresos."
            },
            outcomeB: {
                title: "Resultado B: Asignación (La acción cae por debajo del strike)",
                description: "Se le asigna y debe comprar 100 acciones al precio de ejercicio. Pero como ya recibió una prima, su base de costo efectiva es más baja que el precio de ejercicio. ¡Ahora posee la acción con un descuento!"
            }
        },
        step2: {
            title: "Vender una Call Cubierta",
            description: "Solo realiza este paso si se le asignaron acciones del Paso 1. Ahora que posee 100 acciones, puede vender una opción call contra ellas para generar más ingresos. Elige un precio de ejercicio por encima de su base de costo.",
            outcomeA: {
                title: "Resultado A: ¡Éxito! (La acción se mantiene por debajo del strike)",
                description: "La opción vence sin valor. Se queda con la prima y sus 100 acciones. Luego puede repetir este paso, vendiendo otra call para obtener más ingresos."
            },
            outcomeB: {
                title: "Resultado B: Asignación (La acción sube por encima del strike)",
                description: "Sus 100 acciones se venden al precio de ejercicio. Se queda con la prima de la call MÁS la ganancia por vender las acciones por encima de su base de costo. La rueda se completa, y vuelve a tener efectivo, listo para empezar de nuevo."
            }
        },
        benefits: {
            title: "Beneficios Clave",
            benefit1: { title: "Genera Ingresos", description: "Cobre primas consistentemente por la venta de puts y calls." },
            benefit2: { title: "Compre Acciones Más Baratas", description: "Adquiera acciones que le gusten a un precio efectivo más bajo." },
            benefit3: { title: "Define Sus Precios", description: "Usted establece el precio al que está dispuesto a comprar y (potencialmente) vender." }
        },
        risks: {
            title: "Riesgos Importantes",
            risk1: { title: "Riesgo de Tenencia", description: "El riesgo principal es que le asignen una acción cuyo precio luego cae significativamente. Podría mantener una acción perdedora durante mucho tiempo." },
            risk2: { title: "Ganancias Limitadas", description: "Cuando vende una call cubierta, limita su potencial de ganancia al alza en la acción." },
            risk3: { title: "Se Requiere Paciencia", description: "Nunca use la estrategia Wheel en una acción que no esté contento de poseer a largo plazo." }
        },
        copilot: {
            title: "Esta App es Su Copiloto de la Estrategia Wheel",
            description: "El seguimiento manual de las operaciones de la Wheel puede ser complejo. Este analizador hace el trabajo pesado por usted. Identifica automáticamente sus ciclos Wheel completados y pendientes, calculando su P/L exacto, primas totales, duración y retornos anualizados para cada uno. Deje de adivinar y comience a ver exactamente cómo se está desempeñando su estrategia."
        }
    }
};
