import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useMedia } from '@hooks/media-queries';
import React, { useContext } from 'react';
import { SidebarContext } from '../sidebar';
import s from './collapse-button.module.css';

type Props = {
    toggleSidebarCollapsing: () => void;
};

export const CollapseButton: React.FC<Props> = ({ toggleSidebarCollapsing }) => {
    const { isCollapsed } = useContext(SidebarContext);

    const isSmScreen = useMedia('sm');

    return (
        <div className={s.container}>
            <button
                onClick={toggleSidebarCollapsing}
                className={s.button}
                data-test-id={isSmScreen ? 'sider-switch-mobile' : 'sider-switch'}
            >
                {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
        </div>
    );
};
