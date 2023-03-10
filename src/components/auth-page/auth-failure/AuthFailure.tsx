import React from 'react';

import { AuthModal } from '../../global/auth-modal';

interface AuthFailureProps {
  actionFn: () => void;
}

export const AuthFailure = ({ actionFn }: AuthFailureProps) => (
  <AuthModal>
    <h4>Вход не выполнен</h4>
    <p>Что-то пошло не так. Попробуйте ещё раз</p>
    <button type='button' onClick={actionFn}>
      Повторить
    </button>
  </AuthModal>
);
