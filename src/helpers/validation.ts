export const checking = (value: string) => ({
  hasLatinLetter: /\p{sc=Latn}/u.test(value),
  hasNumber: /\d/.test(value),
  hasOnlyLatinLetterOrNumber: /^[\p{sc=Latn}\d]*$/u.test(value),
  hasCapitalLetter: /[A-Z]/.test(value),
  hasLengthMoreThan: (length: number) => value.length >= length,
});

export const validateLogin = (value: string) =>
  checking(value).hasOnlyLatinLetterOrNumber && checking(value).hasLatinLetter && checking(value).hasNumber;

export const validatePassword = (value: string) =>
  checking(value).hasCapitalLetter && checking(value).hasLengthMoreThan(8);
