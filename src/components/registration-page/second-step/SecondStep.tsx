import React from 'react';
import { Control } from 'react-hook-form';

import { REGISTRATION_INPUT, VALIDATION_ERROR } from '../../../constants';
import { RegistrationRequestBody } from '../../../types';
import { InputBox } from '../../common/input-box';

interface SecondStepProps {
  control: Control<RegistrationRequestBody>;
}

export const SecondStep = ({ control }: SecondStepProps) => (
  <>
    <li>
      <InputBox
        type='text'
        name={REGISTRATION_INPUT.firstName.name}
        label={REGISTRATION_INPUT.firstName.label}
        control={control}
        validationRules={{ required: VALIDATION_ERROR.requiredField }}
      />
    </li>
    <li>
      <InputBox
        type='text'
        name={REGISTRATION_INPUT.lastName.name}
        label={REGISTRATION_INPUT.lastName.label}
        control={control}
        validationRules={{ required: VALIDATION_ERROR.requiredField }}
      />
    </li>
  </>
);
