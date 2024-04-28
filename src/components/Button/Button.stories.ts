import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Button'
  },
  argTypes: {
    size: {
      type: 'string',
      defaultValue: 'base',
      options: ['sm', 'base', 'lg'],
      control: {
        type: 'radio'
      }
    }
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
};

export const Link: Story = {
  args: {
    href: 'about'
  }
};
