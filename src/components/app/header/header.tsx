import { SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.css';

export const Header: React.FC = () => {
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
                    <Col flex='none'>
                        <Link to='/settings'>
                            <Button type='text' icon={<SettingOutlined />}>
                                Настройки
                            </Button>
                        </Link>
                    </Col>
                </section>
            </div>
        </Layout.Header>
    );
};
