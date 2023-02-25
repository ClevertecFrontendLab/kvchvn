import React, { HTMLInputTypeAttribute } from 'react';

import styles from './InputBox.module.scss';

interface InputBoxProps {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  assistiveText?: string;
  isError: boolean;
  error?: string;
}

export const InputBox = ({ type, name, label, assistiveText, isError, error }: InputBoxProps) => {
  const a = 1;

  return (
    <div className={styles.box}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input type={type} id={name} placeholder={label} autoComplete='off' className={styles.input} />
      <p>{assistiveText}</p>
    </div>
  );
};
