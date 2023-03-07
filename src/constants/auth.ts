import { AuthInputName, InputContent, PasswordRecoveryInputName, RegistrationInputName } from '../types';

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

export const PASSWORD_RECOVERY_INPUT: InputContent<PasswordRecoveryInputName> = {
  email: {
    name: 'email',
    label: 'E-mail',
    hint: 'На это email будет отправлено письмо с инструкциями по восстановлению пароля',
  },
};
