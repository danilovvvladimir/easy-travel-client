import type { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Chip'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    onClick: () => {}
  }
};
