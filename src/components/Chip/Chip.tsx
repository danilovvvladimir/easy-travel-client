import { FC, HTMLAttributes } from 'react';
import Button from '../Button/Button';
import cn from '../../utils/cn';

interface ChipProps
  extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {}

const Chip: FC<ChipProps> = ({
  children,
  className,
  onClick,
  ...restProps
}) => {
  const baseClassName =
    'font-normal inline-flex items-center justify-center rounded-md bg-description-light text-description-title px-3 py-1';

  if (onClick) {
    const btnClassName = 'hover:bg-description-medium';

    return (
      <Button
        className={cn(baseClassName, btnClassName, className)}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </Button>
    );
  }

  return (
    <div
      className={cn(baseClassName, className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Chip;
