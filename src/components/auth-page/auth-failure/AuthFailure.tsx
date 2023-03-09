import React from 'react';

import styles from './AuthFailure.module.scss';

interface AuthFailureProps {
  actionFn: () => void;
}

export const AuthFailure = ({ actionFn }: AuthFailureProps) => (
  <section className={styles.section}>
    <h4>Вход не выполнен</h4>
    <p>Что-то пошло не так. Попробуйте ещё раз</p>
    <button type='button' onClick={actionFn}>
      Повторить
    </button>
  </section>
);
