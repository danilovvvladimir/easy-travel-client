import type { Language } from '../types';

function getFlagByLanguage(lang: Language): string {
  switch (lang) {
    case 'ru':
      return '/static/images/flags/russia.jpg';
    case 'en':
    default:
      return '/static/images/flags/usa.jpg';
  }
}

export default getFlagByLanguage;
