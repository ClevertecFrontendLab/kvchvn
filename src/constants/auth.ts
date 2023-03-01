import { InputContent, RegistrationInputName } from '../types';

export const REGISTRATION_FIRST_STEP = 1;
export const REGISTRATION_LAST_STEP = 3;

export const REGISTRATION_INPUT: InputContent<RegistrationInputName> = {
  login: {
    name: 'login',
    label: 'Придумайте логин для входа',
    assistiveText: 'Используйте для логина латинский алфавит и цифры',
  },
  password: {
    name: 'password',
    label: 'Пароль',
    assistiveText: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
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

export const AUTH_INPUT: InputContent<'login' | 'password'> = {
  login: {
    name: 'login',
    label: 'Логин',
  },
  password: {
    name: 'password',
    label: 'Пароль',
  },
};

export const PASSWORD_RECOVERY_INPUT: InputContent<'email'> = {
  email: {
    name: 'email',
    label: 'E-mail',
    assistiveText: 'На это email будет отправлено письмо с инструкциями по восстановлению пароля',
  },
};
