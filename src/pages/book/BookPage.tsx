import { useParams } from 'react-router-dom';

import { BookMainContent } from '../../components/book-page/book-main-content';
import { BookSubContent } from '../../components/book-page/book-sub-content';
import { Breadcrumbs } from '../../components/common/breadcrumbs';
import { Loading } from '../../components/global/loading';
import { Wrapper } from '../../components/global/wrapper';
import { MainNavigation } from '../../components/navigation/main-navigation';
import { useCategoriesSelector, useGetBookByIdQuery } from '../../store';

import styles from './BookPage.module.scss';

export const BookPage = () => {
  const { category, bookId } = useParams();
  const categories = useCategoriesSelector();
  const { isLoading, isError, data: book } = useGetBookByIdQuery(bookId as string);

  return (
    <main className={styles.main}>
      {isLoading && <Loading />}
      {isError && <h1>Error</h1>}
      {categories && (
        <Breadcrumbs paths={[categories[categories.findIndex((cat) => cat.path === category)].name, book?.title]} />
      )}
      {book && (
        <Wrapper>
          <MainNavigation />
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
        </Wrapper>
      )}
    </main>
  );
};
