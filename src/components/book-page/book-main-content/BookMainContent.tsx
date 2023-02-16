import React from 'react';
import classnames from 'classnames';

import { setBookAuthorsAndYearText, setButtonReserveText } from '../../../helpers';
import { BookBooking, BookDelivery, BookImage } from '../../../types';
import { PosterSlider } from '../poster-slider';

import styles from './BookMainContent.module.scss';

interface BookMainContentProps {
  title: string;
  authors: string[] | null;
  issueYear: string | null;
  description: string | null;
  posterPaths: BookImage[] | null;
  delivery: BookDelivery | null;
  booking: BookBooking | null;
}

export const BookMainContent = ({
  title,
  authors,
  issueYear,
  description,
  posterPaths,
  delivery,
  booking,
}: BookMainContentProps) => {
  const complexStyles = {
    button: classnames(styles.button, { [styles.reserved]: delivery && delivery.handed }),
  };

  const buttonText = setButtonReserveText(booking, delivery);

  const authorsAndYearText = setBookAuthorsAndYearText(authors, issueYear);

  return (
    <section className={styles.section}>
      <PosterSlider posters={posterPaths} />
      <article className={styles['title-box']}>
        <h3>{title}</h3>
        <h5>{authorsAndYearText}</h5>
        <button type='button' disabled={delivery ? delivery.handed : false} className={complexStyles.button}>
          {buttonText}
        </button>
      </article>
      <article className={styles['description-box']}>
        <h5>О книге</h5>
        <p>{description}</p>
      </article>
    </section>
  );
};
