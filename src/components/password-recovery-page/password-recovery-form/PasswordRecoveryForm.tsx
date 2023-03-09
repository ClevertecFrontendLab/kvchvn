import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { PASSWORD_RECOVERY_INPUT, ROUTES, VALIDATION_ERROR } from '../../../constants';
import { check } from '../../../helpers';
import { ForgotPassRequestBody } from '../../../types';
import { InputBox } from '../../common/input-box';

import styles from './PasswordRecoveryForm.module.scss';

export const PasswordRecoveryForm = () => {
  const {
    handleSubmit: handleSubmitWrapper,
    control,
    formState: { isValid: isFormValid, submitCount },
  } = useForm<ForgotPassRequestBody>();

  const handleSubmit = handleSubmitWrapper((formValues) => {
    console.log(formValues);
  });

  return (
    <>
      <div className={styles['link-box']}>
        <Link to={ROUTES.auth}>Вход в личный кабинет</Link>
      </div>
      <h4 className={styles.heading}>Восстановление пароля</h4>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
        <div>
          <InputBox
            type='email'
            name={PASSWORD_RECOVERY_INPUT.email.name}
            label={PASSWORD_RECOVERY_INPUT.email.label}
            control={control}
            validationRules={{
              validate: (val) => check(val).hasValidEmail || VALIDATION_ERROR.invalidEmail,
              required: VALIDATION_ERROR.requiredField,
            }}
          />
          <p className={styles['assistive-text']}>
            На это email будет отправлено письмо с инструкциями по восстановлению пароля
          </p>
        </div>
        <div className={styles['submit-box']}>
          <button type='submit' disabled={!isFormValid && submitCount > 0}>
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
