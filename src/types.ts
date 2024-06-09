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
