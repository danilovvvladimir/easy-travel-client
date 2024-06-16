import { FC } from 'react';
import { PlaceType } from '../../types';
import SearchPlacePreview from '../SearchPlacePreview/SearchPlacePreview';

interface SearchPlacePreviewListProps {
  places: PlaceType[];
}

const SearchPlacePreviewList: FC<SearchPlacePreviewListProps> = ({
  places
}) => {
  return (
    <div className="flex max-w-3xl flex-col gap-6">
      {places.map((item) => (
        <SearchPlacePreview
          key={item.slug}
          {...item}
        />
      ))}
    </div>
  );
};

export default SearchPlacePreviewList;
