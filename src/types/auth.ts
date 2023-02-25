type SignUpInputName = 'login' | 'password' | 'firstName' | 'lastName' | 'phone' | 'email';

export type SignUpInputContent = {
  [Property in SignUpInputName]: {
    label: string;
    assistiveText?: string;
  };
};

export type SignUpSteps = JSX.Element[][];
