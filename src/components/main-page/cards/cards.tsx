import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';
import s from './cards.module.css';

export const Cards: React.FC = () => {
    return (
        <section className={s.container}>
            <Card title='Расписать тренировки' bordered={false} className={s.card}>
                <Button type='link' block={true} ghost={true} icon={<HeartFilled />}>
                    Тренировки
                </Button>
            </Card>
            <Card title='Назначить календарь' bordered={false} className={s.card}>
                <Button type='link' block={true} ghost={true} icon={<CalendarTwoTone />}>
                    Календарь
                </Button>
            </Card>
            <Card title='Заполнить профиль' bordered={false} className={s.card}>
                <Button type='link' block={true} ghost={true} icon={<IdcardOutlined />}>
                    Профиль
                </Button>
            </Card>
        </section>
    );
};
