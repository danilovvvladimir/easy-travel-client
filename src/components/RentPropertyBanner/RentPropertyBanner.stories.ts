import type { Meta, StoryObj } from '@storybook/react';
import RentPropertyBanner from './RentPropertyBanner';

const meta: Meta<typeof RentPropertyBanner> = {
  title: 'RentPropertyBanner',
  component: RentPropertyBanner,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'RentPropertyBanner'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof RentPropertyBanner>;

export const Default: Story = {};
