import { FC, useEffect, useState } from 'react';
import i18next from 'i18next';
import Button from '../Button/Button';
import getFlagByLanguage from '../../utils/getFlagByLanguage';
import type { Language } from '../../types';

interface LanguageSwitcherProps {}

const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
  const [currentLanguageSrc, setCurrencyLanguageSrc] = useState<string>(
    '/static/images/flags/usa.jpg'
  );

  const toggleLanguage = async (): Promise<void> => {
    await i18next.changeLanguage(i18next.language === 'ru' ? 'en' : 'ru');
    setCurrencyLanguageSrc(getFlagByLanguage(i18next.language as Language));
  };

  useEffect(() => {
    setCurrencyLanguageSrc(getFlagByLanguage(i18next.language as Language));
  }, []);

  return (
    <Button
      className="border-light-primary border-2"
      variant="none"
      size="none"
      onClick={toggleLanguage}
    >
      <img
        src={currentLanguageSrc}
        alt={i18next.language}
      />
    </Button>
  );
};

export default LanguageSwitcher;
