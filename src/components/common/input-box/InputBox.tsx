import React, { HTMLInputTypeAttribute, useState } from 'react';
import { Control, RegisterOptions, useController } from 'react-hook-form';
import stringReplace from 'react-string-replace';
import InputMask from 'react-text-mask';
import classnames from 'classnames';

import { CHECK_FN_DEFAULT_OPTIONS, PASSWORD_MIN_LENGTH, PHONE_MASK, PHONE_MASK_PLACEHOLDER } from '../../../constants';
import { check, validatePassword } from '../../../helpers';
import { InputBoxValidationsProp } from '../../../types';

import styles from './InputBox.module.scss';

interface InputBoxProps {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  control: unknown;
  validationRules: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  initialHintText?: string;
  stepByStepValidationRules?: InputBoxValidationsProp;
  isFormError?: boolean;
  defaultValue?: string;
}

interface InputPasswordState {
  visibility: boolean;
  validity: boolean;
}

interface HintState {
  text?: string | React.ReactNodeArray;
  visibility: boolean;
}

export const InputBox = ({
  type: inputType,
  name,
  label,
  control,
  initialHintText,
  validationRules,
  stepByStepValidationRules,
  isFormError,
  defaultValue = '',
}: InputBoxProps) => {
  const [inputPasswordState, setInputPasswordState] = useState<InputPasswordState>({
    visibility: false,
    validity: false,
  });
  const [hint, setHint] = useState<HintState>({
    text: initialHintText,
    visibility: true,
  });

  const {
    field,
    fieldState: { error: fieldError, invalid: isInvalidField, isTouched: isFieldTouched, isDirty: isFieldDirty },
    formState: { isSubmitted: isFormSubmitted },
  } = useController({
    name,
    control: control as Control,
    defaultValue,
    rules: validationRules,
  });

  const complexStyles = {
    passwordIconsBox: classnames({ [styles['password-icons']]: inputType === 'password' }),
    passwordEye: classnames(styles.eye, { [styles.opened]: inputPasswordState.visibility }),
    passwordCheckmark: classnames({ [styles.checkmark]: inputPasswordState.validity }),
    hint: classnames(styles.text, { [styles.highlight]: fieldError || isFormError }),
  };

  const handlePasswordIconClick = () =>
    // it's eye icon
    setInputPasswordState((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility,
    }));

  const setInputAssistiveText = () => {
    if (hint.text) {
      if (isFormSubmitted && !isFieldTouched && !isFieldDirty && 'required' in validationRules) {
        return validationRules.required as string;
      }
      if (hint.visibility || !isInvalidField) {
        return hint.text;
      }
    }

    return fieldError?.message || '';
  };

  const handleChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    field.onChange(value);

    if (stepByStepValidationRules && hint) {
      // logic of step-by-step validation and representing it onto assistive text
      const options = CHECK_FN_DEFAULT_OPTIONS;

      if (inputType === 'password') {
        options.requiredLength = PASSWORD_MIN_LENGTH;
      }

      try {
        stepByStepValidationRules.forEach(({ type, stringSlice }) => {
          if (!check(value, options)[type]) {
            // highlight error assistiveText
            setHint((prevHint) => ({
              ...prevHint,
              visibility: true,
              text: stringReplace(prevHint.text, stringSlice, (match, i) => <span key={match + i}>{match}</span>),
            }));
          } else if (Array.isArray(hint.text)) {
            // remove highlighting
            setHint((prevHint) => ({
              ...prevHint,
              visibility: true,
              text: (prevHint.text as React.ReactNodeArray).map((elem) => {
                if (typeof elem === 'object' && (elem as React.ReactElement).props.children === stringSlice) {
                  return stringSlice;
                }

                return elem;
              }),
            }));
          }
        });
      } catch (err) {
        console.error(err);
      }

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

  const handleBlur = () => {
    field.onBlur();
    setHint((prevHint) => ({ ...prevHint, visibility: false }));
  };

  const inputProps = {
    id: name,
    placeholder: label,
    value: field.value,
    name: field.name,
    onBlur: handleBlur,
    onChange: handleChange,
    className: styles.input,
  };

  return (
    <div className={styles.box}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {name === 'phone' ? (
        <InputMask mask={PHONE_MASK} placeholderChar={PHONE_MASK_PLACEHOLDER} {...inputProps} />
      ) : (
        <input type={inputType === 'password' && !inputPasswordState.visibility ? inputType : 'text'} {...inputProps} />
      )}
      <div className={complexStyles.passwordIconsBox}>
        <span className={complexStyles.passwordCheckmark} />
        <span onClick={handlePasswordIconClick} className={complexStyles.passwordEye} />
      </div>
      <p className={complexStyles.hint}>{setInputAssistiveText()}</p>
    </div>
  );
};
