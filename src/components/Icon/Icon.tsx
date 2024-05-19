import { FC } from 'react';
import Star from './icons/Star';

export interface SingleIconProps {
  className?: string;
}

interface IconProps extends SingleIconProps {
  name: IconName;
}

export enum IconName {
  STAR = 'STAR'
}

const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case IconName.STAR:
      return <Star className={className} />;

    default:
      throw new Error(`Unknown icon name: ${name}`);
  }
};

export default Icon;
