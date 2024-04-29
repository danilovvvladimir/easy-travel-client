import { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { VariantProps, cva } from 'class-variance-authority';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import cn from '../../utils/cn';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const headerVariants = cva(`flex items-center justify-between py-4`, {
  variants: {
    size: {
      base: 'container max-w-7xl',
      lg: 'mx-auto px-5'
    }
  },
  defaultVariants: {
    size: 'base'
  }
});

interface HeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {}

const Header: FC<HeaderProps> = ({ className, size }) => {
  const { t } = useTranslation();

  return (
    <header className="border-b-DEFAULT border-light-primary">
      <div className={cn(headerVariants({ size, className }))}>
        <Logo />
        <div className="flex items-center justify-center gap-5 ">
          <LanguageSwitcher />
          <div className="flex gap-2">
            <Button variant="outline">{t('sign_in')}</Button>
            <Button>{t('sign_up')}</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
