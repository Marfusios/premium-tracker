

import React, { useMemo } from 'react';
import MetricCard from '../MetricCard';
import { InfoIcon, GiftIcon, TrendingUpIcon, CheckCircleIcon, RepeatIcon, MoneyIcon } from '../../constants';
import { ArocAnalysis, OptionsStrategyMetrics, ShortPutIncomeSummary } from '../../types';
import Tooltip from '../Tooltip';
import { useLocalization } from '../../context/LocalizationContext';

interface PerformanceData {
    premium: number;
    currentValue: number;
    capture: number;
}

interface ShortOptionsPerformanceProps {
    shortPutPerformance: PerformanceData;
    shortCallPerformance: PerformanceData;
    returnOnMaxRisk: number;
    syepIncome?: number;
    arocAnalysis: ArocAnalysis;
    optionsStrategyMetrics: OptionsStrategyMetrics;
    shortPutIncomeSummary: ShortPutIncomeSummary;
    formatInSelectedCurrency: (value: number) => string;
}

const ShortOptionsPerformance: React.FC<ShortOptionsPerformanceProps> = ({
    shortPutPerformance,
    shortCallPerformance,
    returnOnMaxRisk,
    syepIncome,
    arocAnalysis,
    optionsStrategyMetrics,
    shortPutIncomeSummary,
    formatInSelectedCurrency
}) => {
    const { t, locale } = useLocalization();
    
    const arocDetails = useMemo(() => {
        if (!arocAnalysis || arocAnalysis.trades.length === 0) return undefined;
    
        const sortedTrades = [...arocAnalysis.trades].sort((a, b) => b.aroc - a.aroc);
        const headers = ['symbol', 'daysOpen', 'premium', 'aroc'];
        
        return {
            headers: headers,
            rows: sortedTrades.map(trade => ({
                symbol: trade.symbol,
                daysOpen: trade.daysOpen,
                premium: formatInSelectedCurrency(trade.premiumCollected),
                aroc: trade.aroc.toLocaleString(locale, { style: 'percent', minimumFractionDigits: 2 })
            }))
        };
    }, [arocAnalysis, formatInSelectedCurrency, locale]);

    const hasSyep = syepIncome !== undefined && syepIncome > 0;
    const hasAroc = arocAnalysis && arocAnalysis.trades.length > 0;

    return (
    <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">{t('dashboard.shortOptionsStrategy.title')}</h2>

        {/* Section 1: Open Positions */}
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-brand-accent">{t('dashboard.shortOptionsStrategy.openPositions.title')}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                
                {/* Left Side: Puts */}
                <div className="bg-brand-card/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-center">{t('dashboard.shortOptionsStrategy.openPositions.putsTitle')}</h4>
                    <div className="space-y-3">
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.totalPremium.title')} value={formatInSelectedCurrency(shortPutPerformance.premium)} icon={<MoneyIcon />} tooltip={t('dashboard.shortOptionsStrategy.openPositions.totalPremium.tooltipPuts')} />
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.currentValue.title')} value={formatInSelectedCurrency(shortPutPerformance.currentValue)} icon={<InfoIcon />} tooltip={t('dashboard.shortOptionsStrategy.openPositions.currentValue.tooltipPuts')} />
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.premiumCapture.title')} value={`${shortPutPerformance.capture.toLocaleString(locale, {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`} icon={<CheckCircleIcon />} isPositive={shortPutPerformance.capture > 0} tooltip={t('dashboard.shortOptionsStrategy.openPositions.premiumCapture.tooltip')} />
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.returnOnMaxRisk.title')} value={`${returnOnMaxRisk.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`} icon={<TrendingUpIcon />} tooltip={t('dashboard.shortOptionsStrategy.openPositions.returnOnMaxRisk.tooltip')} />
                    </div>
                </div>
                
                {/* Right Side: Calls */}
                <div className="bg-brand-card/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-center">{t('dashboard.shortOptionsStrategy.openPositions.callsTitle')}</h4>
                     <div className="space-y-3">
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.totalPremium.title')} value={formatInSelectedCurrency(shortCallPerformance.premium)} icon={<MoneyIcon />} tooltip={t('dashboard.shortOptionsStrategy.openPositions.totalPremium.tooltipCalls')} />
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.currentValue.title')} value={formatInSelectedCurrency(shortCallPerformance.currentValue)} icon={<InfoIcon />} tooltip={t('dashboard.shortOptionsStrategy.openPositions.currentValue.tooltipCalls')} />
                        <MetricCard title={t('dashboard.shortOptionsStrategy.openPositions.premiumCapture.title')} value={`${shortCallPerformance.capture.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`} icon={<CheckCircleIcon />} isPositive={shortCallPerformance.capture > 0} tooltip={t('dashboard.shortOptionsStrategy.openPositions.premiumCapture.tooltip')} />
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-brand-card my-8"></div>

        {/* Section 2: Realized Income */}
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-brand-accent">{t('dashboard.shortOptionsStrategy.realizedIncome.title')}</h3>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${hasSyep ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-6`}>
                 <MetricCard
                    title={t('dashboard.shortOptionsStrategy.realizedIncome.winRate.title')}
                    value={`${(optionsStrategyMetrics.winRate * 100).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`}
                    icon={<CheckCircleIcon />}
                    isPositive={optionsStrategyMetrics.winRate >= 0.5}
                    description={t('dashboard.shortOptionsStrategy.realizedIncome.winRate.description', { wins: optionsStrategyMetrics.wins, total: optionsStrategyMetrics.totalClosed })}
                    tooltip={t('dashboard.shortOptionsStrategy.realizedIncome.winRate.tooltip')}
                />
                {hasSyep && (
                    <MetricCard
                        title={t('dashboard.shortOptionsStrategy.realizedIncome.syepIncome.title')}
                        value={formatInSelectedCurrency(syepIncome)}
                        icon={<GiftIcon />}
                        description={t('dashboard.shortOptionsStrategy.realizedIncome.syepIncome.description')}
                        tooltip={t('dashboard.shortOptionsStrategy.realizedIncome.syepIncome.tooltip')}
                    />
                )}
            </div>
        </div>
        
        {shortPutIncomeSummary.hasData && (
        <>
            <div className="border-t border-brand-card my-8"></div>

            {/* Section 3: Closed Puts Deep Dive */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-brand-accent">{t('dashboard.shortOptionsStrategy.closedPuts.title')}</h3>
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${hasAroc ? 'xl:grid-cols-5' : 'xl:grid-cols-4'} gap-6`}>
                     <MetricCard
                        title={t('dashboard.shortOptionsStrategy.closedPuts.totalPL.title')}
                        value={formatInSelectedCurrency(shortPutIncomeSummary.totalRealizedPL)}
                        icon={<MoneyIcon />}
                        isPositive={shortPutIncomeSummary.totalRealizedPL >= 0}
                        description={t('dashboard.shortOptionsStrategy.closedPuts.totalPL.description')}
                        tooltip={t('dashboard.shortOptionsStrategy.closedPuts.totalPL.tooltip')}
                    />
                    <MetricCard
                        title={t('dashboard.shortOptionsStrategy.closedPuts.contractsClosed.title')}
                        value={shortPutIncomeSummary.numberOfContracts.toLocaleString(locale)}
                        icon={<CheckCircleIcon />}
                        description={t('dashboard.shortOptionsStrategy.closedPuts.contractsClosed.description')}
                        tooltip={t('dashboard.shortOptionsStrategy.closedPuts.contractsClosed.tooltip')}
                    />
                    <MetricCard
                        title={t('dashboard.shortOptionsStrategy.closedPuts.avgPL.title')}
                        value={formatInSelectedCurrency(shortPutIncomeSummary.averagePLPerContract)}
                        icon={<InfoIcon />}
                        isPositive={shortPutIncomeSummary.averagePLPerContract >= 0}
                        description={t('dashboard.shortOptionsStrategy.closedPuts.avgPL.description')}
                        tooltip={t('dashboard.shortOptionsStrategy.closedPuts.avgPL.tooltip')}
                    />
                    <MetricCard
                        title={t('dashboard.shortOptionsStrategy.closedPuts.assignmentRate.title')}
                        value={`${(optionsStrategyMetrics.assignmentRate * 100).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`}
                        icon={<RepeatIcon />}
                        description={t('dashboard.shortOptionsStrategy.closedPuts.assignmentRate.description')}
                        tooltip={t('dashboard.shortOptionsStrategy.closedPuts.assignmentRate.tooltip')}
                    />
                    {hasAroc && (
                        <MetricCard
                            title={t('dashboard.shortOptionsStrategy.closedPuts.avgAroc.title')}
                            value={`${arocAnalysis.averageAroc.toLocaleString(locale, { style: 'percent', minimumFractionDigits: 2 })}`}
                            icon={<TrendingUpIcon />}
                            isPositive={arocAnalysis.averageAroc >= 0}
                            description={t('dashboard.shortOptionsStrategy.closedPuts.avgAroc.description')}
                            details={arocDetails}
                            tooltip={t('dashboard.shortOptionsStrategy.closedPuts.avgAroc.tooltip')}
                        />
                    )}
                </div>
            </div>
        </>
        )}
    </div>
);
}
export default ShortOptionsPerformance;