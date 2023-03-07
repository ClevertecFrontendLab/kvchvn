import React from 'react';
import { Control } from 'react-hook-form';

import {
  LOGIN_VALIDATION_SUBJECT,
  PASSWORD_VALIDATION_SUBJECT,
  REGISTRATION_INPUT,
  VALIDATION_ERROR,
} from '../../../constants';
import { validateLogin, validatePassword } from '../../../helpers';
import { InputBoxValidationsProp } from '../../../types';
import { InputBox } from '../../common/input-box';

interface FirstStepProps {
  control: Control;
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
          name={REGISTRATION_INPUT.username.name}
          label={REGISTRATION_INPUT.username.label}
          initialHintText={REGISTRATION_INPUT.username.hint}
          validationRules={{
            validate: (val) => validateLogin(val) || REGISTRATION_INPUT.username.hint,
            required: VALIDATION_ERROR.requiredField,
          }}
          stepByStepValidationRules={loginValidations}
          control={control}
        />
      </li>
      <li>
        <InputBox
          type='password'
          name={REGISTRATION_INPUT.password.name}
          label={REGISTRATION_INPUT.password.label}
          initialHintText={REGISTRATION_INPUT.password.hint}
          validationRules={{
            validate: (val) => validatePassword(val) || REGISTRATION_INPUT.password.hint,
            required: VALIDATION_ERROR.requiredField,
          }}
          stepByStepValidationRules={passwordValidations}
          control={control}
        />
      </li>
    </>
  );
};
