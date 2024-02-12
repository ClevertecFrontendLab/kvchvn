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
                width={isSmScreen ? 106 : 208}
                collapsedWidth={isSmScreen ? 0 : 64}
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
