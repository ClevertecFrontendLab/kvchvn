import { useMedia } from '@hooks/media-queries';
import { Icon } from '@ui/icon';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { SidebarContext } from '../sidebar';
import s from './logo.module.css';

export const Logo: React.FC = () => {
    const { isCollapsed } = useContext(SidebarContext);

    const isSmScreen = useMedia('sm');

    return (
        <Icon
            file='logo'
            id={isCollapsed && !isSmScreen ? 'logo-short' : 'logo-long'}
            className={classNames(s.logo, { [s.collapsed]: isCollapsed })}
        />
    );
};
