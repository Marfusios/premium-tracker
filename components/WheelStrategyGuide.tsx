
import React from 'react';
import { CheckCircleIcon, WarningIcon, MoneyIcon, RepeatIcon } from '../constants';
import { useLocalization } from '../context/LocalizationContext';

const AnimatedWheelSVG = () => {
    const { t } = useLocalization();
    return (
    <svg viewBox="0 0 800 500" className="w-full h-auto">
        <style>{`
            .node-text { font-family: sans-serif; fill: #edf2f7; font-size: 16px; font-weight: bold; }
            .node-desc { font-family: sans-serif; fill: #a0aec0; font-size: 12px; }
            .node-box { fill: #2d3748; stroke: #4a5568; stroke-width: 2; rx: 10; }
            .arrow-path { fill: none; stroke-width: 2.5; stroke-linecap: round; }
            
            .path-cash { stroke: #4299e1; }
            .path-premium { stroke: #48bb78; }
            .path-stock { stroke: #ed8936; }
            .path-assign { stroke: #f56565; }
            
            .marker-cash { fill: #4299e1; }
            .marker-premium { fill: #48bb78; }
            .marker-stock { fill: #ed8936; }
            .marker-assign { fill: #f56565; }

            #dot-asset {
                offset-path: path("M 125,380 V 85 L 400,85 L 675,85 V 380 C 550,450 250,450 125,380");
                animation: move-asset 20s linear infinite;
            }
            #dot-put-premium {
                offset-path: path("M 125,50 C 50,0 -50,200 50,380");
                animation: move-put-premium 20s linear infinite;
            }
            #dot-call-premium {
                offset-path: path("M 675,120 C 550,200 450,150, 475,85");
                animation: move-call-premium 20s linear infinite;
            }
            
            @keyframes move-asset {
                0%    { offset-distance: 0%; opacity: 1; fill: #4299e1; }
                10%   { offset-distance: 17.1%; opacity: 1; fill: #4299e1; }
                15%   { offset-distance: 17.1%; opacity: 1; fill: #4299e1; }
                20%   { offset-distance: 17.1%; opacity: 0; fill: #4299e1; }
                20.01%{ offset-distance: 17.1%; opacity: 1; fill: #f56565; }
                30%   { offset-distance: 33.1%; opacity: 1; fill: #f56565; }
                35%   { offset-distance: 33.1%; opacity: 1; fill: #ed8936; }
                50%   { offset-distance: 49.0%; opacity: 1; fill: #ed8936; }
                60%   { offset-distance: 49.0%; opacity: 1; fill: #ed8936; }
                70%   { offset-distance: 65.8%; opacity: 1; fill: #ed8936; }
                75%   { offset-distance: 65.8%; opacity: 1; fill: #4299e1; }
                95%   { offset-distance: 100%; opacity: 1; fill: #4299e1; }
                100%  { offset-distance: 100%; opacity: 1; fill: #4299e1; }
            }

            @keyframes move-put-premium {
                0%    { offset-distance: 0%; opacity: 0; }
                10%   { offset-distance: 0%; opacity: 1; }
                20%   { offset-distance: 100%; opacity: 1; }
                20.01%{ offset-distance: 100%; opacity: 0; }
                100%  { offset-distance: 100%; opacity: 0; }
            }

            @keyframes move-call-premium {
                0%    { offset-distance: 0%; opacity: 0; }
                50%   { offset-distance: 0%; opacity: 1; }
                60%   { offset-distance: 100%; opacity: 1; }
                60.01%{ offset-distance: 100%; opacity: 0; }
                100%  { offset-distance: 100%; opacity: 0; }
            }
        `}</style>
        <defs>
            <marker id="arrow-cash" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="marker-cash" /></marker>
            <marker id="arrow-premium" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="marker-premium" /></marker>
            <marker id="arrow-stock" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="marker-stock" /></marker>
            <marker id="arrow-assign" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className="marker-assign" /></marker>
        </defs>

        <g id="node-cash"><rect x="50" y="345" width="150" height="70" className="node-box" /><text x="125" y="375" textAnchor="middle" className="node-text">{t('guide.diagram.nodes.yourCash')}</text><text x="125" y="395" textAnchor="middle" className="node-desc">{t('guide.diagram.nodes.startEnd')}</text></g>
        <g id="node-sell-put"><rect x="50" y="50" width="150" height="70" className="node-box" /><text x="125" y="80" textAnchor="middle" className="node-text">{t('guide.diagram.nodes.sellPut')}</text><text x="125" y="100" textAnchor="middle" className="node-desc">{t('guide.diagram.nodes.collectPremium')}</text></g>
        <g id="node-own-stock"><rect x="325" y="50" width="150" height="70" className="node-box" /><text x="400" y="80" textAnchor="middle" className="node-text">{t('guide.diagram.nodes.ownShares')}</text><text x="400" y="100" textAnchor="middle" className="node-desc">{t('guide.diagram.nodes.fromAssignment')}</text></g>
        <g id="node-sell-call"><rect x="600" y="50" width="150" height="70" className="node-box" /><text x="675" y="80" textAnchor="middle" className="node-text">{t('guide.diagram.nodes.sellCall')}</text><text x="675" y="100" textAnchor="middle" className="node-desc">{t('guide.diagram.nodes.collectPremium')}</text></g>
        <g id="node-sell-shares"><rect x="600" y="345" width="150" height="70" className="node-box" /><text x="675" y="375" textAnchor="middle" className="node-text">{t('guide.diagram.nodes.sellShares')}</text><text x="675" y="395" textAnchor="middle" className="node-desc">{t('guide.diagram.nodes.calledAway')}</text></g>

        <g id="legend" transform="translate(310, 200)">
            <rect x="0" y="0" width="180" height="100" rx="5" fill="#1a202c" stroke="#4a5568" />
            <text x="90" y="18" textAnchor="middle" fill="#edf2f7" fontSize="12" fontWeight="bold">{t('guide.diagram.legend.title')}</text>
            <g transform="translate(10, 30)"><rect width="10" height="10" className="marker-cash" rx="2" /><text x="15" y="9" className="node-desc">{t('guide.diagram.legend.cashFlow')}</text></g>
            <g transform="translate(10, 50)"><rect width="10" height="10" className="marker-premium" rx="2" /><text x="15" y="9" className="node-desc">{t('guide.diagram.legend.premiumIncome')}</text></g>
            <g transform="translate(10, 70)"><rect width="10" height="10" className="marker-stock" rx="2" /><text x="15" y="9" className="node-desc">{t('guide.diagram.legend.stockHolding')}</text></g>
            <g transform="translate(100, 30)"><rect width="10" height="10" className="marker-assign" rx="2" /><text x="15" y="9" className="node-desc">{t('guide.diagram.legend.assignment')}</text></g>
        </g>
        
        <path d="M 125 345 V 120" className="arrow-path path-cash" markerEnd="url(#arrow-cash)" />
        <path d="M 125 50 C 50 0, -50,200 50,380" className="arrow-path path-premium" markerEnd="url(#arrow-premium)" />
        <path d="M 200 85 H 325" className="arrow-path path-assign" markerEnd="url(#arrow-assign)" />
        <path d="M 475 85 H 600" className="arrow-path path-stock" markerEnd="url(#arrow-stock)" />
        <path d="M 675 120 C 550 200, 450 150, 475 85" className="arrow-path path-premium" markerEnd="url(#arrow-premium)" />
        <path d="M 675 120 V 345" className="arrow-path path-stock" markerEnd="url(#arrow-stock)" />
        <path d="M 600 380 C 475 450, 325 450, 200 380" className="arrow-path path-cash" markerEnd="url(#arrow-cash)" />

        <circle id="dot-asset" r="7" />
        <circle id="dot-put-premium" r="7" className="marker-premium" />
        <circle id="dot-call-premium" r="7" className="marker-premium" />
    </svg>
    )
};

