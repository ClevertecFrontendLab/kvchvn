import { RollbackOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { SidebarContext } from '../sidebar';
import s from './exit-button.module.css';

export const ExitButton: React.FC = () => {
    const { isCollapsed } = useContext(SidebarContext);

    return (
        <div className={s.container}>
            <Divider className={s.divider} />
            <Button
                type='text'
                size='large'
                icon={<RollbackOutlined />}
                className={classNames(s.button, { [s.collapsed]: isCollapsed })}
            >
                {isCollapsed ? null : 'Выход'}
            </Button>
        </div>
    );
};
