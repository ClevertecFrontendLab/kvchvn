import React, { useState } from 'react';
import classnames from 'classnames';

import { BookComment } from '../../../types';
import { DropdownButton } from '../../common/dropdown-button';
import { Feedback } from '../feedback';

import styles from './FeedbackList.module.scss';

interface FeedbackListProps {
  comments: BookComment[] | null;
}

export const FeedbackList = ({ comments }: FeedbackListProps) => {
  const [isCommentListVisible, setIsCommentListVisible] = useState(true);

  const complexStyles = {
    comments: classnames(styles['comments-box'], { [styles.hidden]: !isCommentListVisible }),
  };

  const toggleFeedbackVisible = () => setIsCommentListVisible((prevState) => !prevState);

  return (
    <>
      <h5>
        Отзывы <span>{comments ? comments.length : 0}</span>
        {comments && comments.length ? (
          <DropdownButton isDrop={isCommentListVisible} toggleFn={toggleFeedbackVisible} testId='button-hide-reviews' />
        ) : null}
      </h5>
      {comments && comments.length ? (
        <ul className={complexStyles.comments}>
          {comments.map((comment) => (
            <Feedback
              key={comment.id}
              rating={comment.rating}
              text={comment.text}
              user={comment.user}
              createdAt={comment.createdAt}
            />
          ))}
        </ul>
      ) : null}
      <button type='button' className={styles.button} data-test-id='button-rating'>
        Оценить книгу
      </button>
    </>
  );
};
