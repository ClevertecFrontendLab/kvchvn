import React from 'react';

import styles from './AuthModal.module.scss';

interface AuthModalProps {
  children: React.ReactNode;
}

export const AuthModal = ({ children }: AuthModalProps) => (
  <section className={styles.section} data-test-id='status-block'>
    {children}
  </section>
);
