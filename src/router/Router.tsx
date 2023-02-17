import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/global/layout';
import { Loading } from '../components/global/loading';
import { ScrollToTop } from '../components/global/scroll-to-top';
import { ROUTES } from '../constants';

const MainPage = React.lazy(() => import('../pages/main'));
const BookPage = React.lazy(() => import('../pages/book'));
const TermsPage = React.lazy(() => import('../pages/terms'));
const NotFoundPage = React.lazy(() => import('../pages/not-found'));

export const Router = () => (
  <HashRouter>
    <ScrollToTop>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTES.main} element={<Layout />}>
            <Route index={true} element={<Navigate to={ROUTES.books.all} />} />
            <Route path={ROUTES.books.base} element={<Navigate to={ROUTES.books.all} />} />
            <Route path={ROUTES.books.category} element={<MainPage />} />
            <Route path={ROUTES.books.specificBook} element={<BookPage />} />
            <Route path={ROUTES.terms} element={<TermsPage view='terms' />} />
            <Route path={ROUTES.contract} element={<TermsPage view='contract' />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </ScrollToTop>
  </HashRouter>
);
