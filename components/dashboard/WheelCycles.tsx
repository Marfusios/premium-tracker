
import React, { useState, useMemo } from 'react';
import { WheelCycle, WheelCycleAnalysis, PendingWheelCycle } from '../../types';
import { ChevronDownIcon, ChevronUpIcon } from '../../constants';
import Tooltip from '../Tooltip';
import { useLocalization } from '../../context/LocalizationContext';

interface WheelCyclesProps {
    wheelCycleAnalysis: WheelCycleAnalysis;
    formatInSelectedCurrency: (value: number) => string;
    formatCurrency: (value: number, currency: string) => string;
    baseCurrency: string;
}

type SortKeys = 'totalPL' | 'durationDays' | 'returnOnCost' | 'endDate';
type PendingSortKeys = 'currentTotalPL' | 'startDate' | 'netAssignmentCost';


const WheelCycles: React.FC<WheelCyclesProps> = ({ wheelCycleAnalysis, formatInSelectedCurrency, formatCurrency }) => {
    const { t, locale } = useLocalization();
    
    const [completedSortConfig, setCompletedSortConfig] = useState<{ key: SortKeys; direction: 'asc' | 'desc' }>({ key: 'endDate', direction: 'desc' });
    const [pendingSortConfig, setPendingSortConfig] = useState<{ key: PendingSortKeys; direction: 'asc' | 'desc' }>({ key: 'startDate', direction: 'desc' });

    const [expandedCompletedRow, setExpandedCompletedRow] = useState<number | null>(null);
    const [expandedPendingRow, setExpandedPendingRow] = useState<number | null>(null);

    const handleCompletedRowClick = (index: number) => {
        setExpandedCompletedRow(expandedCompletedRow === index ? null : index);
    };

    const handlePendingRowClick = (index: number) => {
        setExpandedPendingRow(expandedPendingRow === index ? null : index);
    };
    
    const sortedCompletedCycles = useMemo(() => {
        if (!wheelCycleAnalysis.completedCycles) return [];
        return [...wheelCycleAnalysis.completedCycles].sort((a, b) => {
            let aValue = a[completedSortConfig.key];
            let bValue = b[completedSortConfig.key];
            
            if(completedSortConfig.key === 'endDate') {
                aValue = new Date(a.endDate).getTime();
                bValue = new Date(b.endDate).getTime();
            }

            if (aValue < bValue) return completedSortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return completedSortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [wheelCycleAnalysis.completedCycles, completedSortConfig]);

    const sortedPendingCycles = useMemo(() => {
        if (!wheelCycleAnalysis.pendingCycles) return [];
        return [...wheelCycleAnalysis.pendingCycles].sort((a, b) => {
            let aValue = a[pendingSortConfig.key];
            let bValue = b[pendingSortConfig.key];

            if (pendingSortConfig.key === 'startDate') {
                aValue = new Date(a.startDate).getTime();
                bValue = new Date(b.startDate).getTime();
            }

            if (aValue < bValue) return pendingSortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return pendingSortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [wheelCycleAnalysis.pendingCycles, pendingSortConfig]);


    const requestSort = (key: SortKeys) => {
        let direction: 'asc' | 'desc' = 'desc';
        if (completedSortConfig.key === key && completedSortConfig.direction === 'desc') {
            direction = 'asc';
        }
        setCompletedSortConfig({ key, direction });
    };

    const requestPendingSort = (key: PendingSortKeys) => {
        let direction: 'asc' | 'desc' = 'desc';
        if (pendingSortConfig.key === key && pendingSortConfig.direction === 'desc') {
            direction = 'asc';
        }
        setPendingSortConfig({ key, direction });
    };

    const pendingTotals = useMemo(() => {
        if (!wheelCycleAnalysis.pendingCycles) return { callPremium: 0, unrealizedStockPL: 0, currentTotalPL: 0 };
        return wheelCycleAnalysis.pendingCycles.reduce((acc, cycle) => {
            acc.callPremium += cycle.totalCallPremium;
            acc.unrealizedStockPL += cycle.unrealizedStockPL;
            acc.currentTotalPL += cycle.currentTotalPL;
            return acc;
        }, { callPremium: 0, unrealizedStockPL: 0, currentTotalPL: 0 });
    }, [wheelCycleAnalysis.pendingCycles]);

    const completedTotals = useMemo(() => {
        if (!wheelCycleAnalysis.completedCycles) return { callPremium: 0, stockPL: 0, totalPL: 0 };
        return wheelCycleAnalysis.completedCycles.reduce((acc, cycle) => {
            acc.callPremium += cycle.totalCallPremium;
            acc.stockPL += cycle.stockPL;
            acc.totalPL += cycle.totalPL;
            return acc;
        }, { callPremium: 0, stockPL: 0, totalPL: 0 });
    }, [wheelCycleAnalysis.completedCycles]);

    const SortableHeader: React.FC<{ sortKey: SortKeys; headerKey: string; tooltipKey: string; tooltipAlign?: 'center' | 'left' | 'right' }> = ({ sortKey, headerKey, tooltipKey, tooltipAlign }) => (
        <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase cursor-pointer" onClick={() => requestSort(sortKey)}>
            <div className="flex items-center justify-end">
                <Tooltip content={t(tooltipKey)} align={tooltipAlign}>
                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t(headerKey)}</span>
                </Tooltip>
                {completedSortConfig.key === sortKey && (completedSortConfig.direction === 'asc' ? <ChevronUpIcon className="w-4 h-4 ml-1" /> : <ChevronDownIcon className="w-4 h-4 ml-1" />)}
            </div>
        </th>
    );

     const SortablePendingHeader: React.FC<{ sortKey: PendingSortKeys; headerKey: string; tooltipKey: string; align?: 'left' | 'right'; tooltipAlign?: 'center' | 'left' | 'right' }> = ({ sortKey, headerKey, tooltipKey, align = 'right', tooltipAlign }) => (
        <th className={`p-2 text-sm font-semibold text-brand-text-secondary uppercase cursor-pointer text-${align}`} onClick={() => requestPendingSort(sortKey)}>
            <div className={`flex items-center ${align === 'right' ? 'justify-end' : ''}`}>
                <Tooltip content={t(tooltipKey)} align={tooltipAlign}>
                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t(headerKey)}</span>
                </Tooltip>
                {pendingSortConfig.key === sortKey && (pendingSortConfig.direction === 'asc' ? <ChevronUpIcon className="w-4 h-4 ml-1" /> : <ChevronDownIcon className="w-4 h-4 ml-1" />)}
            </div>
        </th>
    );
    
    if ((!sortedCompletedCycles || sortedCompletedCycles.length === 0) && (!sortedPendingCycles || sortedPendingCycles.length === 0)) {
        return null;
    }

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">{t('dashboard.wheel.title')}</h3>
            
            {sortedPendingCycles.length > 0 && (
                <div className="mb-10">
                    <h4 className="text-lg font-semibold mb-2 text-brand-text-secondary">{t('dashboard.wheel.pending.title')}</h4>
                    <div className="overflow-x-auto pt-12 px-6">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-brand-card">
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase">{t('dashboard.wheel.pending.headers.symbol')}</th>
                                    <SortablePendingHeader sortKey="startDate" headerKey='dashboard.wheel.pending.headers.startDate' tooltipKey='dashboard.wheel.pending.tooltips.startDate' align="left" tooltipAlign="left" />
                                    <SortablePendingHeader sortKey="netAssignmentCost" headerKey='dashboard.wheel.pending.headers.netCostBasis' tooltipKey='dashboard.wheel.pending.tooltips.netCostBasis' />
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">{t('dashboard.wheel.pending.headers.callPremium')}</th>
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">{t('dashboard.wheel.pending.headers.currentValue')}</th>
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">{t('dashboard.wheel.pending.headers.unrealizedStockPL')}</th>
                                    <SortablePendingHeader sortKey="currentTotalPL" headerKey='dashboard.wheel.pending.headers.currentTotalPL' tooltipKey='dashboard.wheel.pending.tooltips.currentTotalPL' tooltipAlign="right" />
                                </tr>
                            </thead>
                            <tbody>
                                {sortedPendingCycles.map((cycle, i) => (
                                     <React.Fragment key={`pending-${cycle.symbol}-${i}`}>
                                        <tr className="border-b border-brand-card last:border-b-0 hover:bg-brand-card/50 cursor-pointer" onClick={() => handlePendingRowClick(i)}>
                                            <td className="p-2 font-mono">
                                                <div className="flex items-center">
                                                    {expandedPendingRow === i ? <ChevronUpIcon className="w-4 h-4 mr-2"/> : <ChevronDownIcon className="w-4 h-4 mr-2"/>}
                                                    {cycle.symbol}
                                                </div>
                                            </td>
                                            <td className="p-2 font-mono">{cycle.startDate}</td>
                                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(cycle.netAssignmentCost)}</td>
                                            <td className="p-2 font-mono text-right text-brand-success">{formatInSelectedCurrency(cycle.totalCallPremium)}</td>
                                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(cycle.currentStockValue)}</td>
                                            <td className={`p-2 font-mono text-right ${cycle.unrealizedStockPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                {formatInSelectedCurrency(cycle.unrealizedStockPL)}
                                            </td>
                                            <td className={`p-2 font-mono font-semibold text-right ${cycle.currentTotalPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                {formatInSelectedCurrency(cycle.currentTotalPL)}
                                            </td>
                                        </tr>
                                         {expandedPendingRow === i && (
                                            <tr className="bg-brand-card/30">
                                                <td colSpan={8} className="p-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-card p-4 rounded-md">
                                                        <div>
                                                            <h4 className="font-semibold text-brand-text-primary mb-2">{t('dashboard.wheel.details.costBasisTitle')}</h4>
                                                            <div className="text-sm space-y-1">
                                                                <p><strong>{t('dashboard.wheel.details.assignment')}:</strong> {t('dashboard.wheel.details.assignmentText', { shares: cycle.assignmentShares, price: formatCurrency(cycle.assignmentPrice, cycle.currency) })}</p>
                                                                <p><strong>{t('dashboard.wheel.details.grossCostBasis')}:</strong> {formatInSelectedCurrency(cycle.assignmentCost)}</p>
                                                                <p className="text-brand-success"><strong>{t('dashboard.wheel.details.putPremiumApplied')}:</strong> -{formatInSelectedCurrency(cycle.initialPutPremium)}</p>
                                                                <p className="font-semibold border-t border-brand-surface pt-1 mt-1"><strong>{t('dashboard.wheel.details.netCostBasis')}:</strong> {formatInSelectedCurrency(cycle.netAssignmentCost)}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-brand-text-primary mb-2">{t('dashboard.wheel.details.tradeLogTitle')}</h4>
                                                            <table className="w-full text-xs mt-2">
                                                                <thead>
                                                                    <tr className="border-b border-brand-bg">
                                                                        <th className="p-1 text-left text-brand-text-secondary">{t('dashboard.wheel.details.log.date')}</th>
                                                                        <th className="p-1 text-left text-brand-text-secondary">{t('dashboard.wheel.details.log.description')}</th>
                                                                        <th className="p-1 text-right text-brand-text-secondary">{t('dashboard.wheel.details.log.amount')}</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {cycle.tradeLog.map((log, j) => (
                                                                        <tr key={j} className="border-b border-brand-surface/50 last:border-0">
                                                                            <td className="p-1 font-mono">{log.date}</td>
                                                                            <td className="p-1">{log.description}</td>
                                                                            <td className={`p-1 font-mono text-right ${log.amount >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                                                {formatInSelectedCurrency(log.amount)}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                     </React.Fragment>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-brand-card/20 font-semibold">
                                    <td colSpan={3} className="p-2">{t('dashboard.openPositions.total')}</td>
                                    <td className="p-2 font-mono text-right text-brand-success">{formatInSelectedCurrency(pendingTotals.callPremium)}</td>
                                    <td className="p-2"></td>
                                    <td className={`p-2 font-mono text-right ${pendingTotals.unrealizedStockPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {formatInSelectedCurrency(pendingTotals.unrealizedStockPL)}
                                    </td>
                                    <td className={`p-2 font-mono text-right font-semibold ${pendingTotals.currentTotalPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {formatInSelectedCurrency(pendingTotals.currentTotalPL)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )}
            
            {sortedCompletedCycles.length > 0 && (
                <div>
                    <h4 className="text-lg font-semibold mb-2 text-brand-text-secondary">{t('dashboard.wheel.completed.title')}</h4>
                    <div className="overflow-x-auto pt-12 px-6">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-brand-card">
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase">{t('dashboard.wheel.completed.headers.symbol')}</th>
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase">{t('dashboard.wheel.completed.headers.startDate')}</th>
                                    <SortableHeader sortKey="endDate" headerKey='dashboard.wheel.completed.headers.endDate' tooltipKey='dashboard.wheel.completed.tooltips.endDate' />
                                    <SortableHeader sortKey="durationDays" headerKey='dashboard.wheel.completed.headers.duration' tooltipKey='dashboard.wheel.completed.tooltips.duration' />
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">{t('dashboard.wheel.completed.headers.callPremium')}</th>
                                    <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">{t('dashboard.wheel.completed.headers.stockPL')}</th>
                                    <SortableHeader sortKey="totalPL" headerKey='dashboard.wheel.completed.headers.totalPL' tooltipKey='dashboard.wheel.completed.tooltips.totalPL' />
                                    <SortableHeader sortKey="returnOnCost" headerKey='dashboard.wheel.completed.headers.returnOnCost' tooltipKey='dashboard.wheel.completed.tooltips.returnOnCost' tooltipAlign="right" />
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCompletedCycles.map((cycle, i) => (
                                    <React.Fragment key={`completed-${cycle.symbol}-${i}`}>
                                        <tr className="border-b border-brand-card last:border-b-0 hover:bg-brand-card/50 cursor-pointer" onClick={() => handleCompletedRowClick(i)}>
                                            <td className="p-2 font-mono">
                                                <div className="flex items-center">
                                                    {expandedCompletedRow === i ? <ChevronUpIcon className="w-4 h-4 mr-2"/> : <ChevronDownIcon className="w-4 h-4 mr-2"/>}
                                                    {cycle.symbol}
                                                </div>
                                            </td>
                                            <td className="p-2 font-mono">{cycle.startDate}</td>
                                            <td className="p-2 font-mono text-right">{cycle.endDate}</td>
                                            <td className="p-2 font-mono text-right">{cycle.durationDays}</td>
                                            <td className="p-2 font-mono text-right text-brand-success">{formatInSelectedCurrency(cycle.totalCallPremium)}</td>
                                            <td className={`p-2 font-mono text-right ${cycle.stockPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                {formatInSelectedCurrency(cycle.stockPL)}
                                            </td>
                                            <td className={`p-2 font-mono font-semibold text-right ${cycle.totalPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                {formatInSelectedCurrency(cycle.totalPL)}
                                            </td>
                                            <td className={`p-2 font-mono font-semibold text-right ${cycle.returnOnCost >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                {cycle.returnOnCost.toLocaleString(locale, { style: 'percent', minimumFractionDigits: 2 })}
                                            </td>
                                        </tr>
                                        {expandedCompletedRow === i && (
                                            <tr className="bg-brand-card/30">
                                                <td colSpan={8} className="p-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-card p-4 rounded-md">
                                                        <div>
                                                            <h4 className="font-semibold text-brand-text-primary mb-2">{t('dashboard.wheel.details.costBasisPLTitle')}</h4>
                                                            <div className="text-sm space-y-1">
                                                                <p><strong>{t('dashboard.wheel.details.assignment')}:</strong> {t('dashboard.wheel.details.assignmentText', { shares: cycle.assignmentShares, price: formatCurrency(cycle.assignmentPrice, cycle.currency) })}</p>
                                                                <p><strong>{t('dashboard.wheel.details.grossCostBasis')}:</strong> {formatInSelectedCurrency(cycle.assignmentCost)}</p>
                                                                <p className="text-brand-success"><strong>{t('dashboard.wheel.details.putPremiumApplied')}:</strong> -{formatInSelectedCurrency(cycle.initialPutPremium)}</p>
                                                                <p className="font-semibold border-t border-brand-surface pt-1 mt-1"><strong>{t('dashboard.wheel.details.netCostBasis')}:</strong> {formatInSelectedCurrency(cycle.netAssignmentCost)}</p>
                                                                <hr className="border-brand-surface my-2" />
                                                                <p><strong>{t('dashboard.wheel.details.sale')}:</strong> {t('dashboard.wheel.details.saleText', { shares: cycle.assignmentShares, price: formatCurrency(cycle.salePrice, cycle.currency) })}</p>
                                                                <p><strong>{t('dashboard.wheel.details.totalSaleProceeds')}:</strong> {formatInSelectedCurrency(cycle.saleProceeds)}</p>
                                                                <p className={`font-semibold ${cycle.stockPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}><strong>{t('dashboard.wheel.details.stockPLOnNet')}:</strong> {formatInSelectedCurrency(cycle.stockPL)}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-brand-text-primary mb-2">{t('dashboard.wheel.details.tradeLogTitle')}</h4>
                                                            <table className="w-full text-xs mt-2">
                                                                <thead>
                                                                    <tr className="border-b border-brand-bg">
                                                                        <th className="p-1 text-left text-brand-text-secondary">{t('dashboard.wheel.details.log.date')}</th>
                                                                        <th className="p-1 text-left text-brand-text-secondary">{t('dashboard.wheel.details.log.description')}</th>
                                                                        <th className="p-1 text-right text-brand-text-secondary">{t('dashboard.wheel.details.log.amount')}</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {cycle.tradeLog.map((log, j) => (
                                                                        <tr key={j} className="border-b border-brand-surface/50 last:border-0">
                                                                            <td className="p-1 font-mono">{log.date}</td>
                                                                            <td className="p-1">{log.description}</td>
                                                                            <td className={`p-1 font-mono text-right ${log.amount >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                                                                {formatInSelectedCurrency(log.amount)}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-brand-card/20 font-semibold">
                                    <td colSpan={4} className="p-2">{t('dashboard.openPositions.total')}</td>
                                    <td className="p-2 font-mono text-right text-brand-success">{formatInSelectedCurrency(completedTotals.callPremium)}</td>
                                    <td className={`p-2 font-mono text-right ${completedTotals.stockPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {formatInSelectedCurrency(completedTotals.stockPL)}
                                    </td>
                                    <td className={`p-2 font-mono font-semibold text-right ${completedTotals.totalPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {formatInSelectedCurrency(completedTotals.totalPL)}
                                    </td>
                                    <td className="p-2"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WheelCycles;
