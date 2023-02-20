import React from 'react';
import { useParams } from 'react-router-dom';

import { ALL_BOOKS_CATEGORY, SORT } from '../../../constants';
import { PARAMS } from '../../../constants/common';
import {
  useAllBooksSelector,
  useBooksViewSelector,
  useCategoriesSelector,
  useSearchValueSelector,
  useSortingByRatingSelector,
} from '../../../store';
import { BookCard } from '../book-card';

import styles from './BooksList.module.scss';

export const BooksList = () => {
  const { category: currentCategoryPath } = useParams<keyof typeof PARAMS>();

  const books = useAllBooksSelector();
  const booksView = useBooksViewSelector();
  const categories = useCategoriesSelector();
  const searchValue = useSearchValueSelector();
  const sortingByRating = useSortingByRatingSelector();

  const filteredAndSortedBooks = books
    ? books
        .filter((book) => {
          // checking by categories (more important)
          if (book.categories && categories && currentCategoryPath && currentCategoryPath !== ALL_BOOKS_CATEGORY.path) {
            const currentCategory = categories.find((cat) => cat.path === currentCategoryPath);

            if (currentCategory && !book.categories.includes(currentCategory.name)) {
              return false;
            }
          }

          // checking by search-input (less important)
          if (searchValue && !book.title.toLowerCase().includes(searchValue.toLowerCase().trim())) {
            return false;
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
        <h3 data-test-id={searchValue ? 'search-result-not-found' : 'empty-category'}>
          {searchValue ? 'По запросу ничего не найдено' : 'В этой категории книг ещё нет'}
        </h3>
      )}
    </ul>
  ) : null;
};
