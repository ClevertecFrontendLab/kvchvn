import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import stringReplace from 'react-string-replace';
import classnames from 'classnames';

import { setBookAuthorsAndYearText, setButtonReserveText } from '../../../helpers';
import { useSearchValueSelector } from '../../../store';
import { BookBase, BooksView } from '../../../types';
import { ProgressiveImage } from '../../common/progressive-image';
import { Rating } from '../../common/rating';

import styles from './BookCard.module.scss';

interface BookCardProps {
  book: BookBase;
  view: BooksView;
}

export const BookCard = ({ book, view }: BookCardProps) => {
  const searchValue = useSearchValueSelector();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const complexStyles = {
    card: classnames(styles['book-card'], styles[`${view}-view`]),
    button: classnames(styles.button, { [styles.reserved]: book.booking && book.booking.order }),
  };

  const buttonText = setButtonReserveText(book.booking, book.delivery);

  const authorsAndYearText = setBookAuthorsAndYearText(book.authors, book.issueYear);

  const handleClickCard = () => navigate(`${pathname}/${book.id}`);

  const handleClickButton = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <li onClick={handleClickCard} className={complexStyles.card} data-test-id='card'>
      <div className={styles['poster-box']}>
        <ProgressiveImage src={book.image?.url} alt={book.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.rating}>{book.rating ? <Rating rating={book.rating} /> : 'еще нет оценок'}</div>
        <p className={styles.title}>
          {stringReplace(book.title, searchValue.trim(), (match, index) => (
            <span key={index} data-test-id='highlight-matches'>
              {match}
            </span>
          ))}
        </p>
        <p className={styles.author}>{authorsAndYearText}</p>
        <button
          type='button'
          disabled={book.delivery ? book.delivery.handed : false}
          onClick={handleClickButton}
          className={complexStyles.button}
        >
          {buttonText}
        </button>
      </div>
    </li>
  );
};
