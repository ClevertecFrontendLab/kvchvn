import { useGetAllBooksQuery, useGetCategoriesQuery } from '../store';

export const useAllBooksWithCategories = () => {
  const {
    isLoading: isCategoriesLoading,
    isSuccess: isCategoriesSuccess,
    isError: isCategoriesError,
    data: categories,
  } = useGetCategoriesQuery();
  const {
    isLoading: isAllBooksLoading,
    isSuccess: isAllBooksSuccess,
    isError: isAllBooksError,
    data: allBooks,
  } = useGetAllBooksQuery();

  return {
    isLoading: isCategoriesLoading || isAllBooksLoading,
    isSuccess: isCategoriesSuccess && isAllBooksSuccess,
    isError: isCategoriesError || isAllBooksError,
    data: { categories, allBooks },
  };
};
