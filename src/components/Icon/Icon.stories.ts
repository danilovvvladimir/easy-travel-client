import type { Meta, StoryObj } from '@storybook/react';
import Icon, { IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
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
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
