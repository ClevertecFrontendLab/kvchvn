import { Nullable } from './common';

export type RegistrationFieldName = 'username' | 'password' | 'firstName' | 'lastName' | 'phone' | 'email';
export type AuthenticationFieldName = 'identifier' | 'password';
export type ForgotPasswordFieldName = 'email';
export type ResetPasswordFieldName = 'password' | 'passwordConfirmation';

export type FieldContent<T extends string> = {
  [Property in T]: {
    name: Property;
    label: string;
    hint?: string;
  };
};

export type RegistrationSteps = JSX.Element[][];

interface User {
  id: Nullable<number>;
  username: Nullable<string>;
  email: Nullable<string>;
  provider: Nullable<string>;
  confirmed: Nullable<boolean>;
  blocked: Nullable<boolean>;
  createdAt: Nullable<string>;
  updatedAt: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  phone: Nullable<string>;
}

export type RegistrationRequestBody = {
  [Property in RegistrationFieldName]: string;
};

export interface AuthResponse {
  jwt: string;
  user: Nullable<User>;
}

export interface AuthRequestBody {
  identifier: string;
  password: string;
}

export interface PasswordResettingRequestBody {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export interface ForgotPassRequestBody {
  email: string;
}

export interface ResetPasswordRequestBody {
  password: string;
  passwordConfirmation: string;
  code: string;
}

export interface AuthModal {
  title: string;
  description: string;
  buttonText?: string;
}
