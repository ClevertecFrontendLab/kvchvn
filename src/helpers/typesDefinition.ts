import { RequestError } from '../types/api';

export const isRequestError = (err: unknown): err is RequestError =>
  typeof err === 'object' &&
  err !== null &&
  'data' in err &&
  'error' in err &&
  typeof err.error === 'object' &&
  err.error !== null &&
  'status' in err.error &&
  typeof err.error.status === 'number';
