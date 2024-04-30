import { Decorator } from '@storybook/react';
import i18n from '../../src/config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import React, { Suspense, useEffect } from 'react';

const I18nextDecorator: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

export default I18nextDecorator;
