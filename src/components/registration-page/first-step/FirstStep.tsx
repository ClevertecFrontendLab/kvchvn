import React from 'react';
import { Control } from 'react-hook-form';

import {
  LOGIN_VALIDATION_SUBJECT,
  PASSWORD_VALIDATION_SUBJECT,
  REGISTRATION_FIELD,
  VALIDATION_ERROR,
} from '../../../constants';
import { validateLogin, validatePassword } from '../../../helpers';
import { InputBoxValidationsProp, RegistrationRequestBody } from '../../../types';
import { InputBox } from '../../common/input-box';

interface FirstStepProps {
  control: Control<RegistrationRequestBody>;
}

export const FirstStep = ({ control }: FirstStepProps) => {
  const loginValidations: InputBoxValidationsProp = [
    {
      type: 'hasLatinLetter',
      stringSlice: LOGIN_VALIDATION_SUBJECT.latinLetter,
    },
    { type: 'hasNumber', stringSlice: LOGIN_VALIDATION_SUBJECT.number },
  ];

  const passwordValidations: InputBoxValidationsProp = [
    {
      type: 'hasRequiredLength',
      stringSlice: PASSWORD_VALIDATION_SUBJECT.length,
    },
    { type: 'hasCapitalLetter', stringSlice: PASSWORD_VALIDATION_SUBJECT.capitalLetter },
    { type: 'hasNumber', stringSlice: PASSWORD_VALIDATION_SUBJECT.number },
  ];

  return (
    <>
      <li>
        <InputBox
          type='text'
          name={REGISTRATION_FIELD.username.name}
          label={REGISTRATION_FIELD.username.label}
          initialHintText={REGISTRATION_FIELD.username.hint}
          validationRules={{
            validate: (val) => validateLogin(val) || REGISTRATION_FIELD.username.hint,
            required: VALIDATION_ERROR.requiredField,
          }}
          stepByStepValidationRules={loginValidations}
          control={control}
        />
      </li>
      <li>
        <InputBox
          type='password'
          name={REGISTRATION_FIELD.password.name}
          label={REGISTRATION_FIELD.password.label}
          initialHintText={REGISTRATION_FIELD.password.hint}
          validationRules={{
            validate: (val) => validatePassword(val) || REGISTRATION_FIELD.password.hint,
            required: VALIDATION_ERROR.requiredField,
          }}
          stepByStepValidationRules={passwordValidations}
          control={control}
        />
      </li>
    </>
  );
};
