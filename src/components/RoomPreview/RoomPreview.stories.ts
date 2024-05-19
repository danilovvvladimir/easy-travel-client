import type { Meta, StoryObj } from '@storybook/react';
import RoomPreview from './RoomPreview';

const roomPreviewProps = {
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

const meta: Meta<typeof RoomPreview> = {
  title: 'RoomPreview',
  component: RoomPreview,
  parameters: {
    layout: 'centered'
  },
  args: {
    ...roomPreviewProps
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof RoomPreview>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    href: '/about'
  }
};
