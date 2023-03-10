import React from 'react';

import { AuthModal } from '../../global/auth-modal';

export const ForgotPasswordSuccess = () => (
  <AuthModal>
    <h4>Письмо выслано</h4>
    <p>Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля</p>
  </AuthModal>
);
