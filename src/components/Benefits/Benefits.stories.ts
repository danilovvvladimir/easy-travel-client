import type { Meta, StoryObj } from '@storybook/react';
import Benefits from './Benefits';

const meta: Meta<typeof Benefits> = {
  title: 'Benefits',
  component: Benefits,
  parameters: {
    layout: 'centered'
  },
  args: {},
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Benefits>;

export const Default: Story = {};
