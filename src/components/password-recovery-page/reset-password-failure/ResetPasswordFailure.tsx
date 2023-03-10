import React from 'react';

import { AuthModal } from '../../global/auth-modal';

interface ResetPasswordFailureProps {
  actionFn: () => void;
}

export const ResetPasswordFailure = ({ actionFn }: ResetPasswordFailureProps) => (
  <AuthModal>
    <h4>Данные не сохранились</h4>
    <p>Что-то пошло не так. Попробуйте ещё раз</p>
    <button type='button' onClick={actionFn}>
      Повторить
    </button>
  </AuthModal>
);
