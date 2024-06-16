import { LANGUAGES } from './constants';

export type Language = (typeof LANGUAGES)[number];

export enum IconName {
  STAR = 'STAR',
  LOCATION = 'LOCATION',
  STROKESTAR = 'STROKESTAR',
  LENS = 'LENS',
  INSTAGRAM = 'INSTAGRAM',
  TWITTER = 'TWITTER',
  FACEBOOK = 'FACEBOOK'
}

export interface SingleIcon {
  className?: string;
}

// TODO: extend
export interface PlaceType {
  img: string;
  title: string;
  slug: string;
  unit: string;
  location: string;
  rating: number;
  price: number;
  maxGuests?: number;
  bedrooms?: number;
  beds?: number;
  baths?: number;
}
