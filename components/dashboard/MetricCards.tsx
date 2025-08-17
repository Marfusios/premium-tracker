
import React from 'react';
import MetricCard from '../MetricCard';
import { MoneyIcon, StocksIcon, InfoIcon, ForexIcon, WarningIcon } from '../../constants';
import { ParsedData } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';

interface MetricCardsProps {
    data: ParsedData;
    formatInSelectedCurrency: (value: number) => string;
    shortPutLeverage: number;
    shortPutLeverageCash: number;
}

const MetricCards: React.FC<MetricCardsProps> = ({ data, formatInSelectedCurrency, shortPutLeverage, shortPutLeverageCash }) => {
    const { t, locale } = useLocalization();
    
    const isLeverageRisky = shortPutLeverage > 1 || shortPutLeverageCash > 1;
    const navLeverageText = shortPutLeverage.toLocaleString(locale, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    const cashLeverageText = isFinite(shortPutLeverageCash) ? shortPutLeverageCash.toLocaleString(locale, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '∞';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
                title={t('dashboard.metrics.totalNAV.title')}
                value={formatInSelectedCurrency(data.totalNAV)} 
                icon={<MoneyIcon />} 
                description={t('dashboard.metrics.totalNAV.description')}
            />
            <MetricCard 
                title={t('dashboard.metrics.twr.title')} 
                value={`${data.rateOfReturn.toLocaleString(locale, {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`} 
                icon={<StocksIcon />} 
                isPositive={data.rateOfReturn >= 0}
                description={t('dashboard.metrics.twr.description')}
                tooltip={t('dashboard.metrics.twr.tooltip')}
            />
            <MetricCard
                title={t('dashboard.metrics.putLeverage.title')}
                value={
                    <span>
                        {navLeverageText}x
                        <span className="text-xl font-medium">
                            {' / '}{cashLeverageText}x
                        </span>
                    </span>
                }
                icon={<WarningIcon />}
                isPositive={!isLeverageRisky}
                description={t('dashboard.metrics.putLeverage.description')}
                tooltip={t('dashboard.metrics.putLeverage.tooltip')}
            />
            <MetricCard 
                title={t('dashboard.metrics.baseCurrency.title')} 
                value={data.accountInfo.baseCurrency} 
                icon={<ForexIcon />} 
                description={t('dashboard.metrics.baseCurrency.description')}
            />
        </div>
    );
};

export default MetricCards;
