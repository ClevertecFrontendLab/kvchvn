import React from 'react';
import classnames from 'classnames';

import { toggleMainNavVisibility, useMainNavVisibilitySelector } from '../../../store';
import { useAppDispatch } from '../../../store/store';

import styles from './MenuToggle.module.scss';

export const MenuToggle = () => {
  const isMainNavVisible = useMainNavVisibilitySelector();
  const dispatch = useAppDispatch();

  const complexStyles = {
    button: classnames(styles.button, { [styles.active]: isMainNavVisible }),
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleMainNavVisibility());
  };

  return (
    <button type='button' onClick={handleClick} className={complexStyles.button} data-test-id='button-burger'>
      <span />
      <span />
      <span />
    </button>
  );
};
