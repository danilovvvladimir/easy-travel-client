import { FC } from 'react';
import Star from './icons/Star';
import Location from './icons/Location';
import StrokeStar from './icons/StrokeStar';
import Lens from './icons/Lens';

export interface SingleIconProps {
  className?: string;
}

interface IconProps extends SingleIconProps {
  name: IconName;
}

export enum IconName {
  STAR = 'STAR',
  LOCATION = 'LOCATION',
  STROKESTAR = 'STROKESTAR',
  LENS = 'LENS'
}

const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case IconName.STAR:
      return <Star className={className} />;
    case IconName.LOCATION:
      return <Location className={className} />;
    case IconName.STROKESTAR:
      return <StrokeStar className={className} />;
    case IconName.LENS:
      return <Lens className={className} />;

    default:
      throw new Error(`Unknown icon name: ${name}`);
  }
};

export default Icon;
