import { SignIn } from '@components/auth-page/sign-in';
import { SignUp } from '@components/auth-page/sign-up';
import { Icon } from '@ui/icon';
import { Layout, Tabs, TabsProps } from 'antd';
import React from 'react';
import s from './auth-page.module.css';

export const AuthPage: React.FC = () => {
    const tabs: TabsProps['items'] = [
        { label: 'Вход', key: 'sign-in', children: <SignIn /> },
        { label: 'Регистрация', key: 'sign-up', children: <SignUp /> },
    ];

    return (
        <Layout className={s.container}>
            <Icon file='logo' id='logo-long' className={s.logo} />
            <div className={s.content}>
                <Tabs items={tabs} size='middle' className={s.tabs} />
            </div>
        </Layout>
    );
};
