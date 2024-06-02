import { Placement } from '@popperjs/core';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import Portal from '../Portal/Portal';
import cn from '../../utils/cn';

interface PopoverProps {
  children: ReactNode;
  anchorElement: HTMLElement;
  placement?: Placement;
  distance?: number;
  popperClassName?: string;
  closePopover: () => void;
  onClickOutside?: () => void;
}

const Popover: FC<PopoverProps> = ({
  children,
  anchorElement,
  distance = 4,
  placement = 'auto',
  popperClassName,
  closePopover,
  onClickOutside
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(anchorElement, popperElement, {
    placement,
    modifiers: [{ name: 'offset', options: { offset: [0, distance] } }]
  });

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        anchorElement &&
        event.target instanceof Node &&
        !anchorElement.contains(event.target) &&
        popperElement &&
        event.target instanceof Node &&
        !popperElement.contains(event.target)
      ) {
        closePopover();
        onClickOutside?.();
      }
    },
    [anchorElement, closePopover, onClickOutside, popperElement]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Portal>
      <div
        ref={setPopperElement}
        style={styles.popper}
        className={cn('rounded-md px-4 py-2 shadow-md', popperClassName)}
        {...attributes.popper}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Popover;
