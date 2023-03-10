import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  PASSWORD_VALIDATION_SUBJECT,
  RESET_PASSWORD_FAILURE_MODAL,
  RESET_PASSWORD_FIELD,
  RESET_PASSWORD_SUCCESS_MODAL,
  ROUTES,
  VALIDATION_ERROR,
} from '../../../constants';
import { validatePassword } from '../../../helpers';
import { useChangePasswordMutation } from '../../../store';
import { InputBoxValidationsProp, ResetPasswordRequestBody } from '../../../types';
import { AuthModal } from '../../common/auth-modal';
import { InputBox } from '../../common/input-box';
import { Loading } from '../../global/loading';

import styles from './ResetPasswordForm.module.scss';

interface ResetPasswordFormProps {
  code: string;
}

export const ResetPasswordForm = ({ code }: ResetPasswordFormProps) => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit: handleSubmitWrapper,
    formState: { isValid: isFormValid, submitCount, touchedFields },
    getValues: getFormValues,
  } = useForm<Omit<ResetPasswordRequestBody, 'code'>>({
    mode: 'all',
    shouldFocusError: false,
  });
  const [changePassword, { isLoading, isSuccess }] = useChangePasswordMutation();

  const handleSubmit = handleSubmitWrapper(async (formValues) => {
    try {
      await changePassword({ ...formValues, code }).unwrap();
    } catch {
      setIsError(true);
    }
  });

  const tryToChangePassword = () => changePassword({ ...getFormValues(), code });

  const goToAuthPage = () => navigate(ROUTES.auth);

  const passwordValidations: InputBoxValidationsProp = [
    {
      type: 'hasRequiredLength',
      stringSlice: PASSWORD_VALIDATION_SUBJECT.length,
    },
    { type: 'hasCapitalLetter', stringSlice: PASSWORD_VALIDATION_SUBJECT.capitalLetter },
    { type: 'hasNumber', stringSlice: PASSWORD_VALIDATION_SUBJECT.number },
  ];

  if (isSuccess) {
    return (
      <AuthModal
        title={RESET_PASSWORD_SUCCESS_MODAL.title}
        description={RESET_PASSWORD_SUCCESS_MODAL.description}
        buttonText={RESET_PASSWORD_SUCCESS_MODAL.buttonText}
        buttonAction={goToAuthPage}
      />
    );
  }

  if (isError) {
    return (
      <>
        {isLoading && <Loading />}
        <AuthModal
          title={RESET_PASSWORD_FAILURE_MODAL.title}
          description={RESET_PASSWORD_FAILURE_MODAL.description}
          buttonText={RESET_PASSWORD_FAILURE_MODAL.buttonText}
          buttonAction={tryToChangePassword}
        />
      </>
    );
  }

  return (
    <>
      {isLoading && <Loading />}
      <h4>???????????????????????????? ????????????</h4>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form} data-test-id='reset-password-form'>
        <ul className={styles['inputs-list']}>
          <li>
            <InputBox
              type='password'
              name={RESET_PASSWORD_FIELD.password.name}
              label={RESET_PASSWORD_FIELD.password.label}
              control={control}
              validationRules={{
                validate: (val: string) => validatePassword(val) || RESET_PASSWORD_FIELD.password.hint,
                required: VALIDATION_ERROR.requiredField,
              }}
              initialHintText={RESET_PASSWORD_FIELD.password.hint}
              stepByStepValidationRules={passwordValidations}
            />
          </li>
          <li>
            <InputBox
              type='password'
              name={RESET_PASSWORD_FIELD.passwordConfirmation.name}
              label={RESET_PASSWORD_FIELD.passwordConfirmation.label}
              control={control}
              validationRules={{
                validate: (val: string, formValues) =>
                  val === (formValues as ResetPasswordRequestBody).password || VALIDATION_ERROR.differentPasswords,
                required: VALIDATION_ERROR.requiredField,
              }}
            />
          </li>
        </ul>
        <button
          type='submit'
          disabled={!isFormValid && (Boolean(Object.keys(touchedFields).length) || submitCount > 0)}
        >
          ?????????????????? ??????????????????
        </button>
        <p>?????????? ???????????????????? ?????????????? ?? ????????????????????, ?????????????????? ?????????? ????????????</p>
      </form>
    </>
  );
};
