import React from 'react';
import { useFormContext } from 'react-hook-form';

import { REGISTRATION_INPUT } from '../../../constants';
import { InputBox } from '../../common/input-box';

export const SecondStep = () => {
  const { register } = useFormContext();

  return (
    <>
      <li>
        <InputBox
          type='text'
          name={REGISTRATION_INPUT.firstName.name}
          label={REGISTRATION_INPUT.firstName.label}
          register={register(REGISTRATION_INPUT.firstName.name, { required: true })}
        />
      </li>
      <li>
        <InputBox
          type='text'
          name={REGISTRATION_INPUT.lastName.name}
          label={REGISTRATION_INPUT.lastName.label}
          register={register(REGISTRATION_INPUT.lastName.name, { required: true })}
        />
      </li>
    </>
  );
};
