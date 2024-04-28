import { FC } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  changeTheme,
  selectThemeMode
} from '../../store/slices/theme/theme.slice';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const HomePage: FC = () => {
  const { t } = useTranslation();

  const toggleLanguage = async (): Promise<void> => {
    await i18next.changeLanguage(i18next.language === 'ru' ? 'en' : 'ru');
  };

  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectThemeMode);

  const toggleTheme = () => {
    const newThemeMode = theme === 'dark' ? 'light' : 'dark';

    dispatch(changeTheme(newThemeMode));
  };

  return (
    <>
      <Header />
      {t('title')}
      <button onClick={toggleLanguage}>123</button>
      <Link to="about">2</Link>
      <Button onClick={toggleTheme}>Sign Up</Button>
    </>
  );
};

export default HomePage;
