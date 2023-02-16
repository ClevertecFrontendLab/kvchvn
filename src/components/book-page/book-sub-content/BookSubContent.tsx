import React from 'react';

import { BookComment, BookDetailsModified } from '../../../types';
import { Rating } from '../../common/rating';
import { DetailedInfo } from '../detailed-info';
import { FeedbackList } from '../feedback-list';

import styles from './BookSubContent.module.scss';

interface BookSubContentProps {
  rating: number | null;
  details: BookDetailsModified;
  comments: BookComment[] | null;
}

export const BookSubContent = ({ rating, details, comments }: BookSubContentProps) => (
  <section className={styles.section}>
    <article className={styles.article}>
      <h5>Рейтинг</h5>
      <div className={styles['rating-box']}>
        {rating ? (
          <>
            <Rating rating={rating} />
            <span>{rating.toFixed(1)}</span>
          </>
        ) : (
          'еще нет оценок'
        )}
      </div>
    </article>
    <article className={styles.article}>
      <h5>Подробная информация</h5>
      <DetailedInfo details={details} />
    </article>
    <article className={styles.article}>
      <FeedbackList comments={comments} />
    </article>
  </section>
);
