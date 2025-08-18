import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { UKFlag, CzechFlag, SpainFlag, PolishFlag, CroatianFlag, UkrainianFlag } from './flags';

const languages = [
    { code: 'en', name: 'English', Flag: UKFlag },
    { code: 'cs', name: 'Čeština', Flag: CzechFlag },
    { code: 'es', name: 'Español', Flag: SpainFlag },
    { code: 'pl', name: 'Polski', Flag: PolishFlag },
    { code: 'hr', name: 'Hrvatski', Flag: CroatianFlag },
    { code: 'uk', name: 'Українська', Flag: UkrainianFlag },
];

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
    const { language, setLanguage } = useLocalization();

    const sortedLanguages = [...languages].sort((a, b) => a.name.localeCompare(b.name));
    const SelectedFlag = languages.find(lang => lang.code === language)?.Flag || UKFlag;

    const containerClasses = className !== undefined ? className : "absolute top-6 right-6 z-10";

    return (
        <div className={containerClasses}>
            <div className="relative flex items-center bg-brand-surface rounded-lg shadow-md">
                <SelectedFlag className="w-5 h-5 rounded-sm ml-3 pointer-events-none" />
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as 'en' | 'cs' | 'es' | 'pl' | 'hr' | 'uk')}
                    className="pl-2 pr-8 py-1.5 text-sm font-semibold rounded-md transition-colors bg-transparent text-brand-text-primary focus:outline-none appearance-none cursor-pointer"
                    aria-label="Select language"
                >
                    {sortedLanguages.map(lang => (
                        <option key={lang.code} value={lang.code} className="bg-brand-card text-brand-text-primary">
                            {lang.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default LanguageSwitcher;