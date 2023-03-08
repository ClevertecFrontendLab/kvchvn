import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { REGISTRATION_FIRST_STEP, REGISTRATION_LAST_STEP, ROUTES } from '../../../constants';
import { RegistrationSteps } from '../registration-steps';

import styles from './RegistrationForm.module.scss';

interface RegistrationFormState {
  step: number;
  buttonText: string;
}

export const RegistrationForm = () => {
  const [state, setState] = useState<RegistrationFormState>({
    step: REGISTRATION_FIRST_STEP,
    buttonText: 'Следующий шаг',
  });
  const {
    handleSubmit: handleSubmitWrapper,
    control,
    reset,
    formState,
  } = useForm<RegistrationRequestBody>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
    criteriaMode: 'all',
  });
  const handleSubmit = handleSubmitWrapper((data) => {
    if (state.step === REGISTRATION_LAST_STEP) {
      console.log(data);
      reset();
    } else {
      setState((prevState) => {
        const updatedStep = prevState.step + 1;

        if (updatedStep === REGISTRATION_LAST_STEP - 1) {
          return { ...prevState, step: updatedStep, buttonText: 'Последний шаг' };
        }
        if (updatedStep === REGISTRATION_LAST_STEP) {
          return { ...prevState, step: updatedStep, buttonText: 'Зарегистрироваться' };
        }

        return { ...prevState, step: prevState.step + 1 };
      });
    }
  });

  return (
    <>
      <article className={styles['article-heading']}>
        <h4>Регистрация</h4>
        <p>
          {state.step} шаг из {REGISTRATION_LAST_STEP}
        </p>
      </article>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
        <RegistrationSteps currentStep={state.step} control={control} />
        <div className={styles['submit-box']}>
          <button type='submit' disabled={!formState.isValid}>
            {state.buttonText}
          </button>
          <p>
            Есть учетная запись?
            <Link to={ROUTES.auth}>Войти</Link>
          </p>
        </div>
      </form>
    </>
  );
};
