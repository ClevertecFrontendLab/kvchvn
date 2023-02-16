import React from 'react';

import { useBooksViewSelector } from '../../../store';
import { BooksNavigation } from '../../navigation/books-navigation';
import { BooksList } from '../books-list';

import styles from './Books.module.scss';

export const Books = () => {
  const booksView = useBooksViewSelector();

  return (
    <section className={styles.section}>
      <BooksNavigation booksView={booksView} />
      <BooksList booksView={booksView} />
    </section>
  );
};
