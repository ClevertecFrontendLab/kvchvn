import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { history, store } from '@redux/store';
import { HistoryRouter } from 'redux-first-history/rr6';
import { MainPage } from './pages';

import { RootLayout } from '@components/app/root-layout';
import { ROUTES } from '@constants/global';
import '@styles/index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route path={ROUTES.main} element={<RootLayout />}>
                        <Route index={true} element={<MainPage />} />
                    </Route>
                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