const PutDiagram = () => {
    const { t } = useLocalization();
    return (
    <svg viewBox="0 0 400 250" className="w-full h-auto bg-brand-card/30 rounded-lg">
        <defs>
            <linearGradient id="put-profit-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#48bb78" stopOpacity="0.3"/><stop offset="100%" stopColor="#48bb78" stopOpacity="0"/></linearGradient>
            <linearGradient id="put-loss-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f56565" stopOpacity="0"/><stop offset="100%" stopColor="#f56565" stopOpacity="0.4"/></linearGradient>
        </defs>
        <path d="M 30 200 L 370 200" stroke="#a0aec0" strokeWidth="1" />
        <path d="M 50 30 L 50 230" stroke="#a0aec0" strokeWidth="1" />
        <text x="375" y="205" fill="#a0aec0" fontSize="10">{t('guide.diagram.stockPrice')}</text>
        <text x="45" y="25" fill="#a0aec0" fontSize="10" textAnchor="end">{t('guide.diagram.pl')}</text>
        <path d="M 50 140 L 120 70 L 370 70" stroke="#38b2ac" strokeWidth="2" fill="none"/>
        <polygon points="50,140 120,70 370,70 370,200 50,200" fill="url(#put-loss-grad)" />
        <polygon points="120,70 370,70 370,200 120,200" fill="url(#put-profit-grad)" />
        <path d="M 120 70 V 210" stroke="#a0aec0" strokeDasharray="3 3" />
        <text x="120" y="225" fill="#edf2f7" fontSize="12" textAnchor="middle">{t('guide.diagram.strikePrice')}</text>
        <path d="M 80 110 V 210" stroke="#a0aec0" strokeDasharray="3 3" />
        <circle cx="80" cy="110" r="4" fill="#38b2ac" />
        <text x="80" y="100" fill="#edf2f7" fontSize="12" textAnchor="middle">{t('guide.diagram.breakeven')}</text>
        <text x="80" y="225" fill="#a0aec0" fontSize="10" textAnchor="middle">{t('guide.diagram.breakevenPutDesc')}</text>
        <text x="245" y="60" fill="#48bb78" fontSize="14" textAnchor="middle" fontWeight="bold">{t('guide.diagram.maxProfit')}</text>
        <text x="245" y="80" fill="#48bb78" fontSize="12" textAnchor="middle">{t('guide.diagram.maxProfitDesc')}</text>
        <text x="70" y="150" fill="#f56565" fontSize="14" textAnchor="middle" fontWeight="bold">{t('guide.diagram.lossArea')}</text>
    </svg>
)};

