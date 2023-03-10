import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classnames from 'classnames';

import { QUERY_STATUS, ROUTES, SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY } from '../../../constants';
import { disableScrolling, enableScrolling, removeFromLocalStorage } from '../../../helpers';
import {
  hideBookCategories,
  hideMainNav,
  toggleBookCategoriesVisibility,
  useAllBooksStatusSelector,
  useBookCategoriesVisibilitySelector,
  useGetCategoriesQuery,
  useMainNavVisibilitySelector,
} from '../../../store';
import { useAppDispatch } from '../../../store/store';
import { DropdownButton } from '../../common/dropdown-button';
import { BookCategories } from '../book-categories';

import styles from './MainNavigation.module.scss';

export const MainNavigation = () => {
  const { data: categories } = useGetCategoriesQuery();

  const allBooksStatus = useAllBooksStatusSelector();
  const isBookCategoriesVisible = useBookCategoriesVisibilitySelector();
  const isMainNavVisible = useMainNavVisibilitySelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navListRef = useRef<HTMLUListElement>(null);

  const complexStyles = {
    nav: classnames(styles.nav, { [styles['nav-mobile']]: isMainNavVisible }),
    userBox: classnames(styles.nav__list, styles['user-box']),
  };

  const toggleBookCategories = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleBookCategoriesVisibility());
  };

  const hideCategories = () => dispatch(hideBookCategories());

  const handleExitClick = () => {
    removeFromLocalStorage('jwt');
    navigate(ROUTES.auth);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;

      if (!navListRef.current?.contains(target) || target.tagName === 'A') {
        dispatch(hideMainNav());
      }
    }

    if (isMainNavVisible) {
      document.body.addEventListener('click', handleClickOutside);
      disableScrolling(document.body);
    } else {
      enableScrolling(document.body);
    }

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [isMainNavVisible, dispatch]);

  return (
    <nav className={complexStyles.nav}>
      <ul ref={navListRef} className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            to={ROUTES.books.base}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            data-test-id={
              window.innerWidth > SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY ? 'navigation-showcase' : 'burger-showcase'
            }
          >
            <div onClick={toggleBookCategories}>
              ?????????????? ????????
              {categories && (!allBooksStatus || allBooksStatus === QUERY_STATUS.isSuccess) ? (
                <DropdownButton isDrop={isBookCategoriesVisible} />
              ) : null}
            </div>
          </NavLink>
          {categories && (!allBooksStatus || allBooksStatus === QUERY_STATUS.isSuccess) ? (
            <BookCategories categories={categories} />
          ) : null}
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to={ROUTES.terms}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={hideCategories}
            data-test-id={
              window.innerWidth > SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY ? 'navigation-terms' : 'burger-terms'
            }
          >
            ?????????????? ??????????????????????
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            to={ROUTES.contract}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={hideCategories}
            data-test-id={
              window.innerWidth > SCREEN_SIZE_OF_MENU_TOGGLE_VISIBILITY ? 'navigation-contract' : 'burger-contract'
            }
          >
            ?????????????? ????????????
          </NavLink>
        </li>
      </ul>
      <ul className={complexStyles.userBox}>
        <li className={styles.nav__item}>
          <a>??????????????</a>
        </li>
        <li className={styles.nav__item}>
          <a onClick={handleExitClick} data-test-id='exit-button'>
            ??????????
          </a>
        </li>
      </ul>
    </nav>
  );
};
