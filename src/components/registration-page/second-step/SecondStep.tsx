import React from 'react';

import { REGISTRATION_INPUT } from '../../../constants';
import { InputBox } from '../../common/input-box';

export const SecondStep = () => (
  <>
    <li>
      <InputBox
        type='text'
        name={REGISTRATION_INPUT.firstName.name}
        label={REGISTRATION_INPUT.firstName.label}
        registerOptions={{ required: true }}
      />
    </li>
    <li>
      <InputBox
        type='text'
        name={REGISTRATION_INPUT.lastName.name}
        label={REGISTRATION_INPUT.lastName.label}
        registerOptions={{ required: true }}
      />
    </li>
  </>
);
