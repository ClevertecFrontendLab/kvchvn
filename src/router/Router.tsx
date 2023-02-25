import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/global/layout';
import { ScrollToTop } from '../components/global/scroll-to-top';
import { ROUTES } from '../constants';
import { AuthPage } from '../pages/auth';
import { BookPage } from '../pages/book';
import { MainPage } from '../pages/main';
import { NotFoundPage } from '../pages/not-found';
import { TermsPage } from '../pages/terms';

export const Router = () => (
  <HashRouter>
    <ScrollToTop>
      <Routes>
        <Route path={ROUTES.main} element={<Layout />}>
          <Route index={true} element={<Navigate to={ROUTES.books.all} />} />
          <Route path={ROUTES.books.base} element={<Navigate to={ROUTES.books.all} />} />
          <Route path={ROUTES.books.category} element={<MainPage />} />
          <Route path={ROUTES.books.specificBook} element={<BookPage />} />
          <Route path={ROUTES.terms} element={<TermsPage view='terms' />} />
          <Route path={ROUTES.contract} element={<TermsPage view='contract' />} />
        </Route>
        <Route path={ROUTES.auth} element={<AuthPage />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />
      </Routes>
    </ScrollToTop>
  </HashRouter>
);
