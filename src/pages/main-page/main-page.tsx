import { Header } from '@components/app/header';
import { Cards } from '@components/main-page/cards';
import { Description } from '@components/main-page/description';
import { Footer } from '@components/main-page/footer';
import { Slogan } from '@components/main-page/slogan';
import { Layout } from 'antd';
import React from 'react';
import s from './main-page.module.css';

export const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <Layout.Content className={s.container}>
                <Description />
                <Slogan />
                <Cards />
            </Layout.Content>
            <Footer />
        </>
    );
};
