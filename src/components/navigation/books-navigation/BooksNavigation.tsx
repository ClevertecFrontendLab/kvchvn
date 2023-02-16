import React, { useState } from 'react';
import classnames from 'classnames';

import { BOOKS_LIST_VIEW, BOOKS_TABLE_VIEW } from '../../../constants';
import { toggleBooksView } from '../../../store';
import { useAppDispatch } from '../../../store/store';
import { BooksView } from '../../../types';

import styles from './BooksNavigation.module.scss';

interface BooksNavigationProps {
  booksView: BooksView;
}

export const BooksNavigation = ({ booksView }: BooksNavigationProps) => {
  const [isExpandedSearchBox, setIsExpandedSearchBox] = useState(false);
  const dispatch = useAppDispatch();

  const complexStyles = {
    searchBox: classnames(styles['search-box'], { [styles.expanded]: isExpandedSearchBox }),
    sortBox: classnames(styles['sort-box'], { [styles.hidden]: isExpandedSearchBox }),
    buttonsBox: classnames(styles['view-buttons-box'], { [styles.hidden]: isExpandedSearchBox }),
  };

  const expandSearchBox = () => setIsExpandedSearchBox(true);
  const hideSearchBox = () => setIsExpandedSearchBox(false);

  const handleChange = () => dispatch(toggleBooksView());

  return (
    <nav className={styles.nav}>
      <label htmlFor='search' className={complexStyles.searchBox} data-test-id='button-search-open'>
        <input
          type='search'
          id='search'
          placeholder='Поиск книги или автора ...'
          onClick={expandSearchBox}
          data-test-id='input-search'
        />
        <button type='button' onClick={hideSearchBox} data-test-id='button-search-close' />
      </label>
      <label htmlFor='sort' className={complexStyles.sortBox}>
        По рейтингу
        <input type='checkbox' id='sort' />
      </label>
      <div className={complexStyles.buttonsBox}>
        <label htmlFor='table' data-test-id='button-menu-view-window'>
          <input
            type='radio'
            id='table'
            name='books-view'
            checked={booksView === BOOKS_TABLE_VIEW}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='line' data-test-id='button-menu-view-list'>
          <input
            type='radio'
            id='line'
            name='books-view'
            checked={booksView === BOOKS_LIST_VIEW}
            onChange={handleChange}
          />
        </label>
      </div>
    </nav>
  );
};
