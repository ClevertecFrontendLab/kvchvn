import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { AuthModal } from '../../global/auth-modal';

export const RegistrationSuccess = () => {
  const navigate = useNavigate();

  // there is button instead of Link because of the tests
  const handleClick = () => navigate(ROUTES.auth);

  return (
    <AuthModal>
      <h4>Регистрация успешна</h4>
      <p>Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль</p>
      <button type='button' onClick={handleClick}>
        Вход
      </button>
    </AuthModal>
  );
};
