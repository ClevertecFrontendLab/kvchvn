import React from 'react';

interface SignInFormProps {
  goToSignUp: () => void;
}

export const SignInForm = ({ goToSignUp }: SignInFormProps) => <h2>SignIn</h2>;
