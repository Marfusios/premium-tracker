import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonthlySummary } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';

interface MonthlyPerformanceChartProps {
    data: any[];
    valueFormatter: (value: number) => string;
    tooltipValueFormatter?: (value: number) => string;
}

const MonthlyPerformanceChart: React.FC<MonthlyPerformanceChartProps> = ({ data, valueFormatter, tooltipValueFormatter }) => {
    const { t, locale } = useLocalization();
    const [mode, setMode] = useState<'income' | 'pl'>('income');
    const [activeSeries, setActiveSeries] = useState({
        optionsPremium: true,
        optionsPL: true,
        stocksPL: true,
        forexPL: true,
        syepIncome: true,
        interest: true,
    });

    const handleLegendClick = (o: any) => {
        const { dataKey } = o;
        setActiveSeries(prev => ({...prev, [dataKey]: !prev[dataKey]}));
    };
    
    if (!data || data.length === 0) {
        return null;
    }
    
    const chartData = data.map(item => {
        // If month is already formatted, use it. Otherwise, format it from YYYY-MM.
        if (typeof item.month === 'string' && !item.month.includes('-')) {
            return item;
        }
        const [year, month] = item.month.split('-');
        const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
        return {
            ...item,
            month: date.toLocaleString(locale, { month: 'short', year: '2-digit' })
        };
    });

    const finalTooltipFormatter = tooltipValueFormatter || valueFormatter;

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
            return (
                <div className="bg-brand-card p-4 rounded-md shadow-lg border border-brand-surface">
                    <p className="font-bold text-brand-text-primary">{label}</p>
                    <ul className="mt-2 text-sm">
                        {payload.map((entry: any) => (
                             <li key={entry.name} style={{ color: entry.color }}>
                                {`${entry.name}: ${finalTooltipFormatter(entry.value)}`}
                            </li>
                        ))}
                        <li className="font-semibold border-t border-brand-surface pt-1 mt-1 text-brand-text-primary">
                            {`${t('dashboard.monthlyPerformance.tooltip.total')}: ${finalTooltipFormatter(total)}`}
                        </li>
                    </ul>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{t(`dashboard.monthlyPerformance.title.${mode}`)}</h2>
                 <div className="p-1 bg-brand-card rounded-lg flex space-x-1">
                    <button onClick={() => setMode('income')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${mode === 'income' ? 'bg-brand-accent text-white' : 'text-brand-text-secondary hover:bg-brand-surface'}`}>{t('dashboard.monthlyPerformance.buttons.income')}</button>
                    <button onClick={() => setMode('pl')} className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${mode === 'pl' ? 'bg-brand-accent text-white' : 'text-brand-text-secondary hover:bg-brand-surface'}`}>{t('dashboard.monthlyPerformance.buttons.pl')}</button>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis dataKey="month" stroke="#a0aec0" />
                    <YAxis stroke="#a0aec0" tickFormatter={valueFormatter} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(113, 128, 150, 0.1)' }}/>
                    <Legend wrapperStyle={{ color: '#edf2f7' }} onClick={handleLegendClick} />

                    {mode === 'income' ? (
                        <Bar dataKey="optionsPremium" hide={!activeSeries.optionsPremium} stackId="a" name={t('dashboard.monthlyPerformance.legend.optionsPremium')} fill="#38b2ac" />
                    ) : (
                        <>
                            <Bar dataKey="optionsPL" hide={!activeSeries.optionsPL} stackId="a" name={t('dashboard.monthlyPerformance.legend.optionsPL')} fill="#38b2ac" />
                            <Bar dataKey="stocksPL" hide={!activeSeries.stocksPL} stackId="a" name={t('dashboard.monthlyPerformance.legend.stocksPL')} fill="#ed8936" />
                            <Bar dataKey="forexPL" hide={!activeSeries.forexPL} stackId="a" name={t('dashboard.monthlyPerformance.legend.forexPL')} fill="#4299e1" />
                        </>
                    )}
                    <Bar dataKey="syepIncome" hide={!activeSeries.syepIncome} stackId="a" name={t('dashboard.monthlyPerformance.legend.syepIncome')} fill="#9f7aea" />
                    <Bar dataKey="interest" hide={!activeSeries.interest} stackId="a" name={t('dashboard.monthlyPerformance.legend.interest')} fill="#667eea" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlyPerformanceChart;