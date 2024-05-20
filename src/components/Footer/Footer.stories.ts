import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import WidthDecorator from '../../../.storybook/decorators/WidthDecorator';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  decorators: [WidthDecorator],
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
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    size: 'base'
  }
};
