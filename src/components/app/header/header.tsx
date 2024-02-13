import { SettingOutlined } from '@ant-design/icons';
import { useMedia } from '@hooks/media-queries';
import { Breadcrumb, Button, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.css';

export const Header: React.FC = () => {
    const isXlScreen = useMedia('xl');
    const isSmdScreen = useMedia('smd');

    return (
        <Layout.Header className={s.header}>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
                <section className={s['columns-container']}>
                    <h1 className={s.title}>
                        Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей мечты!
                    </h1>
                    <Link to='/settings'>
                        <Button
                            type={isSmdScreen ? 'default' : 'text'}
                            shape={isSmdScreen ? 'circle' : 'default'}
                            icon={isXlScreen && !isSmdScreen ? null : <SettingOutlined />}
                            className={s.button}
                        >
                            {isSmdScreen ? null : 'Настройки'}
                        </Button>
                    </Link>
                </section>
            </div>
        </Layout.Header>
    );
};