const CallDiagram = () => {
    const { t } = useLocalization();
    return (
     <svg viewBox="0 0 400 250" className="w-full h-auto bg-brand-card/30 rounded-lg">
        <defs>
            <linearGradient id="call-profit-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#48bb78" stopOpacity="0.3"/><stop offset="100%" stopColor="#48bb78" stopOpacity="0.1"/></linearGradient>
            <linearGradient id="call-loss-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f56565" stopOpacity="0.4"/><stop offset="100%" stopColor="#f56565" stopOpacity="0.1"/></linearGradient>
        </defs>
        <path d="M 30 180 L 370 180" stroke="#a0aec0" strokeWidth="1" />
        <path d="M 50 30 L 50 230" stroke="#a0aec0" strokeWidth="1" />
        <text x="375" y="185" fill="#a0aec0" fontSize="10">{t('guide.diagram.stockPrice')}</text>
        <text x="45" y="25" fill="#a0aec0" fontSize="10" textAnchor="end">{t('guide.diagram.pl')}</text>
        <path d="M 50 230 L 280 60 L 370 60" stroke="#38b2ac" strokeWidth="2" fill="none"/>
        <polygon points="170,180 280,60 370,60 370,180" fill="url(#call-profit-grad)" />
        <polygon points="50,230 170,180 50,180" fill="url(#call-loss-grad)" />
        <path d="M 280 60 V 190" stroke="#a0aec0" strokeDasharray="3 3" />
        <text x="280" y="205" fill="#edf2f7" fontSize="12" textAnchor="middle">{t('guide.diagram.strikePrice')}</text>
        <path d="M 190 160 V 190" stroke="#a0aec0" strokeDasharray="3 3" />
        <text x="190" y="205" fill="#edf2f7" fontSize="12" textAnchor="middle">{t('guide.diagram.yourCostBasis')}</text>
        <path d="M 170 180 V 170" stroke="#a0aec0" strokeDasharray="3 3" />
        <circle cx="170" cy="180" r="4" fill="#38b2ac" />
        <text x="120" y="170" fill="#edf2f7" fontSize="12" textAnchor="middle">{t('guide.diagram.breakeven')}</text>
        <text x="120" y="195" fill="#a0aec0" fontSize="10" textAnchor="middle">{t('guide.diagram.breakevenCallDesc')}</text>
        <text x="325" y="50" fill="#48bb78" fontSize="14" textAnchor="middle" fontWeight="bold">{t('guide.diagram.maxProfit')}</text>
        <text x="325" y="70" fill="#48bb78" fontSize="12" textAnchor="middle">{t('guide.diagram.maxProfitCapped')}</text>
        <text x="80" y="215" fill="#f56565" fontSize="14" textAnchor="middle" fontWeight="bold">{t('guide.diagram.lossArea')}</text>
    </svg>
)};


