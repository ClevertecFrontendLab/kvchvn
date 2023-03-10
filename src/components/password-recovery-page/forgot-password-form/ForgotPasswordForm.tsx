import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FORGOT_PASSWORD_FIELD, FORGOT_PASSWORD_SUCCESS_MODAL, ROUTES, VALIDATION_ERROR } from '../../../constants';
import { check } from '../../../helpers';
import { useSendLinkToRecoveryPasswordMutation } from '../../../store';
import { ForgotPassRequestBody } from '../../../types';
import { AuthModal } from '../../common/auth-modal';
import { InputBox } from '../../common/input-box';
import { Loading } from '../../global/loading';

import styles from './ForgotPasswordForm.module.scss';

export const ForgotPasswordForm = () => {
  const {
    handleSubmit: handleSubmitWrapper,
    control,
    formState: { isValid: isFormValid, submitCount, touchedFields },
  } = useForm<ForgotPassRequestBody>({ mode: 'all', shouldFocusError: false });
  const [sendLinkToRecoveryPassword, { isLoading, isSuccess, isError }] = useSendLinkToRecoveryPasswordMutation();

  const handleSubmit = handleSubmitWrapper((formValues) => {
    sendLinkToRecoveryPassword(formValues);
  });

  if (isSuccess) {
    return (
      <AuthModal title={FORGOT_PASSWORD_SUCCESS_MODAL.title} description={FORGOT_PASSWORD_SUCCESS_MODAL.description} />
    );
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className={styles['link-box']}>
        <Link to={ROUTES.auth}>Вход в личный кабинет</Link>
      </div>
      <h4 className={styles.heading}>Восстановление пароля</h4>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form} data-test-id='send-email-form'>
        <div>
          <InputBox
            type='email'
            name={FORGOT_PASSWORD_FIELD.email.name}
            label={FORGOT_PASSWORD_FIELD.email.label}
            control={control}
            validationRules={{
              validate: {
                isValidEmail: (val) => check(val).hasValidEmail || VALIDATION_ERROR.invalidEmail,
              },
              required: VALIDATION_ERROR.requiredField,
            }}
            isFormError={isError}
          />
          <p className={styles['error-text']} data-test-id='hint'>
            {isError && 'error'}
          </p>
          <p className={styles['assistive-text']}>
            На это email будет отправлено письмо с инструкциями по восстановлению пароля
          </p>
        </div>
        <div className={styles['submit-box']}>
          <button
            type='submit'
            disabled={!isFormValid && (Boolean(Object.keys(touchedFields).length) || submitCount > 0)}
          >
            Восстановить
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
