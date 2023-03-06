import React, { HTMLInputTypeAttribute, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import stringReplace from 'react-string-replace';
import classnames from 'classnames';

import { CHECK_FN_DEFAULT_OPTIONS, PASSWORD_MIN_LENGTH, REQUIRED_FIELD_ERROR } from '../../../constants';
import { check, validatePassword } from '../../../helpers';
import { InputBoxValidationsProp } from '../../../types';

import styles from './InputBox.module.scss';

interface InputBoxProps {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  registerOptions?: RegisterOptions;
  initialAssistiveText?: string;
  validations?: InputBoxValidationsProp;
}

interface InputPasswordState {
  visibility: boolean;
  validity: boolean;
}

export const InputBox = ({
  type: inputType,
  name,
  label,
  initialAssistiveText,
  registerOptions,
  validations,
}: InputBoxProps) => {
  const [inputPasswordState, setInputPasswordState] = useState<InputPasswordState>({
    visibility: false,
    validity: false,
  });
  const [assistiveText, setAssistiveText] = useState<string | React.ReactNodeArray | undefined>(initialAssistiveText);

  const {
    register,
    formState: { errors: formErrors },
  } = useFormContext();

  const complexStyles = {
    passwordIconsBox: classnames({ [styles['password-icons']]: inputType === 'password' }),
    passwordEye: classnames(styles.eye, { [styles.opened]: inputPasswordState.visibility }),
    passwordCheckmark: classnames({ [styles.checkmark]: inputPasswordState.validity }),
    text: classnames(styles.text, { [styles.highlight]: formErrors[name] }),
  };

  const handlePasswordIconClick = () =>
    setInputPasswordState((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility,
    }));

  const handleChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    if (registerOptions?.required && assistiveText === REQUIRED_FIELD_ERROR) {
      setAssistiveText(initialAssistiveText);
    }

    if (validations && assistiveText) {
      // logic of step-by-step validation and representing it onto assistive text
      const options = CHECK_FN_DEFAULT_OPTIONS;

      if (inputType === 'password') {
        options.requiredLength = PASSWORD_MIN_LENGTH;
      }

      validations.forEach(({ type, stringSlice }) => {
        if (!check(value, options)[type]) {
          // highlight error assistiveText
          setAssistiveText((prevAssistiveText) =>
            stringReplace(prevAssistiveText, stringSlice, (match, i) => <span key={match + i}>{match}</span>)
          );
        } else if (Array.isArray(assistiveText)) {
          // remove highlighting
          setAssistiveText((prevAssistiveText) =>
            (prevAssistiveText as React.ReactNodeArray).map((elem) => {
              if (typeof elem === 'object' && (elem as React.ReactElement).props.children === stringSlice) {
                return stringSlice;
              }

              return elem;
            })
          );
        }
      });

      if (inputType === 'password') {
        const isPasswordValid = validatePassword(value);

        if (isPasswordValid && !inputPasswordState.validity) {
          setInputPasswordState((prevState) => ({ ...prevState, validity: true }));
        }
        if (!isPasswordValid && inputPasswordState.validity) {
          setInputPasswordState((prevState) => ({ ...prevState, validity: false }));
        }
      }
    }
  };

  const handleBlur = (e: React.MouseEvent) => {
    const { value } = e.target as HTMLInputElement;

    if (registerOptions?.required && !value) {
      setAssistiveText(REQUIRED_FIELD_ERROR);
    }
  };

  return (
    <div className={styles.box}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={inputType === 'password' && !inputPasswordState.visibility ? 'password' : 'text'}
        id={name}
        placeholder={label}
        {...register(name, { ...registerOptions, onChange: handleChange, onBlur: handleBlur })}
        className={styles.input}
      />
      <div className={complexStyles.passwordIconsBox}>
        <span className={complexStyles.passwordCheckmark} />
        <span onClick={handlePasswordIconClick} className={complexStyles.passwordEye} />
      </div>
      <p className={complexStyles.text}>{assistiveText}</p>
    </div>
  );
};
