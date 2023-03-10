import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { AuthModal } from '../../global/auth-modal';

export const RegistrationSuccess = () => (
  <AuthModal>
    <h4>Регистрация успешна</h4>
    <p>Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль</p>
    <Link to={ROUTES.auth}>Вход</Link>
  </AuthModal>
);
