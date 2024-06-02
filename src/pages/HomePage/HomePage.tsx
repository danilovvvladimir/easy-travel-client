/* eslint-disable i18next/no-literal-string */
import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePopper } from 'react-popper';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  changeTheme,
  selectThemeMode
} from '../../store/slices/theme/theme.slice';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import RentPropertyBanner from '../../components/RentPropertyBanner/RentPropertyBanner';
import Benefits from '../../components/Benefits/Benefits';
import Portal from '../../components/Portal/Portal';
import Popover from '../../components/Popover/Popover';

const HomePage: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectThemeMode);

  const toggleTheme = () => {
    const newThemeMode = theme === 'dark' ? 'light' : 'dark';

    dispatch(changeTheme(newThemeMode));
  };

  const [isOpened, setIsOpened] = useState(false);

  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  );

  console.log('Render homepage');

  return (
    <>
      <Header />
      <Button onClick={toggleTheme}>123</Button>
      <RentPropertyBanner />
      <Benefits />
      <div>
        <button
          ref={setAnchorElement}
          onClick={() => setIsOpened((opened) => !opened)}
        >
          click
        </button>

        {isOpened && anchorElement && (
          <Popover
            anchorElement={anchorElement}
            closePopover={() => setIsOpened(false)}
            onClickOutside={() => console.log('Test on click outside')}
            placement="bottom"
          >
            Popover content
          </Popover>
        )}
      </div>
    </>
  );
};

export default HomePage;
