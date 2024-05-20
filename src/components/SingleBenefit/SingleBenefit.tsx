import { FC } from 'react';
import Icon, { IconName } from '../Icon/Icon';

interface SingleBenefitProps extends Benefit {}

export interface Benefit {
  iconName: IconName;
  title: string;
  description: string;
}

const SingleBenefit: FC<SingleBenefitProps> = ({
  description,
  iconName,
  title
}) => {
  return (
    <div className="flex max-w-64 flex-col items-center text-center">
      <Icon
        name={iconName}
        className="mb-4"
      />
      <span className="mb-1 text-lg font-medium">{title}</span>
      <div className="text-description-title">{description}</div>
    </div>
  );
};

export default SingleBenefit;
