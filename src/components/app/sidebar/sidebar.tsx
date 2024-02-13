import { SIDEBAR_STYLES } from '@constants/styles';
import { useMedia } from '@hooks/media-queries';
import { Layout } from 'antd';
import React, { createContext, useState } from 'react';
import { CollapseButton } from './collapse-button';
import { ExitButton } from './exit-button/exit-button';
import { Logo } from './logo';
import { Navigation } from './navigation';
import s from './sidebar.module.css';

type Context = {
    isCollapsed: boolean;
};

export const SidebarContext = createContext<Context>({ isCollapsed: false });

export const Sidebar: React.FC = () => {
    const isSmScreen = useMedia('sm');

    const [isCollapsed, setIsCollapsed] = useState(isSmScreen);

    const toggleCollapsing = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    return (
        <SidebarContext.Provider value={{ isCollapsed }}>
            <Layout.Sider
                collapsible={true}
                collapsed={isCollapsed}
                trigger={null}
                width={isSmScreen ? SIDEBAR_STYLES.width.sm : SIDEBAR_STYLES.width.xl}
                collapsedWidth={
                    isSmScreen ? SIDEBAR_STYLES.collapsedWidth.sm : SIDEBAR_STYLES.collapsedWidth.xl
                }
                className={s.sidebar}
            >
                <Logo />
                <Navigation />
                <ExitButton />
                <CollapseButton toggleSidebarCollapsing={toggleCollapsing} />
            </Layout.Sider>
        </SidebarContext.Provider>
    );
};
