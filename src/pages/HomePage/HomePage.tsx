import { FC, useState } from 'react';
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
import { PlaceType } from '../../types';
import PopularPlaceTypes from '../../components/PopularPlaceTypes/PopularPlaceTypes';
import Slider from '../../components/Slider/Slider';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectThemeMode);

  const toggleTheme = () => {
    const newThemeMode = theme === 'dark' ? 'light' : 'dark';

    dispatch(changeTheme(newThemeMode));
  };

  const popularPlaceTypes: PlaceType[] = [
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva1',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva2',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva3',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva4',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva5',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva6',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva7',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    },
    {
      img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
      unit: 'Entire rental unit',
      slug: 'dimora-natura-riserva8',
      location: 'Italy',
      rating: 4.85,
      price: 380,
      maxGuests: 8,
      bedrooms: 2,
      beds: 4,
      baths: 1
    }
  ];

  const [price, setPrice] = useState([0, 100]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Button onClick={toggleTheme}>123</Button>
        <div className="w-[500px]">
          <div>{price[0]}</div>
          <div>{price[1]}</div>

          <Slider
            value={price}
            onChange={(value) => {
              setPrice(value);
            }}
            defaultValue={[0, 100]}
            ariaLabel={['Leftmost thumb', 'Rightmost thumb']}
            pearling
            minDistance={10}
          />
        </div>
        <PopularPlaceTypes places={popularPlaceTypes} />
        <RentPropertyBanner />
        <Benefits />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
