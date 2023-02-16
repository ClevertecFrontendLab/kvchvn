import { useParams } from 'react-router-dom';

import { BookMainContent } from '../../components/book-page/book-main-content';
import { BookSubContent } from '../../components/book-page/book-sub-content';
import { Breadcrumbs } from '../../components/common/breadcrumbs';
import { Loading } from '../../components/global/loading';
import { Toast } from '../../components/global/toast';
import { Wrapper } from '../../components/global/wrapper';
import { MainNavigation } from '../../components/navigation/main-navigation';
import { DEFAULT_ERROR_MESSAGE, QUERY_STATUS } from '../../constants';
import { useCategoriesSelector, useCategoriesStatusSelector, useGetBookByIdQuery } from '../../store';

import styles from './BookPage.module.scss';

export const BookPage = () => {
  const { category, bookId } = useParams();
  const categories = useCategoriesSelector();
  const categoriesStatus = useCategoriesStatusSelector();
  const { isLoading: isBookLoading, isError: isBookError, data: book } = useGetBookByIdQuery(bookId as string);

  return (
    <main className={styles.main}>
      {(isBookLoading || categoriesStatus === QUERY_STATUS.isLoading) && <Loading />}
      {(isBookError || categoriesStatus === QUERY_STATUS.isError) && (
        <Toast type='error' message={DEFAULT_ERROR_MESSAGE} />
      )}
      {categories && (
        <Breadcrumbs paths={[categories[categories.findIndex((cat) => cat.path === category)].name, book?.title]} />
      )}
      <Wrapper>
        <MainNavigation />
        {book && (
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
