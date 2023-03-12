import React from 'react';

import { AuthModal as AuthModalType } from '../../../types';

import styles from './AuthModal.module.scss';

interface AuthModalProps extends AuthModalType {
  buttonAction?: () => void;
}

export const AuthModal = ({ title, description, buttonText, buttonAction }: AuthModalProps) => (
  <section className={styles.section} data-test-id='status-block'>
    <h4>{title}</h4>
    <p>{description}</p>
    {buttonText && buttonAction && (
      <button type='button' onClick={buttonAction}>
        {buttonText}
      </button>
    )}
  </section>
);
