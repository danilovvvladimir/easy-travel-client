import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export enum ButtonKind {
  Primary,
  PrimaryInverted,
  Secondary,
  SecondaryInverted
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: ButtonKind;
  // TODO: сделать возможность создать button как Link
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  kind = ButtonKind.Primary,
  ...restProps
}) => {
  const finalClassName = classNames(
    styles.button,
    styles[kind],
    {
      [styles.disabled]: restProps.disabled
    },
    className
  );

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
