import { Decorator } from '@storybook/react';

const WidthDecorator: Decorator = (Story) => {
  return (
    <div className="w-[1400px] m-auto">
      <Story />
    </div>
  );
};

export default WidthDecorator;
