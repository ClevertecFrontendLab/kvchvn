import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import classnames from 'classnames';

import { AUTH_FAILURE_MODAL, AUTHENTICATION_FIELD, ROUTES, VALIDATION_ERROR } from '../../../constants';
import { getRequestErrorStatusCode, setToLocalStorage } from '../../../helpers';
import { useAuthenticationMutation } from '../../../store';
import { AuthRequestBody } from '../../../types';
import { RequestError } from '../../../types/api';
import { AuthModal } from '../../common/auth-modal';
import { InputBox } from '../../common/input-box';
import { Loading } from '../../global/loading';

import styles from './AuthForm.module.scss';

interface AuthFormState {
  isValidationError: boolean;
  isUnknownError: boolean;
}

const INITIAL_AUTH_FORM_STATE: AuthFormState = {
  isValidationError: false,
  isUnknownError: false,
};

export const AuthForm = () => {
  const {
    control,
    formState: { isValid: isFormValid, submitCount },
    getValues: getFormValues,
    handleSubmit: handleSubmitWrapper,
  } = useForm<AuthRequestBody>({
    mode: 'all',
    shouldFocusError: false,
  });
  const [state, setState] = useState<AuthFormState>(INITIAL_AUTH_FORM_STATE);

  const [authenticate, { isLoading }] = useAuthenticationMutation();

  const navigate = useNavigate();

  const complexStyles = {
    infoBox: classnames([styles['info-box']]),
  };

  const handleSubmit = handleSubmitWrapper(async (formValues) => {
    try {
      const authResponse = await authenticate(formValues).unwrap();

      setToLocalStorage('jwt', authResponse.jwt);
      navigate(ROUTES.main);
    } catch (err) {
      const statusCode = getRequestErrorStatusCode(
        err as FetchBaseQueryError | SerializedError | RequestError | undefined
      );

      if (statusCode === 400) {
        setState((prevState) => ({ ...prevState, isValidationError: true }));
      } else {
        setState((prevState) => ({ ...prevState, isUnknownError: true }));
      }
    }
  });

  const tryToAuthenticate = () => authenticate(getFormValues());

  if (state.isUnknownError) {
    return (
      <>
        {isLoading && <Loading />}
        <AuthModal
          title={AUTH_FAILURE_MODAL.title}
          description={AUTH_FAILURE_MODAL.description}
          buttonText={AUTH_FAILURE_MODAL.buttonText}
          buttonAction={tryToAuthenticate}
        />
      </>
    );
  }

  return (
    <>
      {isLoading && <Loading />}
      <h4>???????? ?? ???????????? ??????????????</h4>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form} data-test-id='auth-form'>
        <ul className={styles['inputs-list']}>
          <li>
            <InputBox
              type='text'
              name={AUTHENTICATION_FIELD.identifier.name}
              label={AUTHENTICATION_FIELD.identifier.label}
              control={control}
              validationRules={{ required: VALIDATION_ERROR.requiredField }}
              isFormError={state.isValidationError}
            />
          </li>
          <li>
            <InputBox
              type='password'
              name={AUTHENTICATION_FIELD.password.name}
              label={AUTHENTICATION_FIELD.password.label}
              control={control}
              validationRules={{ required: VALIDATION_ERROR.requiredField }}
              isFormError={state.isValidationError}
            />
          </li>
        </ul>
        <div className={complexStyles.infoBox}>
          <p data-test-id='hint'>{state.isValidationError && '???????????????? ?????????? ?????? ????????????!'}</p>
          <Link to={ROUTES.passwordRecovery}>
            {state.isValidationError ? '?????????????????????????' : '???????????? ?????????? ?????? ?????????????'}
          </Link>
        </div>
        <div className={styles['submit-box']}>
          <button type='submit' disabled={!isFormValid && submitCount > 0}>
            ????????
          </button>
          <p>
            ?????? ?????????????? ?????????????
            <Link to={ROUTES.registration}>??????????????????????</Link>
          </p>
        </div>
      </form>
    </>
  );
};
