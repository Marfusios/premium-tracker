
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TickerPL } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';

interface TickerPLChartProps {
    data: TickerPL[];
    formatInSelectedCurrency: (value: number) => string;
}

const CustomTooltip = ({ active, payload, label, formatInSelectedCurrency, t }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-brand-card p-2 rounded-md shadow-lg border border-brand-surface">
                <p className="font-bold text-brand-text-primary">{`${label}`}</p>
                <p style={{ color: payload[0].color }}>
                    {`${t('dashboard.tickerPL.tooltip.totalPL')}: ${formatInSelectedCurrency(payload[0].value)}`}
                </p>
            </div>
        );
    }
    return null;
};


const TickerPLChart: React.FC<TickerPLChartProps> = ({ data, formatInSelectedCurrency }) => {
    const { t } = useLocalization();
    if (!data || data.length === 0) {
        return null;
    }

    // Reverse for horizontal chart to show winners at top
    const chartData = [...data].reverse(); 

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('dashboard.tickerPL.title')}</h2>
            <ResponsiveContainer width="100%" height={Math.max(300, chartData.length * 35)}>
                <BarChart
                    layout="vertical"
                    data={chartData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                    <XAxis type="number" stroke="#a0aec0" tickFormatter={(value) => formatInSelectedCurrency(value).replace(/(\.00|,[0-9]{2})$/, '')} />
                    <YAxis dataKey="ticker" type="category" stroke="#a0aec0" width={80} interval={0} />
                    <Tooltip
                        content={<CustomTooltip formatInSelectedCurrency={formatInSelectedCurrency} t={t} />}
                        cursor={{ fill: 'rgba(113, 128, 150, 0.1)' }}
                    />
                    <Bar dataKey="totalPL" name="Total Realized P/L">
                        {
                            chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.totalPL >= 0 ? '#48bb78' : '#f56565'} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TickerPLChart;
