import { AuthLayout } from '@components/app/auth-layout';
import { RootLayout } from '@components/app/root-layout';
import { routes } from '@constants/global';
import { AuthPage } from '@pages/auth-page';
import { MainPage } from '@pages/main-page';
import { history } from '@redux/store';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

export const Router: React.FC = () => {
    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path={routes.DEFAULT} element={<RootLayout />}>
                    <Route index={true} element={<Navigate to={routes.MAIN} />} />
                    <Route path={routes.MAIN} element={<MainPage />} />
                </Route>
                <Route path={routes.AUTH} element={<AuthLayout />}>
                    <Route index={true} element={<AuthPage />} />
                </Route>
            </Routes>
        </HistoryRouter>
    );
};
