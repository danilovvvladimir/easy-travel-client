import type { Language } from '../types';

function getFlagByLanguage(lang: Language): string {
  const baseFlagPath = '/static/images/flags';

  switch (lang) {
    case 'ru':
      return `${baseFlagPath}/russia.jpg`;
    case 'en':
    default:
      return `${baseFlagPath}/usa.jpg`;
  }
}

export default getFlagByLanguage;
