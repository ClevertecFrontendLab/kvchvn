import React from 'react';
import { Control } from 'react-hook-form';

import { REGISTRATION_FIRST_STEP, REGISTRATION_LAST_STEP } from '../../../constants';
import { RegistrationRequestBody } from '../../../types';
import { FirstStep } from '../first-step';
import { SecondStep } from '../second-step';
import { ThirdStep } from '../third-step';

import styles from './RegistrationSteps.module.scss';

interface SignUpStepsProps {
  currentStep: number;
  control: Control<RegistrationRequestBody>;
}

export const RegistrationSteps = ({ currentStep, control }: SignUpStepsProps) => {
  const steps = [
    { step: REGISTRATION_FIRST_STEP, component: <FirstStep control={control} /> },
    { step: REGISTRATION_FIRST_STEP + 1, component: <SecondStep control={control} /> },
    { step: REGISTRATION_LAST_STEP, component: <ThirdStep control={control} /> },
  ];

  return <ul className={styles['inputs-list']}>{steps.find(({ step }) => step === currentStep)?.component || null}</ul>;
};
