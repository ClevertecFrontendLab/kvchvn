import React from 'react';

import { BooksNavigation } from '../../navigation/books-navigation';
import { BooksList } from '../books-list';

import styles from './Books.module.scss';

export const Books = () => (
  <section className={styles.section}>
    <BooksNavigation />
    <BooksList />
  </section>
);
