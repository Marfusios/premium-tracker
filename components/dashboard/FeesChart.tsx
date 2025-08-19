import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonthlySummary } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';

interface FeesChartProps {
    data: MonthlySummary[];
    formatInSelectedCurrency: (value: number) => string;
}

const FeesChart: React.FC<FeesChartProps> = ({ data, formatInSelectedCurrency }) => {
    const { t, locale } = useLocalization();
    const [activeSeries, setActiveSeries] = useState({
        commissions: true,
        fees: true,
        salesTax: true,
        interestPaid: true,
    });
    
    const handleLegendClick = (o: any) => {
        const { dataKey } = o;
        setActiveSeries(prev => ({...prev, [dataKey]: !prev[dataKey]}));
    };
    
    const filteredData = data.filter(item => item.commissions > 0 || item.fees > 0 || item.interestPaid > 0 || item.salesTax > 0);
    
    if (!filteredData || filteredData.length === 0) {
        return null;
    }
    
    const chartData = filteredData.map(item => {
        const [year, month] = item.month.split('-');
        const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
        return {
            ...item,
            month: date.toLocaleString(locale, { month: 'short', year: '2-digit' })
        };
    });

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
            return (
                <div className="bg-brand-card p-4 rounded-md shadow-lg border border-brand-surface">
                    <p className="font-bold text-brand-text-primary">{label}</p>
                    <ul className="mt-2 text-sm">
                        {payload.map((entry: any) => (
                             <li key={entry.name} style={{ color: entry.color }}>
                                {`${entry.name}: ${formatInSelectedCurrency(entry.value)}`}
                            </li>
                        ))}
                        <li className="font-semibold border-t border-brand-surface pt-1 mt-1 text-brand-text-primary">
                            {`${t('dashboard.fees.tooltip.total')}: ${formatInSelectedCurrency(total)}`}
                        </li>
                    </ul>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('dashboard.fees.title')}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis dataKey="month" stroke="#a0aec0" />
                    <YAxis stroke="#a0aec0" tickFormatter={(value) => formatInSelectedCurrency(value).replace(/(\.00|,[0-9]{2})$/, '')} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(113, 128, 150, 0.1)' }}/>
                    <Legend wrapperStyle={{ color: '#edf2f7' }} onClick={handleLegendClick} />
                    <Bar dataKey="commissions" hide={!activeSeries.commissions} stackId="a" name={t('dashboard.fees.legend.commissions')} fill="#ed8936" />
                    <Bar dataKey="fees" hide={!activeSeries.fees} stackId="a" name={t('dashboard.fees.legend.otherFees')} fill="#f56565" />
                    <Bar dataKey="salesTax" hide={!activeSeries.salesTax} stackId="a" name={t('dashboard.fees.legend.salesTax')} fill="#dd6b20" />
                    <Bar dataKey="interestPaid" hide={!activeSeries.interestPaid} stackId="a" name={t('dashboard.fees.legend.paidInterest')} fill="#c53030" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FeesChart;