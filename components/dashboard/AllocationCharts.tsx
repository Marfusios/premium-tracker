
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TooltipComponent from '../Tooltip';
import { useLocalization } from '../../context/LocalizationContext';

const COLORS = ['#38b2ac', '#4299e1', '#9f7aea', '#ed8936', '#f56565', '#48bb78'];

interface ChartData {
    name: string;
    value: number;
}

interface AllocationChartsProps {
    portfolioAllocation: ChartData[];
    assetClassAllocation: ChartData[];
    formatInSelectedCurrency: (value: number) => string;
    allocationFilters: { stocks: boolean; puts: boolean; calls: boolean };
    onAllocationFilterChange: (filter: 'stocks' | 'puts' | 'calls') => void;
    tooltipFormatter?: (value: number, name: string, props: any) => React.ReactNode;
}

const AllocationCharts: React.FC<AllocationChartsProps> = ({ portfolioAllocation, assetClassAllocation, formatInSelectedCurrency, allocationFilters, onAllocationFilterChange, tooltipFormatter }) => {
    const { t } = useLocalization();

    const translatedAssetClassAllocation = assetClassAllocation.map(item => ({
        ...item,
        name: t(`dashboard.allocations.assetClasses.${item.name.toLowerCase()}`)
    }));

    const defaultTooltipFormatter = (value: number) => formatInSelectedCurrency(value);

    return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-brand-surface rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
                 <TooltipComponent content={t('dashboard.allocations.byTickerTooltip')}>
                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.allocations.byTickerTitle')}</span>
                </TooltipComponent>
            </h3>
            <div className="flex space-x-2 mb-4">
                {(Object.keys(allocationFilters) as Array<keyof typeof allocationFilters>).map((filter) => {
                    const labels: { [key: string]: string } = {
                        stocks: t('dashboard.allocations.filters.stocks'),
                        puts: t('dashboard.allocations.filters.puts'),
                        calls: t('dashboard.allocations.filters.calls')
                    };
                    return (
                        <button
                            key={filter}
                            onClick={() => onAllocationFilterChange(filter)}
                            className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                                allocationFilters[filter]
                                    ? 'bg-brand-accent text-white'
                                    : 'bg-brand-card text-brand-text-secondary hover:bg-brand-surface'
                            }`}
                        >
                            {labels[filter]}
                        </button>
                    );
                })}
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={portfolioAllocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={(entry) => `${(entry.percent * 100).toFixed(0)}%`}>
                        {portfolioAllocation.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={tooltipFormatter || defaultTooltipFormatter} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="bg-brand-surface rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{t('dashboard.allocations.byAssetClassTitle')}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={translatedAssetClassAllocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label={(entry) => `${(entry.percent * 100).toFixed(0)}%`}>
                        {translatedAssetClassAllocation.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={tooltipFormatter || defaultTooltipFormatter} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
)};

export default AllocationCharts;
