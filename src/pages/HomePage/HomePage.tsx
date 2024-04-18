import { FC } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
  const { t } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    await i18next.changeLanguage(i18next.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className="text-3xl font-bold underline">
      {t('title')}
      <button onClick={toggleLanguage}>123</button>
      <Link to="about">2</Link>
    </div>
  );
};

export default HomePage;
