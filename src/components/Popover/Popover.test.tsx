import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import Popover from './Popover';

// TODO: check jest & react-testing-library

describe('Popover', () => {
  const [isOpened, setIsOpened] = useState(false);
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(
    null
  );

  const Wrapper = () => (
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
  );
});
