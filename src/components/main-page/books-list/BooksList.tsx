import React from 'react';
import { useParams } from 'react-router-dom';

import { ALL_BOOKS_CATEGORY, MAX_RATING } from '../../../constants';
import { PARAMS } from '../../../constants/common';
import { useAllBooksSelector, useCategoriesSelector, useSortingByRatingSelector } from '../../../store';
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
  const sortingByRating = useSortingByRatingSelector();

  return books ? (
    <ul className={`${styles['books-list']} ${styles[`${booksView}-view`]}`}>
      {books
        .filter((book) => {
          if (book.categories && categories && categoryPath && categoryPath !== ALL_BOOKS_CATEGORY.path) {
            const currentCategory = categories.find((cat) => cat.path === categoryPath);

            if (currentCategory && !book.categories.includes(currentCategory.name)) {
              return false;
            }
          }

          return true;
        })
        .sort((bookA, bookB) => {
          const DEFAULT_RATING = sortingByRating === 'desc' ? MAX_RATING + 1 : 0;
          const bookARating = bookA.rating || DEFAULT_RATING;
          const bookBRating = bookB.rating || DEFAULT_RATING;

          switch (sortingByRating) {
            case 'asc':
              return bookBRating - bookARating;
            case 'desc':
            default:
              return bookARating - bookBRating;
          }
        })
        .map((book) => (
          <BookCard key={book.id} view={booksView} book={book} />
        ))}
    </ul>
  ) : null;
};
