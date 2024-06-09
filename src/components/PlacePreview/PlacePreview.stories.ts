import type { Meta, StoryObj } from '@storybook/react';
import PlacePreview from './PlacePreview';
import { PlaceType } from '../../types';

const placePreviewProps: PlaceType = {
  img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  title: 'Dimora Natura-Riserva Naturale Valle di Bondo',
  unit: 'Entire rental unit',
  slug: 'dimora-natura-riserva',
  location: 'Italy',
  rating: 4.85,
  price: 380,
  maxGuests: 8,
  bedrooms: 2,
  beds: 4,
  baths: 1
};

const meta: Meta<typeof PlacePreview> = {
  title: 'PlacePreview',
  component: PlacePreview,
  parameters: {
    layout: 'centered'
  },
  args: {
    ...placePreviewProps
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof PlacePreview>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {}
};
