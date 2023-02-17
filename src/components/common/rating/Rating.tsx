import React from 'react';

import { MAX_RATING } from '../../../constants';

import styles from './Rating.module.scss';

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => (
  <ul className={styles['rating-box']}>
    {Array(MAX_RATING)
      .fill(0)
      .map((_, index) => {
        let className;
        const key = index;

        if (rating > index + 0.7) {
          className = styles.filled;
        }

        return <li key={key} className={className} />;
      })}
  </ul>
);
