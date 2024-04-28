import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      type: 'string',
      defaultValue: 'base',
      options: ['base', 'lg'],
      control: {
        type: 'radio'
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Main: Story = {
  args: {
    size: 'base'
  }
};
