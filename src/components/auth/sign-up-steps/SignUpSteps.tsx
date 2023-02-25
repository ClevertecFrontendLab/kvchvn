import React from 'react';
import classnames from 'classnames';

import { SIGN_UP_FIRST_STEP, SIGN_UP_INPUT, SIGN_UP_LAST_STEP } from '../../../constants';
import { InputBox } from '../../common/input-box';

import styles from './SignUpSteps.module.scss';

interface SignUpStepsProps {
  currentStep: number;
}

export const SignUpSteps = ({ currentStep }: SignUpStepsProps) => {
  const complexStyles = {
    firstStepItem: classnames(styles.item, { [styles.hidden]: currentStep !== SIGN_UP_FIRST_STEP }),
    secondStepItem: classnames(styles.item, { [styles.hidden]: currentStep !== SIGN_UP_FIRST_STEP + 1 }),
    lastStepItem: classnames(styles.item, { [styles.hidden]: currentStep !== SIGN_UP_LAST_STEP }),
  };

  return (
    <>
      <li className={complexStyles.firstStepItem}>
        <InputBox
          type='text'
          name='login'
          label={SIGN_UP_INPUT.login.label}
          assistiveText={SIGN_UP_INPUT.login.assistiveText}
          isError={false}
        />
      </li>
      <li className={complexStyles.firstStepItem}>
        <InputBox
          type='password'
          name='password'
          label={SIGN_UP_INPUT.password.label}
          assistiveText={SIGN_UP_INPUT.password.assistiveText}
          isError={false}
        />
      </li>
      <li className={complexStyles.secondStepItem}>
        <InputBox type='text' name='firstName' label={SIGN_UP_INPUT.firstName.label} isError={false} />
      </li>
      <li className={complexStyles.secondStepItem}>
        <InputBox type='text' name='lastName' label={SIGN_UP_INPUT.lastName.label} isError={false} />
      </li>
      <li className={complexStyles.lastStepItem}>
        <InputBox type='text' name='phone' label={SIGN_UP_INPUT.phone.label} isError={false} />
      </li>
      <li className={complexStyles.lastStepItem}>
        <InputBox type='email' name='email' label={SIGN_UP_INPUT.email.label} isError={false} />
      </li>
    </>
  );
};
