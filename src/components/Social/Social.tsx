import { FC } from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconProps } from '../Icon/Icon';
import cn from '../../utils/cn';

export interface SocialProps extends IconProps {
  href: string;
}

const Social: FC<SocialProps> = ({ href, name, className }) => {
  return (
    <Link
      className={cn(
        'inline-block bg-secondary p-1 rounded-md transition-all duration-300 hover:bg-primary',
        className
      )}
      to={`//${href}`}
      target="_blank"
    >
      <Icon
        name={name}
        className="size-6 fill-white"
      />
    </Link>
  );
};

export default Social;
