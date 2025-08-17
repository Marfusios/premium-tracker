
import React, { useMemo } from 'react';
import { ResponsiveContainer, Sankey, Tooltip, Rectangle } from 'recharts';
import { NAVChange } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';

interface NAVSankeyChartProps {
    navChange: NAVChange;
    formatInSelectedCurrency: (value: number) => string;
}

const NAVSankeyChart: React.FC<NAVSankeyChartProps> = ({ navChange, formatInSelectedCurrency }) => {
    const { t } = useLocalization();
    
    const { data, nodeColors } = useMemo(() => {
        if (!navChange) return { data: { nodes: [], links: [] }, nodeColors: {} };

        const {
            startingValue,
            markToMarket,
            depositsAndWithdrawals,
            interest,
            changeInInterestAccruals,
            otherFees,
            commissions,
            salesTax,
            otherFXTranslations,
            endingValue
        } = navChange;
        
        const nodeTranslations: { [key: string]: string } = {
            'Starting NAV': t('dashboard.navSankey.nodes.startingNAV'),
            'Deposits': t('dashboard.navSankey.nodes.deposits'),
            'M2M Gains': t('dashboard.navSankey.nodes.m2mGains'),
            'Interest & FX Gains': t('dashboard.navSankey.nodes.interestFXGains'),
            'Gross Value': t('dashboard.navSankey.nodes.grossValue'),
            'Ending NAV': t('dashboard.navSankey.nodes.endingNAV'),
            'Withdrawals': t('dashboard.navSankey.nodes.withdrawals'),
            'M2M Losses': t('dashboard.navSankey.nodes.m2mLosses'),
            'Commissions': t('dashboard.navSankey.nodes.commissions'),
            'Fees & Tax': t('dashboard.navSankey.nodes.feesTax'),
            'Interest Paid': t('dashboard.navSankey.nodes.interestPaid'),
        };

        const nodes: { name: string }[] = [];
        const links: { source: number, target: number, value: number, color: string }[] = [];
        const nodeMap = new Map<string, number>();

        const addNode = (name: string) => {
            if (!nodeMap.has(name)) {
                nodeMap.set(name, nodes.length);
                nodes.push({ name });
            }
            return nodeMap.get(name)!;
        };

        const addLink = (sourceName: string, targetName: string, value: number, color: string) => {
            if (value <= 0) return;
            const source = addNode(nodeTranslations[sourceName] || sourceName);
            const target = addNode(nodeTranslations[targetName] || targetName);
            links.push({ source, target, value, color });
        };

        const grossValueNode = 'Gross Value';

        // --- Inflows ---
        addLink('Starting NAV', grossValueNode, startingValue, 'rgba(74, 85, 104, 0.6)');
        if (depositsAndWithdrawals > 0) addLink('Deposits', grossValueNode, depositsAndWithdrawals, 'rgba(56, 178, 172, 0.6)');
        if (markToMarket > 0) addLink('M2M Gains', grossValueNode, markToMarket, 'rgba(72, 187, 120, 0.6)');
        
        const interestAndFx = interest + changeInInterestAccruals + otherFXTranslations;
        if (interestAndFx > 0) addLink('Interest & FX Gains', grossValueNode, interestAndFx, 'rgba(104, 211, 145, 0.6)');

        // --- Outflows ---
        addLink(grossValueNode, 'Ending NAV', endingValue, 'rgba(74, 85, 104, 0.6)');

        if (depositsAndWithdrawals < 0) addLink(grossValueNode, 'Withdrawals', -depositsAndWithdrawals, 'rgba(245, 101, 101, 0.6)');
        if (markToMarket < 0) addLink(grossValueNode, 'M2M Losses', -markToMarket, 'rgba(229, 62, 62, 0.6)');
        if (commissions < 0) addLink(grossValueNode, 'Commissions', -commissions, 'rgba(197, 48, 48, 0.6)');
        
        const feesAndTax = otherFees + salesTax;
        if (feesAndTax < 0) addLink(grossValueNode, 'Fees & Tax', -feesAndTax, 'rgba(155, 44, 44, 0.6)');
        
        if (interestAndFx < 0) addLink(grossValueNode, 'Interest Paid', -interestAndFx, 'rgba(116, 42, 42, 0.6)');
        
        const definedNodeColors: { [key: string]: string } = {
            [nodeTranslations['Starting NAV']]: '#4a5568',
            [nodeTranslations['Deposits']]: '#38b2ac',
            [nodeTranslations['M2M Gains']]: '#48bb78',
            [nodeTranslations['Interest & FX Gains']]: '#68d391',
            [nodeTranslations['Gross Value']]: '#a0aec0',
            [nodeTranslations['Ending NAV']]: '#4a5568',
            [nodeTranslations['Withdrawals']]: '#f56565',
            [nodeTranslations['M2M Losses']]: '#e53e3e',
            [nodeTranslations['Commissions']]: '#c53030',
            [nodeTranslations['Fees & Tax']]: '#9b2c2c',
            [nodeTranslations['Interest Paid']]: '#742a2a',
        };

        return { data: { nodes, links }, nodeColors: definedNodeColors };
    }, [navChange, t]);

    if (data.nodes.length === 0) return null;

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const dataPoint = payload[0];
            const linkPayload = dataPoint.payload;

            // Check if it's a link payload
            if (linkPayload && linkPayload.source && linkPayload.target) {
                const { source, target, value } = linkPayload;
                return (
                    <div className="bg-brand-card p-2 rounded-md shadow-lg border border-brand-surface">
                        <p className="text-brand-text-primary">
                            {source.name} &rarr; {target.name}:{' '}
                            <span className="font-bold">{formatInSelectedCurrency(value)}</span>
                        </p>
                    </div>
                );
            }

            // Check if it's a node payload
            if (dataPoint && dataPoint.name) {
                 return (
                     <div className="bg-brand-card p-2 rounded-md shadow-lg border border-brand-surface">
                        <p className="text-brand-text-primary">
                            {dataPoint.name}:{' '}
                            <span className="font-bold">{formatInSelectedCurrency(dataPoint.value)}</span>
                        </p>
                    </div>
                )
            }
        }
        return null;
    };

    const CustomNode = (props: any) => {
        const { x, y, width, height, payload } = props;
        const nodeName = payload.name;
        const isStartOrEndNode = x < 150;

        return (
            <g>
                <Rectangle
                    {...props}
                    fill={nodeColors[nodeName] || '#a0aec0'}
                    fillOpacity="0.9"
                    strokeWidth={0}
                />
                <text
                    x={isStartOrEndNode ? x + width + 6 : x - 6}
                    y={y + height / 2}
                    textAnchor={isStartOrEndNode ? 'start' : 'end'}
                    dominantBaseline="middle"
                    fill="#edf2f7"
                    style={{ fontWeight: 'bold' }}
                >
                    {nodeName}
                </text>
                 <text
                    x={isStartOrEndNode ? x + width + 6 : x - 6}
                    y={y + height / 2 + 18}
                    textAnchor={isStartOrEndNode ? 'start' : 'end'}
                    dominantBaseline="middle"
                    fill="#a0aec0"
                    fontSize="0.9em"
                >
                    {formatInSelectedCurrency(payload.value)}
                </text>
            </g>
        );
    };

    const CustomLink = (props: any) => {
        const {
            sourceX, sourceY, sourceControlX,
            targetX, targetY, targetControlX,
            linkWidth, payload
        } = props;
        
        const path = `M${sourceX},${sourceY}C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}`;

        return (
            <path
                d={path}
                stroke={payload.color}
                strokeOpacity={0.5}
                strokeWidth={linkWidth}
                fill="none"
            />
        );
    };

    return (
        <div className="bg-brand-surface rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('dashboard.navSankey.title')}</h2>
            <ResponsiveContainer width="100%" height={Math.max(450, data.nodes.length * 55)}>
                <Sankey
                    data={data}
                    node={CustomNode}
                    nodePadding={30}
                    margin={{ top: 20, right: 150, bottom: 40, left: 150 }}
                    link={<CustomLink />}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Sankey>
            </ResponsiveContainer>
        </div>
    );
};

export default NAVSankeyChart;
