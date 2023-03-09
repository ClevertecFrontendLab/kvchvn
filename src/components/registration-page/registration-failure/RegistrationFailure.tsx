import React from 'react';

import { REGISTRATION_FAILURE_MESSAGE } from '../../../constants';

import styles from './RegistrationFailure.module.scss';

interface RegistrationFailureProps {
  tryAgain: boolean;
  returnFn: () => void;
  actionFn: () => void;
  statusCode?: string;
}

export const RegistrationFailure = ({ statusCode, tryAgain, returnFn, actionFn }: RegistrationFailureProps) => {
  const handleClick = () => {
    if (tryAgain) {
      actionFn();
    } else {
      returnFn();
    }
  };

  return (
    <section className={styles.section}>
      <h4>Данные не сохранились</h4>
      <p>
        {statusCode && statusCode in REGISTRATION_FAILURE_MESSAGE
          ? REGISTRATION_FAILURE_MESSAGE[statusCode as keyof typeof REGISTRATION_FAILURE_MESSAGE]
          : REGISTRATION_FAILURE_MESSAGE.default}
      </p>
      <button type='button' onClick={handleClick}>
        {tryAgain ? 'Повторить' : 'Назад к регистрации'}
      </button>
    </section>
  );
};
