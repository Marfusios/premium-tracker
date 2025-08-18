import React, { createContext, useState, useContext, ReactNode, useCallback, useMemo, useEffect } from 'react';
import { en } from '../locales/en';
import { cs } from '../locales/cs';
import { es } from '../locales/es';
import { pl } from '../locales/pl';
import { hr } from '../locales/hr';
import { uk } from '../locales/uk';

type Language = 'en' | 'cs' | 'es' | 'pl' | 'hr' | 'uk';

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
  locale: string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const translations = { en, cs, es, pl, hr, uk };

const getInitialLanguage = (): Language => {
    try {
        const storedLanguage = localStorage.getItem('appLanguage');
        if (storedLanguage && storedLanguage in translations) {
            return storedLanguage as Language;
        }
    } catch (e) {
        console.error('Failed to access localStorage:', e);
    }
    return 'en';
};


export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
        localStorage.setItem('appLanguage', language);
    } catch (e) {
        console.error('Failed to save language to localStorage:', e);
    }
  }, [language]);

  const locale = useMemo(() => {
    switch(language) {
        case 'cs': return 'cs-CZ';
        case 'es': return 'es-ES';
        case 'pl': return 'pl-PL';
        case 'hr': return 'hr-HR';
        case 'uk': return 'uk-UA';
        default: return 'en-US';
    }
  }, [language]);

  const t = useCallback((key: string, replacements: { [key: string]: string | number } = {}): string => {
    const langFile = translations[language];
    const fallbackLangFile = translations.en;

    const getValue = (obj: any, path: string[]) => path.reduce((acc, curr) => (acc && acc[curr] !== undefined ? acc[curr] : undefined), obj);

    const keys = key.split('.');
    let translation = getValue(langFile, keys);

    if (translation === undefined) {
      console.warn(`Translation key not found in '${language}': ${key}`);
      translation = getValue(fallbackLangFile, keys);
      if (translation === undefined) {
        return key; // Return the key itself as a last resort
      }
    }
    
    if (typeof translation === 'string') {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{{${placeholder}}}`, String(replacements[placeholder]));
        });
    }

    return translation as string;
  }, [language]);

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t, locale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};