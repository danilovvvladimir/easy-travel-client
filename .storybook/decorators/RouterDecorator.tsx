import React from 'react';
import { Decorator } from '@storybook/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const RouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
};

export default RouterDecorator;
