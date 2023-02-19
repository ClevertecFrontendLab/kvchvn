import React, { useState } from 'react';
import classnames from 'classnames';

import { BOOKS_LIST_VIEW, BOOKS_TABLE_VIEW, INITIAL_SORT_BY_RATING } from '../../../constants';
import {
  setSearchValue,
  toggleBooksView,
  toggleSortingByRating,
  useBooksViewSelector,
  useSearchValueSelector,
  useSortingByRatingSelector,
} from '../../../store';
import { useAppDispatch } from '../../../store/store';

import styles from './BooksNavigation.module.scss';

export const BooksNavigation = () => {
  const [isExpandedSearchBox, setIsExpandedSearchBox] = useState(false);

  const booksView = useBooksViewSelector();
  const searchValue = useSearchValueSelector();
  const sortingByRating = useSortingByRatingSelector();
  const dispatch = useAppDispatch();

  const complexStyles = {
    searchBox: classnames(styles['search-box'], { [styles.expanded]: isExpandedSearchBox }),
    sortBox: classnames(styles['sort-box'], { [styles.hidden]: isExpandedSearchBox }),
    buttonsBox: classnames(styles['view-buttons-box'], { [styles.hidden]: isExpandedSearchBox }),
  };

  const handleClick = () => setIsExpandedSearchBox(true);

  const hideSearchBox = () => setIsExpandedSearchBox(false);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value));

  const handleChangeSorting = () => dispatch(toggleSortingByRating());

  const handleChangeView = () => dispatch(toggleBooksView());

  return (
    <nav className={styles.nav}>
      <label htmlFor='search' className={complexStyles.searchBox} data-test-id='button-search-open'>
        <input
          type='search'
          id='search'
          placeholder='Поиск книги или автора ...'
          onClick={handleClick}
          value={searchValue}
          onChange={handleChangeSearch}
          data-test-id='input-search'
        />
        <button type='button' onClick={hideSearchBox} data-test-id='button-search-close' />
      </label>
      <label htmlFor='sort' className={complexStyles.sortBox}>
        По рейтингу
        <input
          type='checkbox'
          id='sort'
          checked={sortingByRating === INITIAL_SORT_BY_RATING}
          onChange={handleChangeSorting}
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
