import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { REGISTRATION_FIRST_STEP, REGISTRATION_LAST_STEP, ROUTES } from '../../../constants';
import { useRegistrationMutation } from '../../../store/slices/api';
import { RegistrationRequestBody } from '../../../types';
import { Loading } from '../../global/loading';
import { RegistrationFailure } from '../registration-failure';
import { RegistrationSteps } from '../registration-steps';
import { RegistrationSuccess } from '../registration-success';

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

  const [register, { isLoading, isSuccess, isError, error }] = useRegistrationMutation();

  const {
    handleSubmit: handleSubmitWrapper,
    control,
    getValues,
    reset: resetForm,
    formState,
  } = useForm<RegistrationRequestBody>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
    criteriaMode: 'all',
  });

  const registerUser = () => {
    const body = getValues();

    register(body);
  };

  const returnToFirstStep = () => {
    resetForm();

    setState((prevState) => ({
      ...prevState,
      step: REGISTRATION_FIRST_STEP,
    }));
  };

  const handleSubmit = handleSubmitWrapper((formValues) => {
    if (state.step === REGISTRATION_LAST_STEP) {
      register(formValues);
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

  if (isSuccess) {
    return <RegistrationSuccess />;
  }

  if (isError && error) {
    console.log(error);

    return (
      <RegistrationFailure
        statusCode={String(400)}
        tryAgain={true}
        returnFn={returnToFirstStep}
        actionFn={registerUser}
      />
    );
  }

  return (
    <>
      {isLoading && <Loading />}
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
