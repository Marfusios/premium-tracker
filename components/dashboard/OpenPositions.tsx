
import React from 'react';
import { Position } from '../../types';
import Tooltip from '../Tooltip';
import { useLocalization } from '../../context/LocalizationContext';

interface Totals {
    [key: string]: number;
}

interface EnhancedShortPut extends Position {
    assignmentCost: number;
    dte?: number;
    moneyness?: number;
    breakevenPrice?: number;
    stockPrice?: number;
}

interface EnhancedShortCall extends Position {
    dte?: number;
    moneyness?: number;
    breakevenPrice?: number;
    stockPrice?: number;
}

interface OpenPositionsProps {
    stockPositions: Position[];
    shortPuts: EnhancedShortPut[];
    shortCalls: EnhancedShortCall[];
    stockTotals: Totals;
    putTotals: Totals;
    callTotals: Totals;
    formatInSelectedCurrency: (value: number) => string;
    formatCurrency: (value: number, currency: string) => string;
}

const OpenPositions: React.FC<OpenPositionsProps> = ({
    stockPositions,
    shortPuts,
    shortCalls,
    stockTotals,
    putTotals,
    callTotals,
    formatInSelectedCurrency,
    formatCurrency
}) => {
    const { t } = useLocalization();
    
    return (
    <div className="bg-brand-surface rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{t('dashboard.openPositions.title')}</h3>
        
        {/* Stocks */}
        <div>
            <h4 className="text-lg font-semibold mb-2 text-brand-text-secondary">{t('dashboard.openPositions.stocks.title')}</h4>
            <div className="overflow-x-auto pt-12 px-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-card">
                            <th className="p-2">{t('dashboard.openPositions.stocks.symbol')}</th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.stocks.qty')}</th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.stocks.currentPriceTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.stocks.currentPrice')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.stocks.costBasisTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.stocks.costBasis')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.stocks.marketValueTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.stocks.marketValue')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip align="right" content={t('dashboard.openPositions.stocks.unrealizedPLTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.stocks.unrealizedPL')}</span>
                                </Tooltip>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockPositions.map((p, i) => (
                            <tr key={i} className="border-b border-brand-card hover:bg-brand-card/50">
                                <td className="p-2 font-mono">{p.symbol}</td>
                                <td className="p-2 font-mono text-right">{p.quantity}</td>
                                <td className="p-2 font-mono text-right">{formatCurrency(p.closePrice, p.currency)}</td>
                                <td className="p-2 font-mono text-right">{formatInSelectedCurrency(p.costBasis)}</td>
                                <td className="p-2 font-mono text-right">{formatInSelectedCurrency(p.value)}</td>
                                <td className={`p-2 font-mono text-right ${p.unrealizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                    {formatInSelectedCurrency(p.unrealizedPL)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-brand-card/20 font-semibold">
                            <td colSpan={3} className="p-2">{t('dashboard.openPositions.total')}</td>
                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(stockTotals.costBasis)}</td>
                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(stockTotals.value)}</td>
                            <td className={`p-2 font-mono text-right ${stockTotals.unrealizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                {formatInSelectedCurrency(stockTotals.unrealizedPL)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        {/* Puts */}
        <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2 text-brand-text-secondary">{t('dashboard.openPositions.puts.title')}</h4>
            <div className="overflow-x-auto pt-12 px-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-card">
                            <th className="p-2">{t('dashboard.openPositions.puts.symbol')}</th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.puts.qty')}</th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.puts.strike')}</th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.puts.breakevenTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.puts.breakeven')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.puts.moneynessTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.puts.moneyness')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.puts.dteTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.puts.dte')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.puts.premiumTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.puts.premium')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.puts.unrealizedPL')}</th>
                            <th className="p-2 text-right">
                                <Tooltip align="right" content={t('dashboard.openPositions.puts.assignmentCostTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.puts.assignmentCost')}</span>
                                </Tooltip>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {shortPuts.map((p, i) => {
                            const moneynessTooltip = p.stockPrice !== undefined
                                ? t('dashboard.openPositions.puts.moneynessPriceAvailable', { baseSymbol: p.baseSymbol, price: formatCurrency(p.stockPrice, p.currency) })
                                : t('dashboard.openPositions.puts.moneynessPriceUnavailable', { baseSymbol: p.baseSymbol });

                            return (
                                <tr key={i} className="border-b border-brand-card hover:bg-brand-card/50">
                                    <td className="p-2 font-mono">{p.symbol}</td>
                                    <td className="p-2 font-mono text-right">{p.quantity}</td>
                                    <td className="p-2 font-mono text-right">{formatCurrency(p.strikePrice!, p.currency)}</td>
                                    <td className="p-2 font-mono text-right">
                                        {p.breakevenPrice !== undefined ? formatCurrency(p.breakevenPrice, p.currency) : '-'}
                                    </td>
                                    <td className={`p-2 font-mono text-right ${p.moneyness === undefined ? '' : p.moneyness > 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {p.moneyness !== undefined ? (
                                            <Tooltip content={moneynessTooltip}>
                                                <span className="border-b border-dotted border-brand-text-secondary cursor-help">
                                                    {p.moneyness.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 })}
                                                </span>
                                            </Tooltip>
                                        ) : (
                                            <Tooltip content={moneynessTooltip}>
                                                <span className="cursor-help text-brand-text-secondary">-</span>
                                            </Tooltip>
                                        )}
                                    </td>
                                    <td className="p-2 font-mono text-right">{p.dte}</td>
                                    <td className="p-2 font-mono text-right">{formatInSelectedCurrency(p.collectedPremium || 0)}</td>
                                    <td className={`p-2 font-mono text-right ${p.unrealizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {formatInSelectedCurrency(p.unrealizedPL)}
                                    </td>
                                    <td className="p-2 font-mono text-right">{formatInSelectedCurrency(p.assignmentCost)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-brand-card/20 font-semibold">
                            <td colSpan={6} className="p-2">{t('dashboard.openPositions.total')}</td>
                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(putTotals.collectedPremium)}</td>
                            <td className={`p-2 font-mono text-right ${putTotals.unrealizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                {formatInSelectedCurrency(putTotals.unrealizedPL)}
                            </td>
                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(putTotals.assignmentCost)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        {/* Calls */}
        <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2 text-brand-text-secondary">{t('dashboard.openPositions.calls.title')}</h4>
            <div className="overflow-x-auto pt-12 px-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-card">
                            <th className="p-2">{t('dashboard.openPositions.calls.symbol')}</th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.calls.qty')}</th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.calls.strike')}</th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.calls.breakevenTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.calls.breakeven')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.calls.moneynessTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.calls.moneyness')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.calls.dteTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.calls.dte')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">
                                <Tooltip content={t('dashboard.openPositions.calls.premiumTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.openPositions.calls.premium')}</span>
                                </Tooltip>
                            </th>
                            <th className="p-2 text-right">{t('dashboard.openPositions.calls.unrealizedPL')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shortCalls.map((p, i) => {
                             const moneynessTooltip = p.stockPrice !== undefined
                                ? t('dashboard.openPositions.calls.moneynessPriceAvailable', { baseSymbol: p.baseSymbol, price: formatCurrency(p.stockPrice, p.currency) })
                                : t('dashboard.openPositions.calls.moneynessPriceUnavailable', { baseSymbol: p.baseSymbol });

                            return (
                                <tr key={i} className="border-b border-brand-card hover:bg-brand-card/50">
                                    <td className="p-2 font-mono">{p.symbol}</td>
                                    <td className="p-2 font-mono text-right">{p.quantity}</td>
                                    <td className="p-2 font-mono text-right">{formatCurrency(p.strikePrice!, p.currency)}</td>
                                    <td className="p-2 font-mono text-right">
                                        {p.breakevenPrice !== undefined ? formatCurrency(p.breakevenPrice, p.currency) : '-'}
                                    </td>
                                    <td className={`p-2 font-mono text-right ${p.moneyness === undefined ? '' : p.moneyness > 0 ? 'text-brand-danger' : 'text-brand-success'}`}>
                                        {p.moneyness !== undefined ? (
                                            <Tooltip content={moneynessTooltip}>
                                                <span className="border-b border-dotted border-brand-text-secondary cursor-help">
                                                    {p.moneyness.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 })}
                                                </span>
                                            </Tooltip>
                                        ) : (
                                            <Tooltip content={moneynessTooltip}>
                                                <span className="cursor-help text-brand-text-secondary">-</span>
                                            </Tooltip>
                                        )}
                                    </td>
                                    <td className="p-2 font-mono text-right">{p.dte}</td>
                                    <td className="p-2 font-mono text-right">{formatInSelectedCurrency(p.collectedPremium || 0)}</td>
                                    <td className={`p-2 font-mono text-right ${p.unrealizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                        {formatInSelectedCurrency(p.unrealizedPL)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-brand-card/20 font-semibold">
                            <td colSpan={6} className="p-2">{t('dashboard.openPositions.total')}</td>
                            <td className="p-2 font-mono text-right">{formatInSelectedCurrency(callTotals.collectedPremium)}</td>
                            <td className={`p-2 font-mono text-right ${callTotals.unrealizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                {formatInSelectedCurrency(callTotals.unrealizedPL)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
)};

export default OpenPositions;
