import React from 'react';
import s from './slogan.module.css';

export const Slogan: React.FC = () => {
    return (
        <article className={s.container}>
            <h4>
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже сегодня!
            </h4>
        </article>
    );
};
