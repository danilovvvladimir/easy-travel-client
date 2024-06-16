import { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonProps } from '../Button/Button';
import RatingUtil, { RatingType } from '../../utils/Rating.util';
import cn from '../../utils/cn';

interface RatingBadgeProps {
  rating: number;
  className?: string;
}

function getBadgeBackgroundClass(ratingType: RatingType): string {
  switch (ratingType) {
    case RatingType.VERY_LOW:
      return 'bg-rating-very-low';

    case RatingType.LOW:
      return 'bg-rating-low';

    case RatingType.MEDIUM:
      return 'bg-rating-medium';

    default:
      return 'bg-rating-high';
  }
}

const RatingBadge: FC<RatingBadgeProps> = ({ rating, className }) => {
  const { t } = useTranslation();
  const backgroundClassname = getBadgeBackgroundClass(
    RatingUtil.getRatingType(rating)
  );

  return (
    <div
      className={cn(
        'rounded-md text-white px-2 py-1',
        backgroundClassname,
        className
      )}
    >
      {rating}
    </div>
  );
};

export default RatingBadge;
