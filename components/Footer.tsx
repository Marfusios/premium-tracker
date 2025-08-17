
import React from 'react';
import { APP_VERSION } from '../version';
import { useLocalization } from '../context/LocalizationContext';

const Footer: React.FC = () => {
    const { t } = useLocalization();

    return (
        <footer className="text-center mt-12 py-8 border-t border-brand-card text-sm">
            <div className="max-w-4xl mx-auto mb-6 px-4">
                <p className="text-xs text-brand-text-secondary">
                    <strong>{t('footer.disclaimerTitle')}:</strong> {t('footer.disclaimerText')}
                </p>
            </div>
          <p className="text-brand-text-secondary">
            {t('footer.createdBy')} Mariusz Kotas
          </p>
          <a href="mailto:m@mkotas.cz" className="text-brand-accent hover:text-brand-accent-hover transition-colors">
            m@mkotas.cz
          </a>
          <p className="text-xs text-brand-text-secondary mt-4">
            {t('footer.version')}: {APP_VERSION}
          </p>
        </footer>
    );
};

export default Footer;
