import type { Meta, StoryObj } from '@storybook/react';
import Social from './Social';
import { IconName } from '../../types';
import WidthDecorator from '../../../.storybook/decorators/WidthDecorator';

const meta: Meta<typeof Social> = {
  title: 'Social',
  component: Social,
  parameters: {
    layout: 'centered'
  },
  decorators: [WidthDecorator],
  args: {
    name: IconName.STAR
  },
  argTypes: {
    name: {
      type: 'string',
      defaultValue: IconName.STAR,
      options: Object.values(IconName).filter((x) => typeof x === 'string'),
      mapping: IconName,
      control: {
        type: 'select'
      }
    }
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Social>;

export const Default: Story = {
  args: {
    href: 'www.google.com'
  }
};
