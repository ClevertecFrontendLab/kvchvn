import { CalendarTwoTone, HeartFilled, ProfileOutlined, TrophyFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React from 'react';
import s from './navigation.module.css';

export const Navigation: React.FC = () => {
    const items: ItemType[] = [
        { label: 'Календарь', key: 'calendar', icon: <CalendarTwoTone /> },
        { label: 'Тренировки', key: 'trainings', icon: <HeartFilled /> },
        { label: 'Достижения', key: 'achievements', icon: <TrophyFilled /> },
        { label: 'Профиль', key: 'profile', icon: <ProfileOutlined /> },
    ];

    return <Menu items={items} className={s.navigation} />;
};
