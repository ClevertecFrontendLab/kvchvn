import React from 'react';

import { LOGIN_VALIDATION_SUBJECT, PASSWORD_VALIDATION_SUBJECT, REGISTRATION_INPUT } from '../../../constants';
import { validateLogin, validatePassword } from '../../../helpers';
import { InputBoxValidationsProp } from '../../../types';
import { InputBox } from '../../common/input-box';

export const FirstStep = () => {
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
          initialAssistiveText={REGISTRATION_INPUT.login.assistiveText}
          registerOptions={{ validate: validateLogin, required: true }}
          validations={loginValidations}
        />
      </li>
      <li>
        <InputBox
          type='password'
          name={REGISTRATION_INPUT.password.name}
          label={REGISTRATION_INPUT.password.label}
          initialAssistiveText={REGISTRATION_INPUT.password.assistiveText}
          registerOptions={{ validate: validatePassword, required: true }}
          validations={passwordValidations}
        />
      </li>
    </>
  );
};
