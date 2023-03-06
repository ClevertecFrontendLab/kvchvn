import React from 'react';
import { Link } from 'react-router-dom';

import { PASSWORD_RECOVERY_INPUT, ROUTES } from '../../../constants';
import { InputBox } from '../../common/input-box';

import styles from './PasswordRecoveryForm.module.scss';

export const PasswordRecoveryForm = () => {
  const handleClick = () => alert('Восстановление');

  return (
    <>
      <div />
      <h4>Восстановление пароля</h4>
      <form autoComplete='off'>
        <InputBox
          type='email'
          name={PASSWORD_RECOVERY_INPUT.email.name}
          label={PASSWORD_RECOVERY_INPUT.email.label}
          initialAssistiveText={PASSWORD_RECOVERY_INPUT.email.assistiveText}
        />
      </form>
      <div className={styles['submit-box']}>
        <button type='button' onClick={handleClick}>
          Восстановить
        </button>
        <p>
          Нет учетной записи?
          <Link to={ROUTES.registration}>Регистрация</Link>
        </p>
      </div>
    </>
  );
};
