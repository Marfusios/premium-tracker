
import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import { ParsedData } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';
import LanguageSwitcher from '../LanguageSwitcher';
import { InteractiveBrokersLogo } from '../InteractiveBrokersLogo';
import { ChevronLeftIcon, DownloadIcon, StocksIcon, CheckCircleIcon, RepeatIcon, TrendingUpIcon } from '../../constants';
import MetricCard from '../MetricCard';
import AllocationCharts from './AllocationCharts';
import PLSummary from './PLSummary';
import MonthlyPerformanceChart from './MonthlyIncomeChart';

interface PublicDashboardProps {
  data: ParsedData;
  dashboardData: any;
  onExit: () => void;
}

const PublicDashboard: React.FC<PublicDashboardProps> = ({ data, dashboardData, onExit }) => {
    const { t, locale } = useLocalization();
    const publicContentRef = useRef<HTMLDivElement>(null);
    const exportMenuRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);
    const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (exportMenuRef.current && !exportMenuRef.current.contains(event.target as Node)) {
                setIsExportMenuOpen(false);
            }
        };

        if (isExportMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExportMenuOpen]);

    const handleExport = (format: 'png' | 'svg') => {
        if (!publicContentRef.current) return;
        
        setIsExporting(true);
        setIsExportMenuOpen(false);
        const node = publicContentRef.current;
        const exportOptions = { 
            backgroundColor: '#1a202c', 
        };

        const generateImage = format === 'png' 
            ? htmlToImage.toPng(node, { ...exportOptions, pixelRatio: 2 })
            : htmlToImage.toSvg(node, exportOptions);

        generateImage.then((dataUrl) => {
            const link = document.createElement('a');
            const date = new Date().toISOString().split('T')[0];
            link.download = `portfolio-snapshot-${date}.${format}`;
            link.href = dataUrl;
            link.click();
        }).catch((err) => {
            console.error('oops, something went wrong!', err);
        }).finally(() => {
            setIsExporting(false);
        });
    };

    const wheelSummary = useMemo(() => {
        const { completedCycles } = data.wheelCycleAnalysis;
        if (completedCycles.length === 0) return { annualizedReturn: 0 };
        const totalPL = completedCycles.reduce((sum, cycle) => sum + cycle.totalPL, 0);
        const totalCapitalYears = completedCycles.reduce((sum, cycle) => {
            const capitalYears = cycle.netAssignmentCost * (cycle.durationDays / 365);
            return sum + capitalYears;
        }, 0);
        return {
            annualizedReturn: totalCapitalYears > 0 ? totalPL / totalCapitalYears : 0,
        };
    }, [data.wheelCycleAnalysis]);

    const allocationTooltipFormatter = (value: number, name: string, props: any) => {
        const percent = props.payload?.percent;
        if (percent) {
            return `${(percent * 100).toFixed(1)}%`;
        }
        return name;
    };

    const formatPercent = useMemo(() => (value: number) => {
        return value.toLocaleString(locale, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }, [locale]);

    const formatPercentForAxis = useMemo(() => (value: number) => {
        return value.toLocaleString(locale, { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 1 });
    }, [locale]);
    
    const totalNAV = data.totalNAV;

    const plSummaryInPercent = useMemo(() => {
        if (totalNAV === 0) return data.plSummary; // Avoid division by zero
        const percentSummary: any = {};
        for (const category of ['stocks', 'options', 'forex', 'total']) {
            const key = category as keyof typeof data.plSummary;
            percentSummary[key] = {
                realized: data.plSummary[key].realized / totalNAV,
                unrealized: data.plSummary[key].unrealized / totalNAV,
                total: data.plSummary[key].total / totalNAV,
            };
        }
        return percentSummary as ParsedData['plSummary'];
    }, [data.plSummary, totalNAV]);
    
    const monthlySummaryInPercent = useMemo(() => {
        if (totalNAV === 0) return data.monthlySummary; // Avoid division by zero
        return data.monthlySummary.map(item => ({
            ...item,
            optionsPL: item.optionsPL / totalNAV,
            optionsPremium: item.optionsPremium / totalNAV,
            syepIncome: item.syepIncome / totalNAV,
            interest: item.interest / totalNAV,
        }));
    }, [data.monthlySummary, totalNAV]);

  return (
    <div className="min-h-screen bg-brand-bg p-4 sm:p-6 lg:p-8 relative">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <header className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <button onClick={onExit} className="flex items-center px-4 py-2 bg-brand-accent text-white font-semibold rounded-lg shadow-md hover:bg-brand-accent-hover">
                    <ChevronLeftIcon className="w-5 h-5 mr-2" />
                    {t('publicDashboard.backButton')}
                </button>
                <div className="flex items-center gap-4">
                    <LanguageSwitcher className="" />
                     <div className="relative" ref={exportMenuRef}>
                        <button 
                            onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
                            disabled={isExporting} 
                            className="flex items-center px-4 py-2 bg-brand-card text-brand-text-primary font-semibold rounded-lg shadow-md hover:bg-brand-surface disabled:opacity-50 disabled:cursor-wait"
                        >
                           <DownloadIcon className="w-5 h-5 mr-2" />
                           <span>{isExporting ? t('publicDashboard.exporting') : t('publicDashboard.export')}</span>
                        </button>
                        {isExportMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-brand-card rounded-md shadow-lg z-10">
                                <button onClick={() => handleExport('png')} className="w-full text-left block px-4 py-2 text-sm text-brand-text-primary hover:bg-brand-accent-hover rounded-t-md cursor-pointer">{t('publicDashboard.exportAsPng')}</button>
                                <button onClick={() => handleExport('svg')} className="w-full text-left block px-4 py-2 text-sm text-brand-text-primary hover:bg-brand-accent-hover rounded-b-md cursor-pointer">{t('publicDashboard.exportAsSvg')}</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Content to be exported */}
            <div ref={publicContentRef} className="bg-brand-bg">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <InteractiveBrokersLogo className="w-80 max-w-full h-auto mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-brand-text-primary">{t('publicDashboard.reportTitle')}</h1>
                        <p className="text-md text-brand-text-secondary">{t('publicDashboard.period')}: {data.accountInfo.period}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <MetricCard 
                            title={t('dashboard.metrics.twr.title')} 
                            value={`${data.rateOfReturn.toLocaleString(locale, {minimumFractionDigits: 2, maximumFractionDigits: 2})}%`} 
                            icon={<StocksIcon />} 
                            isPositive={data.rateOfReturn >= 0}
                            description={t('dashboard.metrics.twr.description')}
                        />
                        <MetricCard
                            title={t('publicDashboard.metrics.winRate.title')}
                            value={`${(data.optionsStrategyMetrics.winRate * 100).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`}
                            icon={<CheckCircleIcon />}
                            isPositive={data.optionsStrategyMetrics.winRate >= 0.5}
                            description={t('publicDashboard.metrics.winRate.description')}
                        />
                        <MetricCard
                            title={t('publicDashboard.metrics.assignmentRate.title')}
                            value={`${(data.optionsStrategyMetrics.assignmentRate * 100).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`}
                            icon={<RepeatIcon />}
                            description={t('publicDashboard.metrics.assignmentRate.description')}
                        />
                         <MetricCard
                            title={t('publicDashboard.metrics.annualizedReturn.title')}
                            value={`${(wheelSummary.annualizedReturn * 100).toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                            icon={<TrendingUpIcon />}
                            isPositive={wheelSummary.annualizedReturn >= 0}
                            description={t('publicDashboard.metrics.annualizedReturn.description')}
                        />
                    </div>
                    
                    <PLSummary 
                        plSummary={plSummaryInPercent}
                        valueFormatter={formatPercent}
                    />

                    <MonthlyPerformanceChart 
                        data={monthlySummaryInPercent}
                        valueFormatter={formatPercentForAxis}
                        tooltipValueFormatter={formatPercent}
                    />

                    <AllocationCharts
                        portfolioAllocation={dashboardData.portfolioAllocation}
                        assetClassAllocation={dashboardData.assetClassAllocation}
                        formatInSelectedCurrency={() => ''}
                        allocationFilters={{stocks: true, puts: true, calls: true}}
                        onAllocationFilterChange={() => {}}
                        tooltipFormatter={allocationTooltipFormatter}
                    />

                    <div className="text-center mt-12 text-sm text-brand-text-secondary">
                        <p>{t('publicDashboard.generatedBy')}</p>
                        <a href="https://premiumtracker.app/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent-hover transition-colors">
                            https://premiumtracker.app/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PublicDashboard;
