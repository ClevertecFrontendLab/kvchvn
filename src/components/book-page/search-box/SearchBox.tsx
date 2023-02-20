import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import classnames from 'classnames';

import { useDebounce } from '../../../hooks';
import { setSearchValue, useSearchValueSelector } from '../../../store';
import { useAppDispatch } from '../../../store/store';

import styles from './SearchBox.module.scss';

interface SearchBoxProps {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const SEARCH_DELAY = 300;

export const SearchBox = ({ isExpanded, setIsExpanded }: SearchBoxProps) => {
  const searchValue = useSearchValueSelector();
  const [search, setSearch] = useState(searchValue);
  const dispatch = useAppDispatch();

  const callback = useCallback(() => dispatch(setSearchValue(search)), [search, dispatch]);

  useDebounce(callback, SEARCH_DELAY);

  const complexStyles = {
    searchBox: classnames(styles['search-box'], { [styles.expanded]: isExpanded }),
  };

  const handleClickInput = () => setIsExpanded(true);

  const handleClickButton = () => setIsExpanded(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <label htmlFor='search' className={complexStyles.searchBox} data-test-id='button-search-open'>
      <input
        type='search'
        id='search'
        placeholder='Поиск книги или автора ...'
        onClick={handleClickInput}
        value={search}
        onChange={handleChange}
        data-test-id='input-search'
      />
      <button type='button' onClick={handleClickButton} data-test-id='button-search-close' />
    </label>
  );
};
