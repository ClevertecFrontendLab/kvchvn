import { SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Layout, Row, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.css';

export const Header: React.FC = () => {
    return (
        <Layout.Header className={s.header}>
            <Space direction='vertical'>
                <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb>
                <Row wrap={false}>
                    <Col flex='auto'>
                        <h1 className={s.title}>
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе
                            добиться своей мечты!
                        </h1>
                    </Col>
                    <Col flex='none'>
                        <Link to='/settings'>
                            <Button type='text' icon={<SettingOutlined />}>
                                Настройки
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Space>
        </Layout.Header>
    );
};
