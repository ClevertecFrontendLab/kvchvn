import { useParams } from 'react-router-dom';

import { BookMainContent } from '../../components/book-page/book-main-content';
import { BookSubContent } from '../../components/book-page/book-sub-content';
import { Breadcrumbs } from '../../components/common/breadcrumbs';
import { Loading } from '../../components/global/loading';
import { Toast } from '../../components/global/toast';
import { Wrapper } from '../../components/global/wrapper';
import { MainNavigation } from '../../components/navigation/main-navigation';
import { DEFAULT_ERROR_MESSAGE, QUERY_STATUS, ROUTES } from '../../constants';
import { useCategoriesSelector, useCategoriesStatusSelector, useGetBookByIdQuery } from '../../store';

import styles from './BookPage.module.scss';

export const BookPage = () => {
  const { category: currentCategoryPath, bookId } = useParams();
  const categories = useCategoriesSelector();
  const categoriesStatus = useCategoriesStatusSelector();
  const { isLoading: isBookLoading, isError: isBookError, data: book } = useGetBookByIdQuery(bookId as string);

  const isCategoriesLoading = categoriesStatus === QUERY_STATUS.isLoading;
  const isCategoriesError = categoriesStatus === QUERY_STATUS.isError;
  const isCategoriesSuccess = categoriesStatus === QUERY_STATUS.isSuccess;

  const breadcrumbCategory = categories?.find((cat) => cat.path === currentCategoryPath);

  return (
    <main className={styles.main}>
      {(isBookLoading || isCategoriesLoading) && <Loading />}
      {(isBookError || isCategoriesError) && <Toast type='error' message={DEFAULT_ERROR_MESSAGE} />}
      {categories && (
        <Breadcrumbs
          paths={[
            {
              name: breadcrumbCategory?.name,
              path: breadcrumbCategory ? `${ROUTES.books.base}/${breadcrumbCategory.path}` : undefined,
            },
            { name: book?.title },
          ]}
        />
      )}
      <Wrapper>
        <MainNavigation />
        {book && isCategoriesSuccess && (
          <>
            <BookMainContent
              title={book.title}
              authors={book.authors}
              issueYear={book.details.issueYear}
              description={book.description}
              posterPaths={book.images}
              delivery={book.delivery}
              booking={book.booking}
            />
            <BookSubContent rating={book.rating} details={book.details} comments={book.comments} />
          </>
        )}
      </Wrapper>
    </main>
  );
};
