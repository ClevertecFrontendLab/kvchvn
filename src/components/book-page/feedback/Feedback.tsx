import React from 'react';

import feedback_avatar from '../../../assets/img/feedback-avatar.webp';
import { BASE_API_URL } from '../../../constants';
import { formatDate } from '../../../helpers';
import { BookComment } from '../../../types';
import { Rating } from '../../common/rating';

import styles from './Feedback.module.scss';

type FeedbackProps = Omit<BookComment, 'id'>;

export const Feedback = ({ user, rating, createdAt, text }: FeedbackProps) => {
  const formattedDate = formatDate(createdAt, 'long');

  return (
    <li className={styles['feedback-box']}>
      <div className={styles['author-box']}>
        <img src={user.avatarUrl ? `${BASE_API_URL}${user.avatarUrl}` : feedback_avatar} alt='Аватар' />
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{formattedDate}</p>
      </div>
      <div className={styles['rating-box']}>
        <Rating rating={rating} />
      </div>
      {text && <p>{text}</p>}
    </li>
  );
};
