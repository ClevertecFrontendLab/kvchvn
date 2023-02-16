import React, { useEffect } from 'react';

import { disableScrolling, enableScrolling } from '../../../helpers';

import styles from './Loading.module.scss';

export const Loading = () => {
  useEffect(() => {
    disableScrolling(document.body);

    return () => enableScrolling(document.body);
  }, []);

  return (
    <section className={styles.overlay}>
      <span className={styles.spinner} />
    </section>
  );
};
