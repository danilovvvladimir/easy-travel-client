import { FC, HTMLAttributes } from 'react';
import cn from '../../utils/cn';
import Button from '../Button/Button';

interface TextWithLabelProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  text: string;
  label: string;
}

const TextWithLabel: FC<TextWithLabelProps> = ({
  className,
  onClick,
  text,
  label,
  ...restProps
}) => {
  return (
    <Button
      className={cn(
        'flex w-full flex-col items-start rounded-md bg-description-light px-4 py-2 font-normal hover:bg-description-medium',
        className
      )}
      onClick={onClick}
      {...restProps}
    >
      <div className="text-sm text-description">{label}</div>
      <div className="text-lg text-description-title">{text}</div>
    </Button>
  );
};

export default TextWithLabel;
