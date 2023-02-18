import React from 'react';
import { useParams } from 'react-router-dom';

import { ALL_BOOKS_CATEGORY, SORT } from '../../../constants';
import { PARAMS } from '../../../constants/common';
import { useAllBooksSelector, useCategoriesSelector, useSortingByRatingSelector } from '../../../store';
import { BooksView } from '../../../types';
import { BookCard } from '../book-card';

import styles from './BooksList.module.scss';

interface BooksListProps {
  booksView: BooksView;
}

export const BooksList = ({ booksView }: BooksListProps) => {
  const { category: currentCategoryPath } = useParams<keyof typeof PARAMS>();

  const books = useAllBooksSelector();
  const categories = useCategoriesSelector();
  const sortingByRating = useSortingByRatingSelector();

  const filteredAndSortedBooks = books
    ? books
        .filter((book) => {
          if (book.categories && categories && currentCategoryPath && currentCategoryPath !== ALL_BOOKS_CATEGORY.path) {
            const currentCategory = categories.find((cat) => cat.path === currentCategoryPath);

            if (currentCategory && !book.categories.includes(currentCategory.name)) {
              return false;
            }
          }

          return true;
        })
        .sort((bookA, bookB) => {
          const DEFAULT_RATING = 0;
          const bookARating = bookA.rating || DEFAULT_RATING;
          const bookBRating = bookB.rating || DEFAULT_RATING;

          switch (sortingByRating) {
            case SORT.asc:
              return bookARating - bookBRating;
            case SORT.desc:
            default:
              return bookBRating - bookARating;
          }
        })
    : undefined;

  return filteredAndSortedBooks ? (
    <ul className={`${styles['books-list']} ${styles[`${booksView}-view`]}`}>
      {filteredAndSortedBooks.length ? (
        filteredAndSortedBooks.map((book) => <BookCard key={book.id} view={booksView} book={book} />)
      ) : (
        <h3>В этой категории книг еще нет</h3>
      )}
    </ul>
  ) : null;
};
