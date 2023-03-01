import React from 'react';
import classnames from 'classnames';

import { REGISTRATION_FIRST_STEP, REGISTRATION_INPUT, REGISTRATION_LAST_STEP } from '../../../constants';
import { InputBox } from '../../common/input-box';

import styles from './RegistrationSteps.module.scss';

interface SignUpStepsProps {
  currentStep: number;
}

export const RegistrationSteps = ({ currentStep }: SignUpStepsProps) => {
  const complexStyles = {
    firstStepItem: classnames(styles.item, { [styles.hidden]: currentStep !== REGISTRATION_FIRST_STEP }),
    secondStepItem: classnames(styles.item, { [styles.hidden]: currentStep !== REGISTRATION_FIRST_STEP + 1 }),
    lastStepItem: classnames(styles.item, { [styles.hidden]: currentStep !== REGISTRATION_LAST_STEP }),
  };

  return (
    <ul>
      <li className={complexStyles.firstStepItem}>
        <InputBox
          type='text'
          name={REGISTRATION_INPUT.login.name}
          label={REGISTRATION_INPUT.login.label}
          assistiveText={REGISTRATION_INPUT.login.assistiveText}
        />
      </li>
      <li className={complexStyles.firstStepItem}>
        <InputBox
          type='password'
          name={REGISTRATION_INPUT.password.name}
          label={REGISTRATION_INPUT.password.label}
          assistiveText={REGISTRATION_INPUT.password.assistiveText}
        />
      </li>
      <li className={complexStyles.secondStepItem}>
        <InputBox type='text' name={REGISTRATION_INPUT.firstName.name} label={REGISTRATION_INPUT.firstName.label} />
      </li>
      <li className={complexStyles.secondStepItem}>
        <InputBox type='text' name={REGISTRATION_INPUT.lastName.name} label={REGISTRATION_INPUT.lastName.label} />
      </li>
      <li className={complexStyles.lastStepItem}>
        <InputBox type='text' name={REGISTRATION_INPUT.phone.name} label={REGISTRATION_INPUT.phone.label} />
      </li>
      <li className={complexStyles.lastStepItem}>
        <InputBox type='email' name={REGISTRATION_INPUT.email.name} label={REGISTRATION_INPUT.email.label} />
      </li>
    </ul>
  );
};
