import { FC } from 'react';
import type { SingleIconProps } from '../Icon';

const Star: FC<SingleIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 2C24.7612 2 25.4565 2.43214 25.7934 3.11475L31.5085 14.6929L44.2893 16.561C45.0424 16.6711 45.6677 17.1991 45.9025 17.9231C46.1373 18.6472 45.9407 19.4417 45.3955 19.9727L36.149 28.9787L38.3312 41.7019C38.4599 42.4523 38.1514 43.2107 37.5355 43.6581C36.9195 44.1056 36.1029 44.1645 35.4291 43.8101L24 37.7997L12.5709 43.8101C11.8971 44.1645 11.0805 44.1056 10.4645 43.6581C9.84857 43.2107 9.54008 42.4523 9.66878 41.7019L11.851 28.9787L2.60453 19.9727C2.0593 19.4417 1.86275 18.6472 2.09751 17.9231C2.33226 17.1991 2.95762 16.6711 3.71074 16.561L16.4915 14.6929L22.2066 3.11475C22.5435 2.43214 23.2388 2 24 2Z"
        fill="black"
      />
    </svg>
  );
};

export default Star;