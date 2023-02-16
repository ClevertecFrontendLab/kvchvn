import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import avatar from '../../../assets/img/avatar.webp';

import styles from './UserBox.module.scss';

export const UserBox = () => {
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const complexStyles = {
    dropdown: classnames(styles['dropdown-menu'], { [styles.hidden]: !isDropdownMenuVisible }),
  };

  const toggleDropdownMenuVisible = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (dropdownRef.current && dropdownRef.current !== target) {
        setIsDropdownMenuVisible(false);
      }
    };

    if (isDropdownMenuVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownMenuVisible]);

  return (
    <div className={styles['user-box']}>
      <p>Привет, Иван!</p>
      <img src={avatar} alt='Аватар' onClick={toggleDropdownMenuVisible} />
      <ul ref={dropdownRef} className={complexStyles.dropdown}>
        <li>Профиль</li>
        <li>Выход</li>
      </ul>
    </div>
  );
};
