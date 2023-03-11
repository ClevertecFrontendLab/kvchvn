import {
  AuthInputName,
  ForgotPasswordInputName,
  InputContent,
  RegistrationInputName,
  ResetPasswordInputName,
} from '../types';

import { LOGIN_VALIDATION_SUBJECT, PASSWORD_VALIDATION_SUBJECT } from './validation';

export const REGISTRATION_FIRST_STEP = 1;
export const REGISTRATION_LAST_STEP = 3;

export const REGISTRATION_INPUT: InputContent<RegistrationInputName> = {
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

export const AUTH_INPUT: InputContent<AuthInputName> = {
  identifier: {
    name: 'identifier',
    label: 'Логин',
  },
  password: {
    name: 'password',
    label: 'Пароль',
  },
};

export const FORGOT_PASSWORD_INPUT: InputContent<ForgotPasswordInputName> = {
  email: {
    name: 'email',
    label: 'E-mail',
  },
};

export const RESET_PASSWORD_INPUT: InputContent<ResetPasswordInputName> = {
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

export const REGISTRATION_FAILURE_MESSAGE = {
  '400': 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.',
  default: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз',
};
