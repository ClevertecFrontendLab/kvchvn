import React from 'react';

import { Wrapper } from '../wrapper';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper>
      <p>&copy; 2020-2023 Cleverland. Все права защищены.</p>
      <ul className={styles['social-list']}>
        <li />
        <li />
        <li />
        <li />
      </ul>
    </Wrapper>
  </footer>
);
