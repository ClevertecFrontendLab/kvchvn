import React from 'react';
import { useParams } from 'react-router-dom';

import { NotFoundView } from '../../components/common/not-found-view';
import { Loading } from '../../components/global/loading';
import { Toast } from '../../components/global/toast';
import { Wrapper } from '../../components/global/wrapper';
import { Books } from '../../components/main-page/books';
import { MainNavigation } from '../../components/navigation/main-navigation';
import { DEFAULT_ERROR_MESSAGE, QUERY_STATUS } from '../../constants';
import { PARAMS } from '../../constants/common';
import { useCategoriesSelector, useCategoriesStatusSelector, useGetAllBooksQuery } from '../../store';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const params = useParams<keyof typeof PARAMS>();
  const { data: allBooks, isLoading: isAllBooksLoading, isError: isAllBooksError } = useGetAllBooksQuery();

  const categoriesStatus = useCategoriesStatusSelector();
  const categories = useCategoriesSelector();

  const isUnknownCategory = categories
    ? params.category && !categories.find((category) => category.path === params.category)
    : false;

  return (
    <main className={styles.main}>
      {(isAllBooksLoading || categoriesStatus === QUERY_STATUS.isLoading) && <Loading />}
      {(isAllBooksError || categoriesStatus === QUERY_STATUS.isError) && (
        <Toast type='error' message={DEFAULT_ERROR_MESSAGE} />
      )}
      {isUnknownCategory ? (
        <NotFoundView />
      ) : (
        <Wrapper>
          <MainNavigation />
          {allBooks && categoriesStatus === QUERY_STATUS.isSuccess && <Books />}
        </Wrapper>
      )}
    </main>
  );
};
