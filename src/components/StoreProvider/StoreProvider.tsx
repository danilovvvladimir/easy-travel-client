import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from '../../store/store';

interface StoreProviderProps {
  children?: ReactNode;
  preloadedState?: Partial<RootState>;
}

const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState
}) => {
  const store = setupStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
