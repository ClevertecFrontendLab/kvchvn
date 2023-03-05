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
