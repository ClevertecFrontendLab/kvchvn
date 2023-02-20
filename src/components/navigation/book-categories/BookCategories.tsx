import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { ALL_BOOKS_CATEGORY, ROUTES, SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY } from '../../../constants';
import { calculateBooksByCategories } from '../../../helpers';
import {
  toggleBookCategoriesVisibility,
  useAllBooksSelector,
  useBookCategoriesVisibilitySelector,
} from '../../../store';
import { useAppDispatch } from '../../../store/store';
import { Category } from '../../../types';

import styles from './BooksCategories.module.scss';

interface BookCategoriesProps {
  categories: Category[];
}

export const BookCategories = ({ categories }: BookCategoriesProps) => {
  const isBookCategoriesVisible = useBookCategoriesVisibilitySelector();
  const allBooks = useAllBooksSelector();
  const dispatch = useAppDispatch();

  const complexStyles = {
    list: classnames(styles['category-list'], { [styles.hidden]: !isBookCategoriesVisible }),
  };

  const categoriesWithAmount = calculateBooksByCategories(categories, allBooks);

  const hideCategories = () => dispatch(toggleBookCategoriesVisibility());

  return (
    <ul className={complexStyles.list}>
      {categoriesWithAmount.map((category) => (
        <li key={category.id} className={styles['category-item']}>
          <NavLink
            to={`${ROUTES.books.base}/${category.path}`}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={hideCategories}
            data-test-id={
              window.innerWidth > SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY
                ? `navigation-${category.path === ALL_BOOKS_CATEGORY.path ? 'books' : category.path}`
                : `burger-${category.path === ALL_BOOKS_CATEGORY.path ? 'books' : category.path}`
            }
          >
            {category.name}
            <span
              data-test-id={
                window.innerWidth > SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY
                  ? `navigation-book-count-for-${category.path === ALL_BOOKS_CATEGORY.path ? 'books' : category.path}`
                  : `burger-book-count-for-${category.path === ALL_BOOKS_CATEGORY.path ? 'books' : category.path}`
              }
            >
              {category.path === ALL_BOOKS_CATEGORY.path || !('amount' in category) ? '' : category.amount}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
