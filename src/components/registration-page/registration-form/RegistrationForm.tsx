import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { REGISTRATION_FIRST_STEP, REGISTRATION_LAST_STEP, ROUTES } from '../../../constants';
import { RegistrationSteps } from '../registration-steps';

import styles from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  const [step, setStep] = useState<number>(REGISTRATION_FIRST_STEP);

  const buttonText = () => {
    switch (step) {
      case REGISTRATION_LAST_STEP - 1:
        return 'Последний шаг';
      case REGISTRATION_LAST_STEP:
        return 'Зарегистрироваться';
      default:
        return 'Следующий шаг';
    }
  };

  const handleClick = () => {
    if (step !== REGISTRATION_LAST_STEP) {
      setStep((prevState) => prevState + 1);
    } else {
      alert('Регистрация');
    }
  };

  return (
    <>
      <article className={styles['article-heading']}>
        <h4>Регистрация</h4>
        <p>
          {step} шаг из {REGISTRATION_LAST_STEP}
        </p>
      </article>
      <form autoComplete='off' className={styles.form}>
        <RegistrationSteps currentStep={step} />
      </form>
      <div className={styles['submit-box']}>
        <button type='button' onClick={handleClick}>
          {buttonText()}
        </button>
        <p>
          Есть учетная запись?
          <Link to={ROUTES.auth}>Войти</Link>
        </p>
      </div>
    </>
  );
};
