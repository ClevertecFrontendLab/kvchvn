import React from 'react';

import { PASSWORD_RECOVERY_INPUT } from '../../../constants';
import { InputBox } from '../../common/input-box';

export const PasswordRecoveryForm = () => {
  const handleClick = () => alert('Восстановление');

  return (
    <>
      <div />
      <h4>Восстановление пароля</h4>
      <InputBox
        type='email'
        name={PASSWORD_RECOVERY_INPUT.email.name}
        label={PASSWORD_RECOVERY_INPUT.email.label}
        assistiveText={PASSWORD_RECOVERY_INPUT.email.assistiveText}
      />
    </>
  );
};
