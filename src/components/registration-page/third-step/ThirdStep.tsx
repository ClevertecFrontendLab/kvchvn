import React from 'react';
import { Control } from 'react-hook-form';

import { INVALID_EMAIL_ERROR, INVALID_PHONE_ERROR, REGISTRATION_INPUT, REQUIRED_FIELD_ERROR } from '../../../constants';
import { validateEmail, validatePhone } from '../../../helpers';
import { InputBox } from '../../common/input-box';

interface ThirdStepProps {
  control: Control;
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
          validate: (val) => validatePhone(val) || INVALID_PHONE_ERROR,
          required: REQUIRED_FIELD_ERROR,
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
          validate: (val) => validateEmail(val) || INVALID_EMAIL_ERROR,
          required: REQUIRED_FIELD_ERROR,
        }}
      />
    </li>
  </>
);
