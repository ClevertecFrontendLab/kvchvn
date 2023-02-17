import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { UserBox } from '../../common/user-box';
import { MenuToggle } from '../../navigation/menu-toggle';
import { Wrapper } from '../wrapper';

import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Wrapper>
      <MenuToggle />
      <Link to={ROUTES.main} className={styles.header__logo} />
      <h3>Библиотека</h3>
      <UserBox />
    </Wrapper>
  </header>
);
