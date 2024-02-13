import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';
import s from './download-card.module.css';

export const DownloadCard: React.FC = () => {
    return (
        <Card
            title={
                <div className={s['title-container']}>
                    <p>Скачать на телефон</p>
                    <p>Доступно в PRO-тарифе</p>
                </div>
            }
            className={s['card-container']}
        >
            <Button type='text' icon={<AndroidFilled />} className={s['button-android']}>
                Android OS
            </Button>
            <Button type='text' icon={<AppleFilled />} className={s['button-apple']}>
                Apple iOS
            </Button>
        </Card>
    );
};
