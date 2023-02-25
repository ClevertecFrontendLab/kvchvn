import React, { useState } from 'react';

import { SignInForm } from '../../components/auth/sign-in-form';
import { SignUpForm } from '../../components/auth/sign-up-form';

import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const goToSignIn = () => setIsSignIn(true);
  const goToSignUp = () => setIsSignIn(false);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {isSignIn ? <SignInForm goToSignUp={goToSignUp} /> : <SignUpForm goToSignIn={goToSignIn} />}
      </section>
    </main>
  );
};
