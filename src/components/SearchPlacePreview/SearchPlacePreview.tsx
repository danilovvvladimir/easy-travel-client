import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { IconName, PlaceType } from '../../types';
import cn from '../../utils/cn';
import Button from '../Button/Button';
import RatingBadge from '../RatingBadge/RatingBadge';

export interface SearchPlacePreviewProps extends PlaceType {
  className?: string;
}

const SearchPlacePreview: FC<SearchPlacePreviewProps> = ({
  img,
  location,
  title,
  slug,
  unit,
  rating,
  price,
  baths,
  bedrooms,
  beds,
  maxGuests,
  className
}) => {
  const { t } = useTranslation();
  const href = `/place/${slug}`;

  return (
    <div className="flex justify-between rounded-lg bg-white shadow-lg">
      <div className="flex">
        <div className="size-44">
          {href ? (
            <Link to={href}>
              <img
                className="rounded-l-lg"
                src={img}
                alt={title}
              />
            </Link>
          ) : (
            <img
              className="rounded-l-lg"
              src={img}
              alt={title}
            />
          )}
        </div>

        <div className="w-72 border-r border-description-light px-4 py-2">
          <h4 className="mb-1.5 flex justify-between text-lg font-semibold text-title">
            {title}
          </h4>
          <div className="mb-2 text-sm text-description">
            <div>
              {unit}, {location}
            </div>
            {maxGuests && (
              <span>
                {t('room_description.max_guests', { count: maxGuests })}
              </span>
            )}
            {bedrooms && (
              <span>
                , {t('room_description.bedrooms', { count: bedrooms })}
              </span>
            )}
            {beds && (
              <span>, {t('room_description.beds', { count: beds })}</span>
            )}
            {baths && (
              <span>, {t('room_description.baths', { count: baths })}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <RatingBadge rating={rating} />
            {/* TODO: add review modal */}
            <Button
              className="px-2 font-normal"
              variant="none"
            >
              {t('reviews', { count: 180 })}
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-2">
        <div className="mb-2">
          <div className="font-semibold">
            {price}$ {t('per_night')}
          </div>
          <div className="text-xs text-description">
            {t('total.period', { count: 2 })}
          </div>
        </div>

        <div className="mb-2 text-sm text-success">
          {t('meal_included', { meal: 'Breakfast' })}
        </div>

        <Button className="w-full">{t('reserve')}</Button>
      </div>
    </div>
  );
};

export default SearchPlacePreview;
