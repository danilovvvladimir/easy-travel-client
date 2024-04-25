import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...restProps }) => {
  return <button {...restProps}>{children}</button>;
};

export default Button;
