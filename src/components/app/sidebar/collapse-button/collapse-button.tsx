import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { SidebarContext } from '../sidebar';
import s from './collapse-button.module.css';

type Props = {
    toggleSidebarCollapsing: () => void;
};

export const CollapseButton: React.FC<Props> = ({ toggleSidebarCollapsing }) => {
    const { isCollapsed } = useContext(SidebarContext);

    return (
        <div className={s.container}>
            <button onClick={toggleSidebarCollapsing} className={s.button}>
                {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
        </div>
    );
};
