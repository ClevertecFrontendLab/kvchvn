import React from 'react';
import { useParams } from 'react-router-dom';

import { ALL_BOOKS_CATEGORY } from '../../../constants';
import { PARAMS } from '../../../constants/common';
import { useAllBooksSelector, useCategoriesSelector } from '../../../store';
import { BooksView } from '../../../types';
import { BookCard } from '../book-card';

import styles from './BooksList.module.scss';

interface BooksListProps {
  booksView: BooksView;
}

export const BooksList = ({ booksView }: BooksListProps) => {
  const { category: categoryPath } = useParams<keyof typeof PARAMS>();
  const books = useAllBooksSelector();
  const categories = useCategoriesSelector();

  return books ? (
    <ul className={`${styles['books-list']} ${styles[`${booksView}-view`]}`}>
      {books.map((book) => {
        if (categories && categoryPath && categoryPath !== ALL_BOOKS_CATEGORY.path) {
          const currentCategory = categories.find((cat) => cat.path === categoryPath);

          if (currentCategory && book.categories && !book.categories.includes(currentCategory.name)) {
            return null;
          }
        }

        return <BookCard key={book.id} view={booksView} book={book} />;
      })}
    </ul>
  ) : null;
};
