import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './auth-layout.module.css';

export const AuthLayout: React.FC = () => {
    return (
        <Layout className={s['auth-layout']}>
            <div className={s.blur}>
                <Outlet />
            </div>
        </Layout>
    );
};
