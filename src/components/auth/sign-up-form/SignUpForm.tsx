import React, { useState } from 'react';

import { SIGN_UP_FIRST_STEP, SIGN_UP_LAST_STEP } from '../../../constants';
import { SignUpSteps } from '../sign-up-steps';

import styles from './SignUpForm.module.scss';

interface SignUpFormProps {
  goToSignIn: () => void;
}

export const SignUpForm = ({ goToSignIn }: SignUpFormProps) => {
  const [step, setStep] = useState<number>(SIGN_UP_FIRST_STEP);

  const buttonText = () => {
    switch (step) {
      case SIGN_UP_LAST_STEP - 1:
        return 'Последний шаг';
      case SIGN_UP_LAST_STEP:
        return 'Зарегистрироваться';
      default:
        return 'Следующий шаг';
    }
  };

  const handleClick = () => {
    if (step !== SIGN_UP_LAST_STEP) {
      setStep((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <article className={styles['article-heading']}>
        <h4>Регистрация</h4>
        <p>
          {step} шаг из {SIGN_UP_LAST_STEP}
        </p>
      </article>
      <form autoComplete='off' className={styles.form}>
        <ul className={styles['input-list']}>
          <SignUpSteps currentStep={step} />
        </ul>
      </form>
      <div className={styles['button-box']}>
        <button type='button' onClick={handleClick}>
          {buttonText()}
        </button>
        <p>
          Есть учетная запись?
          <button type='button' onClick={goToSignIn}>
            Войти
          </button>
        </p>
      </div>
    </>
  );
};
