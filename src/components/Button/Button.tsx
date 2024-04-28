import { ButtonHTMLAttributes, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Link } from 'react-router-dom';
import cn from '../../utils/cn';

const buttonVariants = cva(
  `inline-flex items-center justify-center 
  rounded-md font-semibold no-underline 
  transition-colors disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-dark-primary',
        secondary: 'bg-secondary text-white hover:bg-primary',
        outline: 'bg-transparent text-primary border-2 border-primary'
      },
      size: {
        base: 'px-4 py-2 text-base',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-2 text-xl'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base'
    }
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  href,
  ...restProps
}) => {
  const finalClassName = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link
        to={href}
        className={finalClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={finalClassName}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
