
import React, { useState, useCallback, useEffect } from 'react';
import { ParsedData } from './types';
import { parseIbkrCsv } from './services/csvParser';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';
import { LoaderIcon, AlertTriangleIcon } from './constants';
import { useLocalization } from './context/LocalizationContext';

const App: React.FC = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLocalization();

  useEffect(() => {
    document.title = t('app.title');
  }, [t]);

  const handleFileChange = useCallback((file: File) => {
    setIsLoading(true);
    setError(null);
    setParsedData(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setFileContent(text);
    };
    reader.onerror = () => {
      setError(t('app.errors.fileRead'));
      setIsLoading(false);
    };
    reader.readAsText(file);
  }, [t]);

  const handleReset = () => {
    setFileContent(null);
    setParsedData(null);
    setError(null);
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (fileContent) {
      try {
        const data = parseIbkrCsv(fileContent);
        if (data.positions.length === 0 && data.nav.cash === 0) {
            throw new Error(t('app.errors.criticalData'));
        }
        setParsedData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : t('app.errors.unknownParse'));
      } finally {
        setIsLoading(false);
      }
    }
  }, [fileContent, t]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <LoaderIcon className="w-16 h-16 animate-spin text-brand-accent" />
          <p className="mt-4 text-lg">{t('app.loading')}</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
          <AlertTriangleIcon className="w-16 h-16 text-brand-danger" />
          <p className="mt-4 text-lg text-center text-brand-danger">{t('app.errors.title')}</p>
          <p className="mt-2 text-center text-brand-text-secondary">{error}</p>
          <button
            onClick={handleReset}
            className="mt-6 px-6 py-2 bg-brand-accent text-white font-semibold rounded-lg shadow-md hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-opacity-75"
          >
            {t('app.tryAgain')}
          </button>
        </div>
      );
    }
    
    if (parsedData) {
      return <Dashboard data={parsedData} onReset={handleReset} />;
    }

    return <FileUpload onFileSelect={handleFileChange} />;
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary">
      {renderContent()}
    </div>
  );
};

export default App;
