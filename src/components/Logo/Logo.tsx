import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Link to="/">
      <img
        src="/static/images/logo.svg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
