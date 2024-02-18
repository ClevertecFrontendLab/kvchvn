import { GooglePlusOutlined } from '@ant-design/icons';
import { useMedia } from '@hooks/media-queries';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import s from './sign-in.module.css';

export const SignIn: React.FC = () => {
    const isSmScreen = useMedia('sm');

    return (
        <Form className={s.form}>
            <div>
                <Form.Item className={s.item}>
                    <Input addonBefore='e-mail:' size='large' />
                </Form.Item>
                <Form.Item className={s.item}>
                    <Input.Password placeholder='Пароль' size='large' />
                </Form.Item>
            </div>
            <div className={s.options}>
                <Checkbox>Запомнить меня</Checkbox>
                <Button type='link' size='small'>
                    Забыли пароль?
                </Button>
            </div>
            <div className={s['submit-box']}>
                <Button type='primary' size='large'>
                    Войти
                </Button>
                <Button size='large' icon={isSmScreen ? null : <GooglePlusOutlined />}>
                    Войти через Google
                </Button>
            </div>
        </Form>
    );
};
