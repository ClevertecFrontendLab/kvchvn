import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { REGISTRATION_FIRST_STEP, REGISTRATION_LAST_STEP, ROUTES } from '../../../constants';
import { getRequestErrorStatusCode } from '../../../helpers';
import { useRegistrationMutation } from '../../../store';
import { RegistrationRequestBody } from '../../../types';
import { Loading } from '../../global/loading';
import { RegistrationFailure } from '../registration-failure';
import { RegistrationSteps } from '../registration-steps';
import { RegistrationSuccess } from '../registration-success';

import styles from './RegistrationForm.module.scss';

interface RegistrationFormState {
  step: number;
  buttonText: string;
  isError: boolean;
}

const INITIAL_REGISTRATION_FORM_STATE: RegistrationFormState = {
  step: REGISTRATION_FIRST_STEP,
  buttonText: 'Следующий шаг',
  isError: false,
};

export const RegistrationForm = () => {
  const [state, setState] = useState<RegistrationFormState>(INITIAL_REGISTRATION_FORM_STATE);

  const [register, { isLoading, isSuccess, error, reset: resetRegistration }] = useRegistrationMutation();

  const {
    handleSubmit: handleSubmitWrapper,
    control,
    getValues: getFormValues,
    reset: resetForm,
    formState: { submitCount, isValid: isValidForm, isSubmitSuccessful },
  } = useForm<RegistrationRequestBody>({
    mode: 'all',
    shouldFocusError: false,
  });

  const tryToRegister = () => register(getFormValues());

  const returnToFirstStep = () => {
    resetForm();
    resetRegistration();
    setState(INITIAL_REGISTRATION_FORM_STATE);
  };

  const handleSubmit = handleSubmitWrapper(async (formValues) => {
    if (state.step === REGISTRATION_LAST_STEP) {
      try {
        await register(formValues).unwrap();
        setState((prevState) => ({ ...prevState, isError: false }));
      } catch {
        setState((prevState) => ({ ...prevState, isError: true }));
      }
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

  useEffect(() => {
    const formValues = getFormValues();

    resetForm({ ...formValues }, { keepSubmitCount: false });
  }, [isSubmitSuccessful, getFormValues, resetForm]);

  if (isSuccess) {
    return <RegistrationSuccess />;
  }

  if (state.isError) {
    const statusCode = getRequestErrorStatusCode(error);

    return (
      <>
        {isLoading && <Loading />}
        <RegistrationFailure
          statusCode={String(statusCode)}
          tryAgain={statusCode !== 400}
          returnFn={returnToFirstStep}
          actionFn={tryToRegister}
        />
      </>
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
          <button type='submit' disabled={!isValidForm && submitCount > 0}>
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
