import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PlaceType } from '../../types';
import PlacePreview from '../PlacePreview/PlacePreview';

interface PopularPlaceTypesProps {
  places: PlaceType[];
}

const PopularPlaceTypes: FC<PopularPlaceTypesProps> = ({ places }) => {
  const { t } = useTranslation();

  return (
    <section className="pb-16 pt-12">
      <h2 className="mb-6 text-center text-3xl font-bold">
        {t('popular_places.the_most_popular_booking_places')}
      </h2>
      <div className="container flex max-w-7xl flex-wrap justify-center gap-8 p-4">
        {places.map((b) => (
          <PlacePreview
            className="w-60"
            key={b.slug}
            {...b}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularPlaceTypes;
