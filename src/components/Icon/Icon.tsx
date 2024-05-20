import { FC } from 'react';
import Star from './icons/Star';
import Location from './icons/Location';
import StrokeStar from './icons/StrokeStar';
import Lens from './icons/Lens';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import Facebook from './icons/Facebook';
import { IconName, SingleIcon } from '../../types';

export interface IconProps extends SingleIcon {
  name: IconName;
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
    case IconName.INSTAGRAM:
      return <Instagram className={className} />;
    case IconName.TWITTER:
      return <Twitter className={className} />;
    case IconName.FACEBOOK:
      return <Facebook className={className} />;

    default:
      throw new Error(`Unknown icon name: ${name}`);
  }
};

export default Icon;
