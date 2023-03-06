import React from 'react';

import { REGISTRATION_INPUT } from '../../../constants';
import { InputBox } from '../../common/input-box';

export const ThirdStep = () => (
  <>
    <li>
      <InputBox
        type='text'
        name={REGISTRATION_INPUT.phone.name}
        label={REGISTRATION_INPUT.phone.label}
        registerOptions={{ required: true }}
      />
    </li>
    <li>
      <InputBox
        type='email'
        name={REGISTRATION_INPUT.email.name}
        label={REGISTRATION_INPUT.email.label}
        registerOptions={{ required: true }}
      />
    </li>
  </>
);
