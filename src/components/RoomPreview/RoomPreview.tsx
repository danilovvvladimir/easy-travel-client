import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon, { IconName } from '../Icon/Icon';

export interface RoomPreviewProps {
  href?: string;
  img: string;
  title: string;
  unitType: string;
  location: string;
  rating: number;
  price: number;
  maxGuests?: number;
  bedrooms?: number;
  beds?: number;
  baths?: number;
}

const RoomPreview: FC<RoomPreviewProps> = ({
  href,
  img,
  location,
  title,
  unitType,
  rating,
  price,
  baths,
  bedrooms,
  beds,
  maxGuests
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {href ? (
        <Link to={href}>
          <img
            className="mb-2 rounded-lg"
            src={img}
            alt={title}
          />
        </Link>
      ) : (
        <img
          className="mb-2 rounded-lg"
          src={img}
          alt={title}
        />
      )}

      <div className="mb-1.5 flex justify-between font-semibold text-title">
        <span>
          {unitType}, {location}
        </span>
        <div className="flex items-center">
          <Icon
            name={IconName.STAR}
            className="size-4"
          />
          <span className="ml-0.5">{rating}</span>
        </div>
      </div>

      <div className="mb-2 text-sm text-description">
        <div className="mb-1">{title}</div>

        {maxGuests && (
          <span>{t('room_description.max_guests', { count: maxGuests })}</span>
        )}
        {bedrooms && (
          <span>, {t('room_description.bedrooms', { count: bedrooms })}</span>
        )}
        {beds && <span>, {t('room_description.beds', { count: beds })}</span>}
        {baths && (
          <span>, {t('room_description.baths', { count: baths })}</span>
        )}
      </div>

      {/* TODO: add other currency support  */}
      <div className="font-semibold">
        {price}$ {t('per_night')}
      </div>
    </div>
  );
};

export default RoomPreview;
