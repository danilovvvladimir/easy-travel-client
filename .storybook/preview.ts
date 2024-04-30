import type { Preview } from '@storybook/react';
import StyleDecorator from './decorators/StyleDecorator';
import RouterDecorator from './decorators/RouterDecorator';
import I18nextDecorator from './decorators/I18nextDecorator';

const globalTypes = {
  locale: {
    toolbar: {
      description: 'Internationalization locale',
      title: 'Locale',
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' }
      ],
      showName: true
    }
  }
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [StyleDecorator, RouterDecorator, I18nextDecorator],
  globalTypes
};

export default preview;
