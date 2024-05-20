import { FC } from 'react';
import { SingleIcon } from '../../../types';

const Facebook: FC<SingleIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34.4273 27.3125L35.6718 19.1686H27.8903V13.8837C27.8903 11.6557 28.9773 9.48389 32.4624 9.48389H36V2.5502C36 2.5502 32.7897 2 29.7204 2C23.3121 2 19.1233 5.90059 19.1233 12.9617V19.1686H12V27.3125H19.1233V47H27.8903V27.3125H34.4273Z" />
    </svg>
  );
};

export default Facebook;
