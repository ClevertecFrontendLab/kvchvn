import React from 'react';
import classnames from 'classnames';

import styles from './DropdownButton.module.scss';

interface DropdownButtonProps {
  isDrop: boolean;
  toggleFn?: () => void;
  testId?: string;
}

export const DropdownButton = ({ isDrop, toggleFn, testId }: DropdownButtonProps) => {
  const complexStyles = {
    button: classnames(styles['dropdown-button'], { [styles.active]: isDrop }),
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (toggleFn) {
      toggleFn();
    }
  };

  return <button type='button' className={complexStyles.button} onClick={handleClick} data-test-id={testId} />;
};
