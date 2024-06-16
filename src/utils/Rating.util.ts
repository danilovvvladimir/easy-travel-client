import {
  LOW_RATING_VALUE,
  MEDIUM_RATING_VALUE,
  VERY_LOW_RATING_VALUE
} from '../constants';

export enum RatingType {
  VERY_LOW,
  LOW,
  MEDIUM,
  HIGH
}

class RatingUtil {
  static getRatingType(
    rating: number,
    veryLowValue?: number,
    lowValue?: number,
    mediumValue?: number
  ): RatingType {
    const veryLowRatingValue = veryLowValue || VERY_LOW_RATING_VALUE;
    if (rating < veryLowRatingValue) {
      return RatingType.VERY_LOW;
    }

    const lowRatingValue = lowValue || LOW_RATING_VALUE;
    if (rating < lowRatingValue) {
      return RatingType.LOW;
    }

    const mediumRatingValue = mediumValue || MEDIUM_RATING_VALUE;
    if (rating < mediumRatingValue) {
      return RatingType.MEDIUM;
    }

    return RatingType.HIGH;
  }
}

export default RatingUtil;
