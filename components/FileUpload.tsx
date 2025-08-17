
import React, { useState, useCallback } from 'react';
import { UploadIcon, ChevronDownIcon, ChevronUpIcon } from '../constants';
import { InteractiveBrokersLogo } from './InteractiveBrokersLogo';
import Footer from './Footer';
import WheelStrategyGuide from './WheelStrategyGuide';
import { statementsImageSrc, activityImageSrc } from './imageSources';
import { useLocalization } from '../context/LocalizationContext';
import LanguageSwitcher from './LanguageSwitcher';


interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isInstructionsVisible, setIsInstructionsVisible] = useState(false);
  const [isGuideVisible, setIsGuideVisible] = useState(false);
  const { t } = useLocalization();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  }, [onFileSelect]);

  return (
    <div className="flex items-center justify-center min-h-screen py-12 relative">
      <LanguageSwitcher />
      <div className="w-full max-w-6xl p-8">
        <div className="text-center">
            <InteractiveBrokersLogo className="w-96 max-w-full h-auto mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-brand-text-primary mb-2">{t('fileUpload.title')}</h1>
            <p className="text-lg text-brand-text-secondary mb-4">{t('fileUpload.subtitle')}</p>
            <p className="max-w-3xl mx-auto text-md text-brand-text-secondary mb-8">
                {t('fileUpload.description')}
            </p>
        </div>
        
        <label
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`flex justify-center w-full h-64 px-4 transition bg-brand-surface border-2 ${isDragging ? 'border-brand-accent' : 'border-brand-card'} border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}
        >
          <span className="flex flex-col items-center justify-center space-x-2">
            <UploadIcon className="w-16 h-16 text-brand-text-secondary" />
            <span className="font-medium text-brand-text-secondary">
              <span className="text-brand-accent">{t('fileUpload.dropzone.dragAndDrop')}</span> {t('fileUpload.dropzone.or')} <span className="text-brand-accent">{t('fileUpload.dropzone.clickToUpload')}</span> {t('fileUpload.dropzone.yourCsvFile')}
            </span>
            <span className="text-sm text-brand-text-secondary mt-2">{t('fileUpload.dropzone.acceptedFormats')}</span>
          </span>
          <input type="file" name="file_upload" className="hidden" accept=".csv,.txt" onChange={handleFileChange} />
        </label>
         <p className="text-xs text-brand-text-secondary mt-8 text-center">
            {t('fileUpload.privacyNote')}
        </p>

        <div className="mt-16 text-left border-t border-brand-card pt-10">
          <button onClick={() => setIsInstructionsVisible(!isInstructionsVisible)} className="w-full flex justify-between items-center text-left py-2 group">
              <h2 className="text-2xl font-bold text-brand-text-primary group-hover:text-brand-accent transition-colors">{t('fileUpload.instructions.title')}</h2>
              {isInstructionsVisible ? <ChevronUpIcon className="w-8 h-8 text-brand-accent" /> : <ChevronDownIcon className="w-8 h-8 text-brand-text-secondary group-hover:text-brand-accent transition-colors" />}
          </button>
          
          {isInstructionsVisible && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <ol className="list-decimal list-inside space-y-6 text-brand-text-primary text-lg">
                    <li>
                        {t('fileUpload.instructions.step1_part1')}
                        <strong className="text-brand-accent">{t('fileUpload.instructions.step1_strong')}</strong>
                        {t('fileUpload.instructions.step1_part2')}
                    </li>
                    <li>
                        <span>
                            {t('fileUpload.instructions.step2_part1')}
                            <strong className="text-brand-accent">{t('fileUpload.instructions.step2_strong1')}</strong>
                            {t('fileUpload.instructions.step2_part2')}
                            <strong className="text-brand-accent">{t('fileUpload.instructions.step2_strong2')}</strong>
                            {t('fileUpload.instructions.step2_part3')}
                        </span>
                        <figure className="mt-4 pr-4">
                           <img src={statementsImageSrc} alt="Interactive Brokers Statements Page" className="rounded-lg shadow-lg border border-brand-card" />
                           <figcaption className="text-xs text-center mt-2 text-brand-text-secondary">{t('fileUpload.instructions.caption1')}</figcaption>
                        </figure>
                    </li>
                    <li>
                        {t('fileUpload.instructions.step3_part1')}
                        <strong className="text-brand-accent">{t('fileUpload.instructions.step3_strong')}</strong>
                        {t('fileUpload.instructions.step3_part2')}
                    </li>
                    <li>
                        <span>
                            {t('fileUpload.instructions.step4_part1')}
                            <strong className="text-brand-accent">{t('fileUpload.instructions.step4_strong1')}</strong>
                            {t('fileUpload.instructions.step4_part2')}
                            <strong className="text-brand-accent">{t('fileUpload.instructions.step4_strong2')}</strong>
                            {t('fileUpload.instructions.step4_part3')}
                        </span>
                        <figure className="mt-4 pr-4">
                           <img src={activityImageSrc} alt="Activity Statement Download Modal" className="rounded-lg shadow-lg border border-brand-card" />
                           <figcaption className="text-xs text-center mt-2 text-brand-text-secondary">{t('fileUpload.instructions.caption2')}</figcaption>
                        </figure>
                    </li>
                </ol>
              </div>
              <div className="prose prose-invert text-brand-text-secondary bg-brand-surface p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-text-primary">{t('fileUpload.instructions.notes.title')}</h3>
                <ul>
                  <li>{t('fileUpload.instructions.notes.note1')}</li>
                  <li>{t('fileUpload.instructions.notes.note2')}</li>
                  <li>{t('fileUpload.instructions.notes.note3')}</li>
                  <li>{t('fileUpload.instructions.notes.note4')}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-10 text-left border-t border-brand-card pt-10">
          <button onClick={() => setIsGuideVisible(!isGuideVisible)} className="w-full flex justify-between items-center text-left py-2 group">
              <h2 className="text-2xl font-bold text-brand-text-primary group-hover:text-brand-accent transition-colors">{t('fileUpload.guide.title')}</h2>
              {isGuideVisible ? <ChevronUpIcon className="w-8 h-8 text-brand-accent" /> : <ChevronDownIcon className="w-8 h-8 text-brand-text-secondary group-hover:text-brand-accent transition-colors" />}
          </button>
          
          {isGuideVisible && (
            <div className="mt-8">
                <p className="max-w-3xl mx-auto text-center text-lg text-brand-text-secondary mb-12">
                    {t('fileUpload.guide.description')}
                </p>
                <WheelStrategyGuide />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default FileUpload;