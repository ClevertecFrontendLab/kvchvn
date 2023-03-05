import { CHECK_FN_DEFAULT_OPTIONS, PASSWORD_MIN_LENGTH } from '../constants';
import { CheckFnOptions, CheckFnReturn } from '../types';

export const check = (value: string, options: CheckFnOptions = CHECK_FN_DEFAULT_OPTIONS): CheckFnReturn => ({
  hasLatinLetter: /\p{sc=Latn}/u.test(value),
  hasNumber: /\d/.test(value),
  hasOnlyLatinLetterOrNumber: /^[\p{sc=Latn}\d]*$/u.test(value),
  hasCapitalLetter: /[A-Z]/.test(value),
  hasRequiredLength: value.length >= options.requiredLength,
});

export const validateLogin = (value: string) => {
  const checking = check(value);

  return checking.hasOnlyLatinLetterOrNumber && checking.hasLatinLetter && checking.hasNumber;
};

export const validatePassword = (value: string) => {
  const checking = check(value, { requiredLength: PASSWORD_MIN_LENGTH });

  return checking.hasCapitalLetter && checking.hasRequiredLength && checking.hasNumber;
};
