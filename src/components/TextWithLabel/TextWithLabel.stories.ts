import type { Meta, StoryObj } from '@storybook/react';
import TextWithLabel from './TextWithLabel';

const meta: Meta<typeof TextWithLabel> = {
  title: 'TextWithLabel',
  component: TextWithLabel,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof TextWithLabel>;

export const Default: Story = {
  args: {
    text: 'main text',
    label: 'label text',
    onClick: () => {}
  }
};
