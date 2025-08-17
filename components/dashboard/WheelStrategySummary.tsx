
import React, { useMemo } from 'react';
import { WheelCycleAnalysis } from '../../types';
import MetricCard from '../MetricCard';
import { MoneyIcon, TrendingUpIcon, RepeatIcon, GiftIcon } from '../../constants';
import { useLocalization } from '../../context/LocalizationContext';

interface WheelStrategySummaryProps {
    wheelCycleAnalysis: WheelCycleAnalysis;
    formatInSelectedCurrency: (value: number) => string;
}

const WheelStrategySummary: React.FC<WheelStrategySummaryProps> = ({ wheelCycleAnalysis, formatInSelectedCurrency }) => {
    const { t, language } = useLocalization();
    const numberLocale = language === 'cs' ? 'cs-CZ' : 'en-US';

    const summary = useMemo(() => {
        const { completedCycles, pendingCycles } = wheelCycleAnalysis;
        if (completedCycles.length === 0 && pendingCycles.length === 0) return null;

        const totalPL = completedCycles.reduce((sum, cycle) => sum + cycle.totalPL, 0);

        const completedPremium = completedCycles.reduce((sum, cycle) => sum + cycle.initialPutPremium + cycle.totalCallPremium, 0);
        const pendingPremium = pendingCycles.reduce((sum, cycle) => sum + cycle.initialPutPremium + cycle.totalCallPremium, 0);
        const totalPremium = completedPremium + pendingPremium;

        const totalDuration = completedCycles.reduce((sum, cycle) => sum + cycle.durationDays, 0);
        const avgDuration = completedCycles.length > 0 ? totalDuration / completedCycles.length : 0;

        const totalCapitalYears = completedCycles.reduce((sum, cycle) => {
            const capitalYears = cycle.netAssignmentCost * (cycle.durationDays / 365);
            return sum + capitalYears;
        }, 0);
        const annualizedReturn = totalCapitalYears > 0 ? totalPL / totalCapitalYears : 0;

        return {
            totalPL,
            totalPremium,
            avgDuration,
            annualizedReturn,
            hasData: true
        };

    }, [wheelCycleAnalysis]);

    if (!summary || !summary.hasData) {
        return null;
    }

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">{t('dashboard.wheelSummary.title')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    title={t('dashboard.wheelSummary.totalPL.title')}
                    value={formatInSelectedCurrency(summary.totalPL)}
                    icon={<MoneyIcon />}
                    isPositive={summary.totalPL >= 0}
                    description={t('dashboard.wheelSummary.totalPL.description')}
                    tooltip={t('dashboard.wheelSummary.totalPL.tooltip')}
                />
                <MetricCard
                    title={t('dashboard.wheelSummary.totalPremium.title')}
                    value={formatInSelectedCurrency(summary.totalPremium)}
                    icon={<GiftIcon />}
                    isPositive={summary.totalPremium >= 0}
                    description={t('dashboard.wheelSummary.totalPremium.description')}
                    tooltip={t('dashboard.wheelSummary.totalPremium.tooltip')}
                />
                <MetricCard
                    title={t('dashboard.wheelSummary.avgDuration.title')}
                    value={t('dashboard.wheelSummary.avgDuration.value', { days: summary.avgDuration.toFixed(0) })}
                    icon={<RepeatIcon />}
                    description={t('dashboard.wheelSummary.avgDuration.description')}
                    tooltip={t('dashboard.wheelSummary.avgDuration.tooltip')}
                />
                <MetricCard
                    title={t('dashboard.wheelSummary.annualizedReturn.title')}
                    value={`${(summary.annualizedReturn * 100).toLocaleString(numberLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                    icon={<TrendingUpIcon />}
                    isPositive={summary.annualizedReturn >= 0}
                    description={t('dashboard.wheelSummary.annualizedReturn.description')}
                    tooltip={t('dashboard.wheelSummary.annualizedReturn.tooltip')}
                />
            </div>
        </div>
    );
};

export default WheelStrategySummary;
