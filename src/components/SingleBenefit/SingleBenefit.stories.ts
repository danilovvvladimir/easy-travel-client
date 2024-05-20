import type { Meta, StoryObj } from '@storybook/react';
import { t } from 'i18next';
import SingleBenefit from './SingleBenefit';
import { IconName } from '../Icon/Icon';

const meta: Meta<typeof SingleBenefit> = {
  title: 'SingleBenefit',
  component: SingleBenefit,
  parameters: {
    layout: 'centered'
  },
  args: {},
  argTypes: {
    iconName: {
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
type Story = StoryObj<typeof SingleBenefit>;

export const Default: Story = {
  args: {
    iconName: IconName.LENS,
    title: t('benefits.peace_of_mind.title'),
    description: t('benefits.peace_of_mind.description')
  }
};
