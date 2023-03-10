import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { AuthModal } from '../../global/auth-modal';

export const ResetPasswordSuccess = () => (
  <AuthModal>
    <h4>Новые данные сохранены</h4>
    <p>Зайдите в личный кабинет, используя свои логин и новый пароль</p>
    <Link to={ROUTES.auth}>Вход</Link>
  </AuthModal>
);
