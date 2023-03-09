import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

import { LocalStorageKey } from '../types';
import { RequestError } from '../types/api';
import { Nullable } from '../types/common';

import { isRequestError } from './typesDefinition';

// for modals and burger-menu

export const disableScrolling = (element: HTMLElement) => {
  element.style.overflow = 'hidden';
};

export const enableScrolling = (element: HTMLElement) => {
  element.style.overflow = '';
};

// local storage handling

export const setToLocalStorage = (key: LocalStorageKey, value: string) => localStorage.setItem(key, value);

export const getFromLocalStorage = (key: LocalStorageKey): Nullable<string> => localStorage.getItem(key);

export const removeFromLocalStorage = (key: LocalStorageKey) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

// request error parsing

export const getRequestErrorStatusCode = (error?: FetchBaseQueryError | SerializedError | RequestError) => {
  let statusCode: number | undefined;

  if (error) {
    if (isRequestError(error)) {
      statusCode = error.error.status;
    } else if ('status' in error && typeof error.status === 'number') {
      statusCode = error.status;
    }
  }

  return statusCode;
};
