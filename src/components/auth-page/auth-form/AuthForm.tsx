import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import classnames from 'classnames';

import { AUTH_INPUT, ROUTES, VALIDATION_ERROR } from '../../../constants';
import { getRequestErrorStatusCode } from '../../../helpers';
import { useAuthenticationMutation } from '../../../store';
import { AuthRequestBody } from '../../../types';
import { RequestError } from '../../../types/api';
import { InputBox } from '../../common/input-box';
import { Loading } from '../../global/loading';

import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const {
    control,
    formState,
    handleSubmit: handleSubmitWrapper,
  } = useForm<AuthRequestBody>({
    mode: 'all',
    shouldFocusError: false,
  });
  const [authenticate, { isError, isLoading }] = useAuthenticationMutation();
  const [isAuthenticationFailed, setIsAuthenticationFailed] = useState(false);

  const complexStyles = {
    infoBox: classnames([styles['info-box']]),
  };

  const handleSubmit = handleSubmitWrapper(async (formValues) => {
    try {
      await authenticate(formValues).unwrap();
    } catch (err) {
      const statusCode = getRequestErrorStatusCode(
        err as FetchBaseQueryError | SerializedError | RequestError | undefined
      );

      if (statusCode === 400) {
        setIsAuthenticationFailed(true);
      }
    }
  });

  return (
    <>
      {isLoading && <Loading />}
      <h4>Вход в личный кабинет</h4>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
        <ul className={styles['inputs-list']}>
          <li>
            <InputBox
              type='text'
              name={AUTH_INPUT.identifier.name}
              label={AUTH_INPUT.identifier.label}
              control={control}
              validationRules={{ required: VALIDATION_ERROR.requiredField }}
              isFormError={isError}
            />
          </li>
          <li>
            <InputBox
              type='password'
              name={AUTH_INPUT.password.name}
              label={AUTH_INPUT.password.label}
              control={control}
              validationRules={{ required: VALIDATION_ERROR.requiredField }}
              isFormError={isError}
            />
          </li>
        </ul>
        <div className={complexStyles.infoBox}>
          <p>{isAuthenticationFailed && 'Неверный логин или пароль!'}</p>
          <Link to={ROUTES.passwordRecovery}>
            {isAuthenticationFailed ? 'Восстановить?' : 'Забыли логин или пароль?'}
          </Link>
        </div>
        <div className={styles['submit-box']}>
          <button type='submit' disabled={!formState.isValid}>
            Вход
          </button>
          <p>
            Нет учетной записи?
            <Link to={ROUTES.registration}>Регистрация</Link>
          </p>
        </div>
      </form>
    </>
  );
};
