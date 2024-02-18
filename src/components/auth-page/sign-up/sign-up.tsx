import { GooglePlusOutlined } from '@ant-design/icons';
import { formFieldNames } from '@constants/form';
import { useMedia } from '@hooks/media-queries';
import { Button, Form, Input } from 'antd';
import React from 'react';
import s from './sign-up.module.css';

export const SignUp: React.FC = () => {
    const isSmScreen = useMedia('sm');

    return (
        <Form className={s.form}>
            <div>
                <Form.Item name={formFieldNames.EMAIL} className={s.item}>
                    <Input addonBefore='e-mail:' size='large' />
                </Form.Item>
                <Form.Item
                    name={formFieldNames.PASSWORD}
                    help={
                        <span className={s.help}>
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                        </span>
                    }
                    className={s.item}
                >
                    <Input.Password placeholder='Пароль' size='large' />
                </Form.Item>
                <Form.Item
                    name={formFieldNames.CONFIRM_PASSWORD}
                    dependencies={[formFieldNames.PASSWORD]}
                    className={s.item}
                >
                    <Input.Password placeholder='Повторите пароль' size='large' />
                </Form.Item>
            </div>
            <div className={s['submit-section']}>
                <Button type='primary' size='large'>
                    Войти
                </Button>
                <Button size='large' icon={isSmScreen ? null : <GooglePlusOutlined />}>
                    Регистрация через Google
                </Button>
            </div>
        </Form>
    );
};
