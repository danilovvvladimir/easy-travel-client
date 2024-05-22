import { Placement } from '@popperjs/core';
import { FC, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import Portal from '../Portal/Portal';

interface PopoverProps {
  children: ReactNode;
  anchorElement: HTMLElement;
  placement?: Placement;
  distance?: number;
  withArrow?: boolean;
  // TODO: make click outside functional
  onClickOutside?: () => void;
}

const Popover: FC<PopoverProps> = ({
  children,
  anchorElement,
  distance = 4,
  placement = 'auto',
  withArrow = false
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles, attributes } = usePopper(anchorElement, popperElement, {
    placement,
    // TODO: expand modifiers
    modifiers: [
      { name: 'arrow', enabled: withArrow },
      { name: 'offset', options: { offset: [0, distance] } }
    ]
  });

  return (
    <Portal>
      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Popover;
