import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PASSWORD_VALIDATION_SUBJECT, RESET_PASSWORD_INPUT, VALIDATION_ERROR } from '../../../constants';
import { validatePassword } from '../../../helpers';
import { useChangePasswordMutation } from '../../../store';
import { InputBoxValidationsProp, ResetPasswordRequestBody } from '../../../types';
import { InputBox } from '../../common/input-box';
import { Loading } from '../../global/loading';
import { ResetPasswordFailure } from '../reset-password-failure';
import { ResetPasswordSuccess } from '../reset-password-success';

import styles from './ResetPasswordForm.module.scss';

interface ResetPasswordFormProps {
  code: string;
}

export const ResetPasswordForm = ({ code }: ResetPasswordFormProps) => {
  const [isError, setIsError] = useState(false);
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

  const passwordValidations: InputBoxValidationsProp = [
    {
      type: 'hasRequiredLength',
      stringSlice: PASSWORD_VALIDATION_SUBJECT.length,
    },
    { type: 'hasCapitalLetter', stringSlice: PASSWORD_VALIDATION_SUBJECT.capitalLetter },
    { type: 'hasNumber', stringSlice: PASSWORD_VALIDATION_SUBJECT.number },
  ];

  if (isSuccess) {
    return <ResetPasswordSuccess />;
  }

  if (isError) {
    return (
      <>
        {isLoading && <Loading />}
        <ResetPasswordFailure actionFn={tryToChangePassword} />
      </>
    );
  }

  return (
    <>
      {isLoading && <Loading />}
      <h4>Восстановление пароля</h4>
      <form autoComplete='off' onSubmit={handleSubmit} className={styles.form} data-test-id='reset-password-form'>
        <ul className={styles['inputs-list']}>
          <li>
            <InputBox
              type='password'
              name={RESET_PASSWORD_INPUT.password.name}
              label={RESET_PASSWORD_INPUT.password.label}
              control={control}
              validationRules={{
                validate: (val: string) => validatePassword(val) || RESET_PASSWORD_INPUT.password.hint,
                required: VALIDATION_ERROR.requiredField,
              }}
              initialHintText={RESET_PASSWORD_INPUT.password.hint}
              stepByStepValidationRules={passwordValidations}
            />
          </li>
          <li>
            <InputBox
              type='password'
              name={RESET_PASSWORD_INPUT.passwordConfirmation.name}
              label={RESET_PASSWORD_INPUT.passwordConfirmation.label}
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
          Сохранить изменения
        </button>
        <p>После сохранения войдите в библиотеку, используя новый пароль</p>
      </form>
    </>
  );
};
