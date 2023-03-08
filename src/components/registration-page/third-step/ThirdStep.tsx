import React from 'react';
import { Control } from 'react-hook-form';

import { REGISTRATION_INPUT, VALIDATION_ERROR } from '../../../constants';
import { validateEmail, validatePhone } from '../../../helpers';
import { RegistrationRequestBody } from '../../../types';
import { InputBox } from '../../common/input-box';

interface ThirdStepProps {
  control: Control<RegistrationRequestBody>;
}

export const ThirdStep = ({ control }: ThirdStepProps) => (
  <>
    <li>
      <InputBox
        type='text'
        name={REGISTRATION_INPUT.phone.name}
        label={REGISTRATION_INPUT.phone.label}
        control={control}
        validationRules={{
          validate: (val) => validatePhone(val) || VALIDATION_ERROR.invalidPhone,
          required: VALIDATION_ERROR.requiredField,
        }}
      />
    </li>
    <li>
      <InputBox
        type='email'
        name={REGISTRATION_INPUT.email.name}
        label={REGISTRATION_INPUT.email.label}
        control={control}
        validationRules={{
          validate: (val) => validateEmail(val) || VALIDATION_ERROR.invalidEmail,
          required: VALIDATION_ERROR.requiredField,
        }}
      />
    </li>
  </>
);
