export const BASE_API_URL = 'https://strapi.cleverland.by';

export const API_ENDPOINTS = {
  categories: 'categories',
  books: 'books',
  registration: 'auth/local/register',
  auth: 'auth/local',
  forgotPassword: 'auth/forgot-password',
  resetPassword: 'auth/reset-password',
};

export const QUERY_STATUS = {
  isLoading: 'pending',
  isError: 'rejected',
  isSuccess: 'fulfilled',
};
