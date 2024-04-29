import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Language Switcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered'
  }
};
export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Main: Story = {};
