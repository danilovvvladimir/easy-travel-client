import { FC } from 'react';

export interface PopularDestinationInnerProps {
  city: string;
  country: string;
  img: string;
}

const PopularDestinationInner: FC<PopularDestinationInnerProps> = ({
  city,
  country,
  img
}) => {
  return (
    <>
      <img
        className="size-12 rounded-md"
        src={img}
        alt={city}
      />
      <div className="ml-3 flex flex-col text-left">
        <span className="font-bold text-title">{city}</span>
        <span className="text-description-title">{country}</span>
      </div>
    </>
  );
};

export default PopularDestinationInner;
