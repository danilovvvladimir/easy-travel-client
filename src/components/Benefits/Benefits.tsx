import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SingleBenefit, { Benefit } from '../SingleBenefit/SingleBenefit';
import { IconName } from '../Icon/Icon';

interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = () => {
  const { t } = useTranslation();

  const BENEFITS: ReadonlyArray<Benefit> = [
    {
      title: t('benefits.peace_of_mind.title'),
      description: t('benefits.peace_of_mind.description'),
      iconName: IconName.LENS
    },
    {
      title: t('benefits.book_confidently.title'),
      description: t('benefits.book_confidently.description'),
      iconName: IconName.STROKESTAR
    },
    {
      title: t('benefits.flexible_planning.title'),
      description: t('benefits.flexible_planning.description'),
      iconName: IconName.LOCATION
    }
  ];

  return (
    <section className="pb-16 pt-12">
      <h2 className="mb-6 text-center text-3xl font-bold">
        {t('benefits.why_easy_travel')}
      </h2>
      <div className="container flex max-w-5xl justify-between p-4">
        {BENEFITS.map((b) => (
          <SingleBenefit
            key={b.title}
            {...b}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
