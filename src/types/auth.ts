import { Nullable } from './common';

export type RegistrationInputName = 'login' | 'password' | 'firstName' | 'lastName' | 'phone' | 'email';
export type AuthInputName = 'identifier' | 'password';
export type PasswordRecoveryInputName = 'email';

export type InputContent<T extends string> = {
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
  [Property in RegistrationInputName]: string;
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
