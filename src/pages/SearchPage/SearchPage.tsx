import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  changeTheme,
  selectThemeMode
} from '../../store/slices/theme/theme.slice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { PlaceType } from '../../types';
import SearchPlacePreviewList from '../../components/SearchPlacePreviewList/SearchPlacePreviewList';

const SearchPage: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectThemeMode);

  const toggleTheme = () => {
    const newThemeMode = theme === 'dark' ? 'light' : 'dark';

    dispatch(changeTheme(newThemeMode));
  };

  const searchPlaceTypes: PlaceType[] = [
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

  return (
    <>
      <Header size="lg" />
      <main className="flex-1 px-8">
        {/* <div className="max-w-3xl">
          <SearchPlacePreview
            key={popularPlaceTypes[0].slug}
            {...popularPlaceTypes[0]}
          />
          <SearchPlacePreview
            key={popularPlaceTypes[1].slug}
            {...popularPlaceTypes[1]}
          />
        </div> */}
        <SearchPlacePreviewList places={searchPlaceTypes} />
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
