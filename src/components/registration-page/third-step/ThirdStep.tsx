import React from 'react';
import { Control } from 'react-hook-form';

import { REGISTRATION_FIELD, VALIDATION_ERROR } from '../../../constants';
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
        name={REGISTRATION_FIELD.phone.name}
        label={REGISTRATION_FIELD.phone.label}
        control={control}
        initialHintText={REGISTRATION_FIELD.phone.hint}
        validationRules={{
          validate: (val) => validatePhone(val) || REGISTRATION_FIELD.phone.hint,
          required: VALIDATION_ERROR.requiredField,
        }}
      />
    </li>
    <li>
      <InputBox
        type='email'
        name={REGISTRATION_FIELD.email.name}
        label={REGISTRATION_FIELD.email.label}
        control={control}
        validationRules={{
          validate: (val) => validateEmail(val) || VALIDATION_ERROR.invalidEmail,
          required: VALIDATION_ERROR.requiredField,
        }}
      />
    </li>
  </>
);
