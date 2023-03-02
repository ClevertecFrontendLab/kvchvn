import React from 'react';

import { REGISTRATION_FIRST_STEP, REGISTRATION_LAST_STEP } from '../../../constants';
import { FirstStep } from '../first-step';
import { SecondStep } from '../second-step';
import { ThirdStep } from '../third-step';

import styles from './RegistrationSteps.module.scss';

interface SignUpStepsProps {
  currentStep: number;
}

export const RegistrationSteps = ({ currentStep }: SignUpStepsProps) => {
  const steps = [
    { step: REGISTRATION_FIRST_STEP, component: <FirstStep /> },
    { step: REGISTRATION_FIRST_STEP + 1, component: <SecondStep /> },
    { step: REGISTRATION_LAST_STEP, component: <ThirdStep /> },
  ];

  return <ul className={styles['inputs-list']}>{steps.find(({ step }) => step === currentStep)?.component || null}</ul>;
};
