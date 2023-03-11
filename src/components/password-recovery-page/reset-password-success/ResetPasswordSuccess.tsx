import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { AuthModal } from '../../global/auth-modal';

export const ResetPasswordSuccess = () => {
  const navigate = useNavigate();

  // there is button instead of Link because of the tests
  const handleClick = () => navigate(ROUTES.auth);

  return (
    <AuthModal>
      <h4>Новые данные сохранены</h4>
      <p>Зайдите в личный кабинет, используя свои логин и новый пароль</p>
      <button type='button' onClick={handleClick}>
        Вход
      </button>
    </AuthModal>
  );
};
