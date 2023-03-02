import React from 'react';
import { useFormContext } from 'react-hook-form';

import { REGISTRATION_INPUT } from '../../../constants';
import { validateLogin, validatePassword } from '../../../helpers';
import { InputBox } from '../../common/input-box';

export const FirstStep = () => {
  const { register } = useFormContext();

  return (
    <>
      <li>
        <InputBox
          type='text'
          name={REGISTRATION_INPUT.login.name}
          label={REGISTRATION_INPUT.login.label}
          assistiveText={REGISTRATION_INPUT.login.assistiveText}
          register={register(REGISTRATION_INPUT.login.name, { validate: validateLogin })}
        />
      </li>
      <li>
        <InputBox
          type='password'
          name={REGISTRATION_INPUT.password.name}
          label={REGISTRATION_INPUT.password.label}
          assistiveText={REGISTRATION_INPUT.password.assistiveText}
          register={register(REGISTRATION_INPUT.password.name, { validate: validatePassword })}
        />
      </li>
    </>
  );
};
