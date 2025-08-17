
import React from 'react';
import { AccountInfo } from '../../types';
import { useLocalization } from '../../context/LocalizationContext';
import { ShareIcon } from '../../constants';

interface HeaderProps {
    accountInfo: AccountInfo;
    exchangeRates: { [currency: string]: number };
    selectedCurrency: string;
    onCurrencyChange: (currency: string) => void;
    onReset: () => void;
    onPublicViewClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ accountInfo, exchangeRates, selectedCurrency, onCurrencyChange, onReset, onPublicViewClick }) => {
    const { t } = useLocalization();

    return (
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
            <div>
                <h1 className="text-3xl font-bold">{t('dashboard.header.title')}</h1>
                <p className="text-brand-text-secondary mt-1">{accountInfo.account} &bull; {accountInfo.period}</p>
            </div>
            <div className="flex items-center space-x-2">
                {Object.keys(exchangeRates).sort().map((currency) => (
                    <button
                        key={currency}
                        onClick={() => onCurrencyChange(currency)}
                        className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                            selectedCurrency === currency
                                ? 'bg-brand-accent text-white'
                                : 'bg-brand-card text-brand-text-secondary hover:bg-brand-accent-hover hover:text-white'
                        }`}
                    >
                        {currency}
                    </button>
                ))}
                <button 
                    onClick={onPublicViewClick} 
                    className="p-2 bg-brand-card text-brand-text-secondary rounded-lg shadow-md hover:bg-brand-accent-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-75"
                    title={t('publicDashboard.publicViewButtonTooltip')}
                >
                    <ShareIcon className="w-5 h-5" />
                </button>
                <button onClick={onReset} className="px-4 py-2 bg-brand-accent text-white font-semibold rounded-lg shadow-md hover:bg-brand-accent-hover self-start">
                    {t('dashboard.header.analyzeNewFile')}
                </button>
            </div>
        </div>
    );
}

export default Header;
