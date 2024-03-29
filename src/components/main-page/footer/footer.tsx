import { useMedia } from '@hooks/media-queries';
import { Button, Layout } from 'antd';
import React from 'react';
import { DownloadCard } from './download-card';
import s from './footer.module.css';

export const Footer: React.FC = () => {
    const isSmdScreen = useMedia('smd');

    return (
        <Layout.Footer className={s.container}>
            <Button type='link' size='large' block={isSmdScreen} className={s.button}>
                Смотреть отзывы
            </Button>
            <DownloadCard />
        </Layout.Footer>
    );
};
