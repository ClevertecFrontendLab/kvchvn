import { CheckFnOptions } from '../types';

export const CHECK_FN_DEFAULT_OPTIONS: CheckFnOptions = {
  requiredLength: 0,
};

export const PASSWORD_MIN_LENGTH = 8;

export const LOGIN_VALIDATION_SUBJECT = {
  latinLetter: 'латинский алфавит',
  number: 'цифры',
};

export const PASSWORD_VALIDATION_SUBJECT = {
  length: `не менее ${PASSWORD_MIN_LENGTH} символов`,
  capitalLetter: 'заглавной буквой',
  number: 'цифрой',
};

export const PHONE_MASK = [
  '+',
  '3',
  '7',
  '5',
  ' ',
  '(',
  /[234]/,
  /[934]/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

export const PHONE_MASK_PLACEHOLDER = 'x';

export const INVALID_PHONE_ERROR = 'В формате +375 (xx) xxx-xx-xx';

export const REQUIRED_FIELD_ERROR = 'Поле не может быть пустым';

export const INVALID_EMAIL_ERROR = 'Введите корректный e-mail';
