import { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '../../utils/cn';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Social, { SocialProps } from '../Social/Social';
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from '../../constants';
import { IconName } from '../../types';

const footerVariants = cva(`flex items-center justify-between py-4`, {
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

interface FooterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof footerVariants> {}

const SOCIALS: Readonly<SocialProps[]> = [
  { href: INSTAGRAM_URL, name: IconName.INSTAGRAM },
  { href: TWITTER_URL, name: IconName.TWITTER },
  { href: FACEBOOK_URL, name: IconName.FACEBOOK }
];

const Footer: FC<FooterProps> = ({ className, size }) => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-light-primary">
      <div className={cn(footerVariants({ size, className }))}>
        <div className="flex gap-8">
          {t('copyright')}
          <div className="flex gap-4 text-description-title">
            <span>{t('terms')}</span>
            <span>{t('privacy')}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <span className="text-description-title">
              {t('current_language')}
            </span>
          </div>
          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <Social
                key={s.name}
                {...s}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