const WheelStrategyGuide: React.FC = () => {
    const { t } = useLocalization();
    return (
        <>
            <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-12">
                <h3 className="text-2xl font-bold text-center mb-4">{t('guide.title')}</h3>
                <AnimatedWheelSVG />
                <p className="text-center text-sm text-brand-text-secondary mt-4">
                    {t('guide.diagram.footer')}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="bg-brand-surface rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center"><span className="text-3xl font-bold text-brand-accent mr-3">1</span>{t('guide.step1.title')}</h3>
                    <p className="text-brand-text-secondary mb-4">
                        {t('guide.step1.description')}
                    </p>
                    <PutDiagram />
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-brand-success mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-primary">{t('guide.step1.outcomeA.title')}</h4>
                                <p className="text-brand-text-secondary text-sm">{t('guide.step1.outcomeA.description')}</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <RepeatIcon className="w-6 h-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-primary">{t('guide.step1.outcomeB.title')}</h4>
                                <p className="text-brand-text-secondary text-sm">{t('guide.step1.outcomeB.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-brand-surface rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center"><span className="text-3xl font-bold text-brand-accent mr-3">2</span>{t('guide.step2.title')}</h3>
                    <p className="text-brand-text-secondary mb-4">
                       {t('guide.step2.description')}
                    </p>
                    <CallDiagram />
                     <div className="mt-6 space-y-4">
                        <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-brand-success mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-primary">{t('guide.step2.outcomeA.title')}</h4>
                                <p className="text-brand-text-secondary text-sm">{t('guide.step2.outcomeA.description')}</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <MoneyIcon className="w-6 h-6 text-brand-accent mr-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-brand-text-primary">{t('guide.step2.outcomeB.title')}</h4>
                                <p className="text-brand-text-secondary text-sm">{t('guide.step2.outcomeB.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-brand-card/30 border border-brand-success/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-brand-success mb-3">{t('guide.benefits.title')}</h3>
                    <ul className="space-y-2 text-brand-text-secondary list-disc list-inside">
                        <li><span className="text-brand-text-primary font-semibold">{t('guide.benefits.benefit1.title')}:</span> {t('guide.benefits.benefit1.description')}</li>
                        <li><span className="text-brand-text-primary font-semibold">{t('guide.benefits.benefit2.title')}:</span> {t('guide.benefits.benefit2.description')}</li>
                        <li><span className="text-brand-text-primary font-semibold">{t('guide.benefits.benefit3.title')}:</span> {t('guide.benefits.benefit3.description')}</li>
                    </ul>
                </div>
                 <div className="bg-brand-card/30 border border-brand-danger/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-brand-danger mb-3">{t('guide.risks.title')}</h3>
                    <ul className="space-y-2 text-brand-text-secondary list-disc list-inside">
                        <li><span className="text-brand-text-primary font-semibold">{t('guide.risks.risk1.title')}:</span> {t('guide.risks.risk1.description')}</li>
                        <li><span className="text-brand-text-primary font-semibold">{t('guide.risks.risk2.title')}:</span> {t('guide.risks.risk2.description')}</li>
                        <li><span className="text-brand-text-primary font-semibold">{t('guide.risks.risk3.title')}:</span> {t('guide.risks.risk3.description')}</li>
                    </ul>
                </div>
            </div>
             <div className="mt-12 text-center bg-brand-surface rounded-lg p-8">
                <h3 className="text-2xl font-bold text-brand-accent mb-2">{t('guide.copilot.title')}</h3>
                <p className="max-w-3xl mx-auto text-lg text-brand-text-secondary">
                    {t('guide.copilot.description')}
                </p>
            </div>
        </>
    );
};

export default WheelStrategyGuide;
