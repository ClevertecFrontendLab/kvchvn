import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { ALL_BOOKS_CATEGORY, ROUTES, SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY } from '../../../constants';
import {
  toggleBookCategoriesVisibility,
  useBookCategoriesVisibilitySelector,
  useIsSearchEmptySelector,
} from '../../../store';
import { useAppDispatch } from '../../../store/store';
import { Category } from '../../../types';

import styles from './BooksCategories.module.scss';

interface BookCategoriesProps {
  categories: Category[];
}

export const BookCategories = ({ categories }: BookCategoriesProps) => {
  const isBookCategoriesVisible = useBookCategoriesVisibilitySelector();
  const isSearchEmpty = useIsSearchEmptySelector();
  const dispatch = useAppDispatch();

  const complexStyles = {
    list: classnames(styles['category-list'], { [styles.hidden]: !isBookCategoriesVisible }),
  };

  const hideCategories = () => dispatch(toggleBookCategoriesVisibility());

  return (
    <ul className={complexStyles.list}>
      {categories.map(({ name, path, id }, index) => (
        <li key={id} className={styles['category-item']}>
          <NavLink
            to={`${ROUTES.books.base}/${path}`}
            className={({ isActive }) => (isActive && isSearchEmpty ? styles.active : undefined)}
            onClick={hideCategories}
            data-test-id={
              index === 0
                ? window.innerWidth > SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY
                  ? 'navigation-books'
                  : 'burger-books'
                : undefined
            }
          >
            {name}
            <span>{path === ALL_BOOKS_CATEGORY.path ? '' : 10}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
