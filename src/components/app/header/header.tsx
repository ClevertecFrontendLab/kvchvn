import { SettingOutlined } from '@ant-design/icons';
import { useMedia } from '@hooks/media-queries';
import { Breadcrumb, Button, Col, Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.css';

export const Header: React.FC = () => {
    const isXlScreen = useMedia('xl');
    const isLgScreen = useMedia('lg');
    const isSmdScreen = useMedia('smd');

    return (
        <Layout.Header className={s.header}>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
                <section className={s['columns-container']}>
                    <h1 className={s.title}>
                        Приветствуем тебя в CleverFit — приложении,
                        {isLgScreen && <br />}
                        которое поможет тебе добиться своей мечты!
                    </h1>
                    <Col flex='none'>
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
                    </Col>
                </section>
            </div>
        </Layout.Header>
    );
};
