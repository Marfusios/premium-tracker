
import React, { useState } from 'react';
import { ClosedPosition } from '../../types';
import { ChevronLeftIcon, ChevronRightIcon } from '../../constants';
import Tooltip from '../Tooltip';
import { useLocalization } from '../../context/LocalizationContext';

interface ClosedPositionsProps {
    closedPositions: ClosedPosition[];
    formatInSelectedCurrency: (value: number) => string;
}

const ITEMS_PER_PAGE = 10;

const ClosedPositions: React.FC<ClosedPositionsProps> = ({ closedPositions, formatInSelectedCurrency }) => {
    const { t, locale } = useLocalization();
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(closedPositions.length / ITEMS_PER_PAGE);
    const paginatedClosedPositions = closedPositions.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePrevPage = () => {
        setCurrentPage(p => Math.max(p - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(p => Math.min(p + 1, totalPages));
    };

    const translatedClosedPositions = paginatedClosedPositions.map(p => ({
        ...p,
        assetCategory: t(`assetCategories.${p.assetCategory.toLowerCase()}`, { 'Stocks': p.assetCategory, 'Options': p.assetCategory, 'Forex': p.assetCategory })
    }));

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">{t('dashboard.closedPositions.title')}</h3>
            <div className="overflow-x-auto pt-12 px-6">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-card">
                            <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase">{t('dashboard.closedPositions.assetCategory')}</th>
                            <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase">{t('dashboard.closedPositions.symbol')}</th>
                            <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">{t('dashboard.closedPositions.realizedPL')}</th>
                            <th className="p-2 text-sm font-semibold text-brand-text-secondary uppercase text-right">
                                <Tooltip align="right" content={t('dashboard.closedPositions.arocTooltip')}>
                                    <span className="border-b border-dotted border-brand-text-secondary cursor-help">{t('dashboard.closedPositions.aroc')}</span>
                                </Tooltip>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {translatedClosedPositions.map((p, i) => (
                            <tr key={`${p.symbol}-${i}`} className="border-b border-brand-card last:border-b-0 hover:bg-brand-card/50">
                                <td className="p-2">{p.assetCategory}</td>
                                <td className="p-2 font-mono">{p.symbol}</td>
                                <td className={`p-2 font-mono text-right ${p.realizedPL >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                    {formatInSelectedCurrency(p.realizedPL)}
                                </td>
                                <td className={`p-2 font-mono text-right ${p.aroc && p.aroc >= 0 ? 'text-brand-success' : 'text-brand-danger'}`}>
                                    {p.aroc !== undefined ? p.aroc.toLocaleString(locale, { style: 'percent', minimumFractionDigits: 2 }) : '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="flex items-center px-3 py-1 bg-brand-accent text-white font-semibold rounded-lg shadow-md hover:bg-brand-accent-hover disabled:bg-brand-card disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeftIcon className="w-5 h-5" />
                        <span className="ml-1">{t('pagination.prev')}</span>
                    </button>
                    <span className="text-brand-text-secondary text-sm">
                        {t('pagination.page', { currentPage: currentPage, totalPages: totalPages })}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="flex items-center px-3 py-1 bg-brand-accent text-white font-semibold rounded-lg shadow-md hover:bg-brand-accent-hover disabled:bg-brand-card disabled:cursor-not-allowed transition-colors"
                    >
                         <span className="mr-1">{t('pagination.next')}</span>
                         <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ClosedPositions;
