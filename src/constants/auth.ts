import {
  AuthenticationFieldName,
  AuthModal,
  FieldContent,
  ForgotPasswordFieldName,
  RegistrationFieldName,
  ResetPasswordFieldName,
} from '../types';

import { LOGIN_VALIDATION_SUBJECT, PASSWORD_VALIDATION_SUBJECT } from './validation';

export const REGISTRATION_FIRST_STEP = 1;
export const REGISTRATION_LAST_STEP = 3;

export const REGISTRATION_FIELD: FieldContent<RegistrationFieldName> = {
  username: {
    name: 'username',
    label: 'Придумайте логин для входа',
    hint: `Используйте для логина ${LOGIN_VALIDATION_SUBJECT.latinLetter} и ${LOGIN_VALIDATION_SUBJECT.number}`,
  },
  password: {
    name: 'password',
    label: 'Пароль',
    hint: `Пароль ${PASSWORD_VALIDATION_SUBJECT.length}, с ${PASSWORD_VALIDATION_SUBJECT.capitalLetter} и ${PASSWORD_VALIDATION_SUBJECT.number}`,
  },
  firstName: {
    name: 'firstName',
    label: 'Имя',
  },
  lastName: {
    name: 'lastName',
    label: 'Фамилия',
  },
  phone: {
    name: 'phone',
    label: 'Номер телефона',
    hint: 'В формате +375 (xx) xxx-xx-xx',
  },
  email: {
    name: 'email',
    label: 'E-mail',
  },
};

export const AUTHENTICATION_FIELD: FieldContent<AuthenticationFieldName> = {
  identifier: {
    name: 'identifier',
    label: 'Логин',
  },
  password: {
    name: 'password',
    label: 'Пароль',
  },
};

export const FORGOT_PASSWORD_FIELD: FieldContent<ForgotPasswordFieldName> = {
  email: {
    name: 'email',
    label: 'E-mail',
  },
};

export const RESET_PASSWORD_FIELD: FieldContent<ResetPasswordFieldName> = {
  password: {
    name: 'password',
    label: 'Новый пароль',
    hint: `Пароль ${PASSWORD_VALIDATION_SUBJECT.length}, с ${PASSWORD_VALIDATION_SUBJECT.capitalLetter} и ${PASSWORD_VALIDATION_SUBJECT.number}`,
  },
  passwordConfirmation: {
    name: 'passwordConfirmation',
    label: 'Повторите пароль',
  },
};

export const AUTH_FAILURE_MODAL: AuthModal = {
  title: 'Вход не выполнен',
  description: 'Что-то пошло не так. Попробуйте ещё раз',
  buttonText: 'Повторить',
};

export const REGISTRATION_FAILURE_MODAL: { [key: string]: AuthModal } = {
  '400': {
    title: 'Данные не сохранились',
    description:
      'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.',
    buttonText: 'Назад к регистрации',
  },
  default: {
    title: 'Данные не сохранились',
    description: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
    buttonText: 'Повторить',
  },
};

export const REGISTRATION_SUCCESS_MODAL: AuthModal = {
  title: 'Регистрация успешна',
  description: 'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль',
  buttonText: 'Вход',
};

export const FORGOT_PASSWORD_SUCCESS_MODAL: AuthModal = {
  title: 'Письмо выслано',
  description: 'Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля',
};

export const RESET_PASSWORD_SUCCESS_MODAL: AuthModal = {
  title: 'Новые данные сохранены',
  description: 'Зайдите в личный кабинет, используя свои логин и новый пароль',
  buttonText: 'Вход',
};

export const RESET_PASSWORD_FAILURE_MODAL: AuthModal = {
  title: 'Данные не сохранились',
  description: 'Что-то пошло не так. Попробуйте ещё раз',
  buttonText: 'Повторить',
};
