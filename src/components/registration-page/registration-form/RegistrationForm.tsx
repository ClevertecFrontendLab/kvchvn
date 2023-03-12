import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import {
  REGISTRATION_FAILURE_MODAL,
  REGISTRATION_FIRST_STEP,
  REGISTRATION_LAST_STEP,
  REGISTRATION_SUCCESS_MODAL,
  ROUTES,
} from '../../../constants';
import { getRequestErrorStatusCode } from '../../../helpers';
import { useRegistrationMutation } from '../../../store';
import { RegistrationRequestBody } from '../../../types';
import { AuthModal } from '../../common/auth-modal';
import { Loading } from '../../global/loading';
import { RegistrationSteps } from '../registration-steps';

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
  const navigate = useNavigate();
  const [register, { isLoading, isSuccess, error, reset: resetRegistration }] = useRegistrationMutation();

  const {
    handleSubmit: handleSubmitWrapper,
    control,
    getValues: getFormValues,
    reset: resetForm,
    formState: { submitCount, isValid: isValidForm, isSubmitSuccessful, touchedFields },
  } = useForm<RegistrationRequestBody>({
    mode: 'all',
    shouldFocusError: false,
  });

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

    // reset submit count
    resetForm({ ...formValues }, { keepSubmitCount: false });
  }, [isSubmitSuccessful, getFormValues, resetForm]);

  // handlers for AuthModals

  const tryToRegister = () => {
    register(getFormValues());
  };

  const returnToFirstStep = () => {
    resetForm({});
    resetRegistration();
    setState(INITIAL_REGISTRATION_FORM_STATE);
  };

  const goToAuthPage = () => navigate(ROUTES.auth);

  if (isSuccess) {
    return (
      <AuthModal
        title={REGISTRATION_SUCCESS_MODAL.title}
        description={REGISTRATION_SUCCESS_MODAL.description}
        buttonText={REGISTRATION_SUCCESS_MODAL.buttonText}
        buttonAction={goToAuthPage}
      />
    );
  }

  if (state.isError) {
    const statusCode = String(getRequestErrorStatusCode(error));

    const actions: { [key: string]: () => void } = {
      '400': returnToFirstStep,
      default: tryToRegister,
    };

    return (
      <>
        {isLoading && <Loading />}
        {statusCode && statusCode in REGISTRATION_FAILURE_MODAL ? (
          <AuthModal
            title={REGISTRATION_FAILURE_MODAL[statusCode].title}
            description={REGISTRATION_FAILURE_MODAL[statusCode].description}
            buttonText={REGISTRATION_FAILURE_MODAL[statusCode].buttonText}
            buttonAction={statusCode in actions ? actions[statusCode] : actions.default}
          />
        ) : (
          <AuthModal
            title={REGISTRATION_FAILURE_MODAL.default.title}
            description={REGISTRATION_FAILURE_MODAL.default.description}
            buttonText={REGISTRATION_FAILURE_MODAL.default.buttonText}
            buttonAction={actions.default}
          />
        )}
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
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form} data-test-id='register-form'>
        <RegistrationSteps currentStep={state.step} control={control} />
        <div className={styles['submit-box']}>
          <button
            type='submit'
            disabled={!isValidForm && (Boolean(Object.keys(touchedFields).length) || submitCount > 0)}
          >
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
