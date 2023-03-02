import React from 'react';
import { useFormContext } from 'react-hook-form';

import { REGISTRATION_INPUT } from '../../../constants';
import { InputBox } from '../../common/input-box';

export const ThirdStep = () => {
  const { register } = useFormContext();

  return (
    <>
      <li>
        <InputBox
          type='text'
          name={REGISTRATION_INPUT.phone.name}
          label={REGISTRATION_INPUT.phone.label}
          register={register(REGISTRATION_INPUT.phone.name)}
        />
      </li>
      <li>
        <InputBox
          type='email'
          name={REGISTRATION_INPUT.email.name}
          label={REGISTRATION_INPUT.email.label}
          register={register(REGISTRATION_INPUT.email.name)}
        />
      </li>
    </>
  );
};
