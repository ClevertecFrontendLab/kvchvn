import React from 'react';
import { Link } from 'react-router-dom';

import { AUTH_INPUT, ROUTES } from '../../../constants';
import { InputBox } from '../../common/input-box';

import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const handleClick = () => alert('Вход');

  return (
    <>
      <h4>Вход в личный кабинет</h4>
      <form autoComplete='off' className={styles.form}>
        <ul>
          <li>
            <InputBox type='text' name={AUTH_INPUT.login.name} label={AUTH_INPUT.login.label} isError={false} />
          </li>
          <li>
            <InputBox
              type='password'
              name={AUTH_INPUT.password.name}
              label={AUTH_INPUT.password.label}
              isError={false}
            />
          </li>
        </ul>
        <button type='button'>Забыли логин или пароль?</button>
      </form>
      <div className={styles['submit-box']}>
        <button type='button' onClick={handleClick}>
          Вход
        </button>
        <p>
          Нет учетной записи?
          <Link to={ROUTES.registration}>Регистрация</Link>
        </p>
      </div>
    </>
  );
};
