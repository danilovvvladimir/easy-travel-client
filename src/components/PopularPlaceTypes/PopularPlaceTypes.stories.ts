import type { Meta, StoryObj } from '@storybook/react';
import PopularPlaceTypes from './PopularPlaceTypes';
import { PlaceType } from '../../types';

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
  }
];

const meta: Meta<typeof PopularPlaceTypes> = {
  title: 'PopularPlaceTypes',
  component: PopularPlaceTypes,
  parameters: {
    layout: 'centered'
  },
  args: {
    places: popularPlaceTypes
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof PopularPlaceTypes>;

export const Default: Story = {};
