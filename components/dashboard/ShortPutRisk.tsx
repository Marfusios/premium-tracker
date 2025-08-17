
import React from 'react';
import MetricCard from '../MetricCard';
import { WarningIcon, MoneyIcon, CheckCircleIcon, InfoIcon } from '../../constants';
import { useLocalization } from '../../context/LocalizationContext';

interface ShortfallDetails {
    headers: string[];
    rows: { [key: string]: string | number }[];
}

interface ShortPutRiskProps {
    cashBalance: number;
    likelyAssignmentValue: number;
    unlikelyAssignmentValue: number;

    likelyCashNeeded: number;
    unlikelyCashNeeded: number;
    likelyShortfallDetails: ShortfallDetails;
    unlikelyShortfallDetails: ShortfallDetails;
    formatInSelectedCurrency: (value: number) => string;
}

const ShortPutRisk: React.FC<ShortPutRiskProps> = ({
    cashBalance,
    likelyAssignmentValue,
    unlikelyAssignmentValue,
    likelyCashNeeded,
    unlikelyCashNeeded,
    likelyShortfallDetails,
    unlikelyShortfallDetails,
    formatInSelectedCurrency
}) => {
    const { t } = useLocalization();
    return (
    <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('dashboard.putRisk.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            <div className="flex flex-col justify-center h-full">
              <MetricCard
                  title={t('dashboard.putRisk.cashBalance.title')}
                  value={formatInSelectedCurrency(cashBalance)}
                  icon={<MoneyIcon />}
                  description={t('dashboard.putRisk.cashBalance.description')}
              />
            </div>

            <div className="bg-brand-card/30 p-4 rounded-lg space-y-4 border-2 border-brand-danger/30">
                <h3 className="text-lg font-semibold text-brand-danger flex items-center">
                    <WarningIcon className="mr-2" />
                    {t('dashboard.putRisk.likelyRisk.title')}
                </h3>
                <MetricCard
                    title={t('dashboard.putRisk.likelyRisk.assignmentValue.title')}
                    value={formatInSelectedCurrency(likelyAssignmentValue)}
                    icon={<InfoIcon />}
                    description={t('dashboard.putRisk.likelyRisk.assignmentValue.description')}
                    details={likelyShortfallDetails}
                    tooltip={t('dashboard.putRisk.likelyRisk.assignmentValue.tooltip')}
                />
                <MetricCard
                    title={t('dashboard.putRisk.likelyRisk.cashShortfall.title')}
                    value={formatInSelectedCurrency(likelyCashNeeded)}
                    icon={likelyCashNeeded > 0 ? <WarningIcon /> : <CheckCircleIcon />}
                    isPositive={likelyCashNeeded <= 0}
                    description={t('dashboard.putRisk.likelyRisk.cashShortfall.description')}
                    tooltip={t('dashboard.putRisk.likelyRisk.cashShortfall.tooltip')}
                />
            </div>

            <div className="bg-brand-card/30 p-4 rounded-lg space-y-4 border-2 border-brand-accent/30">
                <h3 className="text-lg font-semibold text-brand-accent flex items-center">
                    <CheckCircleIcon className="mr-2" />
                    {t('dashboard.putRisk.unlikelyRisk.title')}
                </h3>
                <MetricCard
                    title={t('dashboard.putRisk.unlikelyRisk.assignmentValue.title')}
                    value={formatInSelectedCurrency(unlikelyAssignmentValue)}
                    icon={<InfoIcon />}
                    description={t('dashboard.putRisk.unlikelyRisk.assignmentValue.description')}
                    details={unlikelyShortfallDetails}
                    tooltip={t('dashboard.putRisk.unlikelyRisk.assignmentValue.tooltip')}
                />
                <MetricCard
                    title={t('dashboard.putRisk.unlikelyRisk.additionalShortfall.title')}
                    value={formatInSelectedCurrency(unlikelyCashNeeded)}
                    icon={unlikelyCashNeeded > 0 ? <WarningIcon /> : <CheckCircleIcon />}
                    isPositive={unlikelyCashNeeded <= 0}
                    description={t('dashboard.putRisk.unlikelyRisk.additionalShortfall.description')}
                    tooltip={t('dashboard.putRisk.unlikelyRisk.additionalShortfall.tooltip')}
                />
            </div>
        </div>
    </div>
)};

export default ShortPutRisk;
