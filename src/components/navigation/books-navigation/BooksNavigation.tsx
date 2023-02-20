import React, { useState } from 'react';
import classnames from 'classnames';

import { BOOKS_LIST_VIEW, BOOKS_TABLE_VIEW, INITIAL_SORT_BY_RATING } from '../../../constants';
import {
  toggleBooksView,
  toggleSortingByRating,
  useBooksViewSelector,
  useSortingByRatingSelector,
} from '../../../store';
import { useAppDispatch } from '../../../store/store';
import { SearchBox } from '../../book-page/search-box';

import styles from './BooksNavigation.module.scss';

export const BooksNavigation = () => {
  const [isExpandedSearchBox, setIsExpandedSearchBox] = useState(false);

  const booksView = useBooksViewSelector();
  const sortingByRating = useSortingByRatingSelector();
  const dispatch = useAppDispatch();

  const complexStyles = {
    sortBox: classnames(styles['sort-box'], { [styles.hidden]: isExpandedSearchBox }),
    buttonsBox: classnames(styles['view-buttons-box'], { [styles.hidden]: isExpandedSearchBox }),
  };

  const handleChangeSorting = () => dispatch(toggleSortingByRating());

  const handleChangeView = () => dispatch(toggleBooksView());

  return (
    <nav className={styles.nav}>
      <SearchBox isExpanded={isExpandedSearchBox} setIsExpanded={setIsExpandedSearchBox} />
      <label htmlFor='sort' className={complexStyles.sortBox}>
        По рейтингу
        <input
          type='checkbox'
          id='sort'
          checked={sortingByRating === INITIAL_SORT_BY_RATING}
          onChange={handleChangeSorting}
          data-test-id='sort-rating-button'
        />
      </label>
      <div className={complexStyles.buttonsBox}>
        <label htmlFor='table' data-test-id='button-menu-view-window'>
          <input
            type='radio'
            id='table'
            name='books-view'
            checked={booksView === BOOKS_TABLE_VIEW}
            onChange={handleChangeView}
          />
        </label>
        <label htmlFor='line' data-test-id='button-menu-view-list'>
          <input
            type='radio'
            id='line'
            name='books-view'
            checked={booksView === BOOKS_LIST_VIEW}
            onChange={handleChangeView}
          />
        </label>
      </div>
    </nav>
  );
};
