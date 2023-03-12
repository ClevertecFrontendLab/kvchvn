import React from 'react';
import { Control } from 'react-hook-form';

import { REGISTRATION_FIELD, VALIDATION_ERROR } from '../../../constants';
import { RegistrationRequestBody } from '../../../types';
import { InputBox } from '../../common/input-box';

interface SecondStepProps {
  control: Control<RegistrationRequestBody>;
}

export const SecondStep = ({ control }: SecondStepProps) => {
  const commonProps = {
    type: 'text',
    control,
    validationRules: { required: VALIDATION_ERROR.requiredField },
  };

  return (
    <>
      <li>
        <InputBox
          {...commonProps}
          name={REGISTRATION_FIELD.firstName.name}
          label={REGISTRATION_FIELD.firstName.label}
        />
      </li>
      <li>
        <InputBox {...commonProps} name={REGISTRATION_FIELD.lastName.name} label={REGISTRATION_FIELD.lastName.label} />
      </li>
    </>
  );
};
