/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  changeTheme,
  selectThemeMode
} from '../../store/slices/theme/theme.slice';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Chip from '../../components/Chip/Chip';
import TextWithLabel from '../../components/TextWithLabel/TextWithLabel';
import PopularDestination from '../../components/PopularDestination/PopularDestination';
import RoomPreview, {
  RoomPreviewProps
} from '../../components/RoomPreview/RoomPreview';

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

  const roomPreviewProps: RoomPreviewProps = {
    img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
    title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
    unitType: 'Entire rental unit',
    location: 'Italy',
    rating: 4.85,
    price: 380,
    maxGuests: 8,
    bedrooms: 2,
    beds: 4,
    baths: 1
  };

  return (
    <>
      <Header />
      <button onClick={toggleLanguage}>123</button>
      <Link to="about">2</Link>
      <Button onClick={toggleTheme}>{t('sign_up')}</Button>
      <div>
        <Chip onClick={() => console.log(1)}>chip</Chip>
      </div>
      <div style={{ width: 400 }}>
        <TextWithLabel
          text="Where do you want to go?"
          label="Find accommodation in"
        />
      </div>

      <div>
        <PopularDestination
          city="Paris"
          country="France"
          img="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          onClick={() => console.log(1)}
        />
      </div>

      <div className="w-[250px]">
        <RoomPreview
          href="/about"
          {...roomPreviewProps}
        />
      </div>
    </>
  );
};

export default HomePage;
