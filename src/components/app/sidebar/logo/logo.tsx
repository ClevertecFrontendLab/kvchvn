import { Icon } from '@ui/icon';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { SidebarContext } from '../sidebar';
import s from './logo.module.css';

export const Logo: React.FC = () => {
    const { isCollapsed } = useContext(SidebarContext);

    return (
        <Icon
            file='logo'
            id={isCollapsed ? 'logo-short' : 'logo-long'}
            className={classNames(s.logo, { [s.collapsed]: isCollapsed })}
        />
    );
};
