import type { Meta, StoryObj } from '@storybook/react';
import PopularDestination from './PopularDestination';

const meta: Meta<typeof PopularDestination> = {
  title: 'PopularDestination',
  component: PopularDestination,
  parameters: {
    layout: 'centered'
  },
  args: {
    city: 'Paris',
    country: 'France',
    img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof PopularDestination>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    onClick: () => {}
  }
};
