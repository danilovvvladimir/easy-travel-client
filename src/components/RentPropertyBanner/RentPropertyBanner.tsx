import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';

interface RentPropertyBannerProps {}

const RentPropertyBanner: FC<RentPropertyBannerProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full items-center justify-center gap-8 bg-light-primary p-4">
      <span className="font-medium">{t('rent_property.title')}</span>
      <Button
        size="lg"
        className="text-base"
      >
        {t('rent_property.try')}
      </Button>
    </div>
  );
};

export default RentPropertyBanner;
