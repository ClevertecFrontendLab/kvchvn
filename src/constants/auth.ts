import { SignUpInputContent } from '../types';

export const SIGN_UP_FIRST_STEP = 1;
export const SIGN_UP_LAST_STEP = 3;

export const SIGN_UP_INPUT: SignUpInputContent = {
  login: {
    label: 'Придумайте логин для входа',
    assistiveText: 'Используйте для логина латинский алфавит и цифры',
  },
  password: {
    label: 'Пароль',
    assistiveText: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
  },
  firstName: {
    label: 'Имя',
  },
  lastName: {
    label: 'Фамилия',
  },
  phone: {
    label: 'Номер телефона',
  },
  email: {
    label: 'E-mail',
  },
};
