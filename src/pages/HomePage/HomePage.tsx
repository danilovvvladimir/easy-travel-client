import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  changeTheme,
  selectThemeMode
} from '../../store/slices/theme/theme.slice';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import RentPropertyBanner from '../../components/RentPropertyBanner/RentPropertyBanner';
import Benefits from '../../components/Benefits/Benefits';
import Footer from '../../components/Footer/Footer';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectThemeMode);

  const toggleTheme = () => {
    const newThemeMode = theme === 'dark' ? 'light' : 'dark';

    dispatch(changeTheme(newThemeMode));
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <Button onClick={toggleTheme}>123</Button>
        <RentPropertyBanner />
        <Benefits />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
