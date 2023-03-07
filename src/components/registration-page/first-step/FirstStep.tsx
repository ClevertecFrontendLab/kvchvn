import React from 'react';
import { Control } from 'react-hook-form';

import {
  LOGIN_VALIDATION_SUBJECT,
  PASSWORD_VALIDATION_SUBJECT,
  REGISTRATION_INPUT,
  REQUIRED_FIELD_ERROR,
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
          name={REGISTRATION_INPUT.login.name}
          label={REGISTRATION_INPUT.login.label}
          initialHintText={REGISTRATION_INPUT.login.hint}
          validationRules={{
            validate: (val) => validateLogin(val) || REGISTRATION_INPUT.login.assistiveText,
            required: REQUIRED_FIELD_ERROR,
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
            validate: (val) => validatePassword(val) || REGISTRATION_INPUT.password.assistiveText,
            required: REQUIRED_FIELD_ERROR,
          }}
          stepByStepValidationRules={passwordValidations}
          control={control}
        />
      </li>
    </>
  );
};
