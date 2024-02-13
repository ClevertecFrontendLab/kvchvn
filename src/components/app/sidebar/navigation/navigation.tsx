import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { useMedia } from '@hooks/media-queries';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React from 'react';
import s from './navigation.module.css';

export const Navigation: React.FC = () => {
    const isSmdScreen = useMedia('sm');

    const items: ItemType[] = [
        { label: 'Календарь', key: 'calendar', icon: isSmdScreen ? null : <CalendarTwoTone /> },
        { label: 'Тренировки', key: 'trainings', icon: isSmdScreen ? null : <HeartFilled /> },
        { label: 'Достижения', key: 'achievements', icon: isSmdScreen ? null : <TrophyFilled /> },
        { label: 'Профиль', key: 'profile', icon: isSmdScreen ? null : <IdcardOutlined /> },
    ];

    return <Menu items={items} className={s.navigation} />;
};
