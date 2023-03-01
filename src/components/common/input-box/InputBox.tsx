import React, { HTMLInputTypeAttribute, useState } from 'react';
import classnames from 'classnames';

import styles from './InputBox.module.scss';

interface InputBoxProps {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  assistiveText?: string;
}

export const InputBox = ({ type, name, label, assistiveText }: InputBoxProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const complexStyles = {
    passwordIcon: classnames({
      [styles['password-icon']]: type === 'password',
      [styles.visible]: isPasswordVisible,
    }),
  };

  const handleClick = () => setIsPasswordVisible((prevState) => !prevState);

  return (
    <div className={styles.box}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
        id={name}
        name={name}
        placeholder={label}
        autoComplete='off'
        className={styles.input}
      />
      <span onClick={handleClick} className={complexStyles.passwordIcon} />
      <p>{assistiveText}</p>
    </div>
  );
};
