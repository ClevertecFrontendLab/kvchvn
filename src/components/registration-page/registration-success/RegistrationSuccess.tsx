import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import styles from './RegistrationSuccess.module.scss';

export const RegistrationSuccess = () => (
  <section className={styles.section}>
    <h4>Регистрация успешна</h4>
    <p>Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль</p>
    <Link to={ROUTES.auth}>Вход</Link>
  </section>
);
