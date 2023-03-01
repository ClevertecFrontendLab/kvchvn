export type RegistrationInputName = 'login' | 'password' | 'firstName' | 'lastName' | 'phone' | 'email';

export type InputContent<T extends string> = {
  [Property in T]: {
    name: Property;
    label: string;
    assistiveText?: string;
  };
};

export type RegistrationSteps = JSX.Element[][];
