import React, { useState } from 'react';
import classnames from 'classnames';

import { Wrapper } from '../wrapper';

import styles from './Toast.module.scss';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

export const Toast = ({ type, message }: ToastProps) => {
  const [isShowToast, setIsShowToast] = useState(true);

  const complexStyles = {
    box: classnames(styles.box, {
      [styles.success]: type === 'success',
      [styles.error]: type === 'error',
    }),
    content: classnames(styles.content, {
      [styles.success]: type === 'success',
      [styles.error]: type === 'error',
    }),
  };

  const handleClick = () => setIsShowToast(false);

  return isShowToast ? (
    <section className={styles.section}>
      <Wrapper>
        <div className={complexStyles.box}>
          <section className={complexStyles.content}>
            <span />
            <p>{message}</p>
            <button type='button' onClick={handleClick} />
          </section>
        </div>
      </Wrapper>
    </section>
  ) : null;
};
