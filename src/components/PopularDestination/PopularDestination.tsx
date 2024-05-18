import { FC } from 'react';
import cn from '../../utils/cn';
import Button from '../Button/Button';
import PopularDestinationInner, {
  PopularDestinationInnerProps
} from './PopularDestinationInner';

interface PopularDestinationProps extends PopularDestinationInnerProps {
  className?: string;
  onClick?: () => void;
}

const PopularDestination: FC<PopularDestinationProps> = ({
  city,
  country,
  img,
  onClick,
  className
}) => {
  if (!onClick) {
    return (
      <div
        className={cn('flex w-full p-3 hover:bg-description-light', className)}
      >
        <PopularDestinationInner
          city={city}
          country={country}
          img={img}
        />
      </div>
    );
  }

  return (
    <Button
      variant="none"
      className={cn(
        'flex items-start font-normal justify-start w-full p-3 hover:bg-description-light',
        className
      )}
      onClick={onClick}
    >
      <PopularDestinationInner
        city={city}
        country={country}
        img={img}
      />
    </Button>
  );
};

export default PopularDestination;
