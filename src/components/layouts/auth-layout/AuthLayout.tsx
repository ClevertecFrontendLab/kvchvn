import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './AuthLayout.module.scss';

export const AuthLayout = () => (
  <div className={styles.wrapper}>
    <h4>Cleverland</h4>
    <main className={styles.main}>
      <Outlet />
    </main>
  </div>
);
