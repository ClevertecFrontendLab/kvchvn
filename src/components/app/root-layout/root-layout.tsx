import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar';
import s from './root-layout.module.css';

export const RootLayout: React.FC = () => {
    return (
        <Layout className={s['root-layout']}>
            <Sidebar />
            <Layout className={s['page-layout']}>
                <Outlet />
            </Layout>
        </Layout>
    );
};
