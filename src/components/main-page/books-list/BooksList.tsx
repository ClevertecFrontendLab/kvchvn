import React from 'react';

import { useAllBooksSelector } from '../../../store';
import { BooksView } from '../../../types';
import { BookCard } from '../book-card';

import styles from './BooksList.module.scss';

interface BooksListProps {
  booksView: BooksView;
}

export const BooksList = ({ booksView }: BooksListProps) => {
  const books = useAllBooksSelector();

  return books ? (
    <ul className={`${styles['books-list']} ${styles[`${booksView}-view`]}`}>
      {books.map((book) => (
        <BookCard key={book.id} view={booksView} book={book} />
      ))}
    </ul>
  ) : null;
};
