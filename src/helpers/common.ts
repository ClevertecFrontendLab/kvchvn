import { LocalStorageKey } from '../types';
import { Nullable } from '../types/common';

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
