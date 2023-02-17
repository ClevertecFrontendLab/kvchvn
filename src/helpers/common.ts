import { BookBooking, BookDelivery, LocalStorageData } from '../types';

export const setToLocalStorage = (key: keyof LocalStorageData, value: LocalStorageData[typeof key]) => {
  localStorage.setItem(key, String(value));
};

export const getFromLocalStorage = (key: keyof LocalStorageData) =>
  localStorage.getItem(key) as LocalStorageData[typeof key] | null;

export const removeFromLocalStorage = (key: keyof LocalStorageData) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

export const formatDate = (date: string, dateMode: 'short' | 'long') => {
  switch (dateMode) {
    case 'long':
      return new Date(date)
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
        .replace('г.', '')
        .trim();
    case 'short':
    default:
      return new Date(date).toLocaleDateString().split('.').slice(0, 2).join('.');
  }
};

export const disableScrolling = (element: HTMLElement) => {
  element.style.overflow = 'hidden';
};

export const enableScrolling = (element: HTMLElement) => {
  element.style.overflow = '';
};

export const setButtonReserveText = (booking: BookBooking | null, delivery: BookDelivery | null) => {
  if (booking && booking.order) {
    return 'Забронирована';
  }

  if (delivery && delivery.handed) {
    return delivery.dateHandedTo ? `Занята до ${delivery.dateHandedTo}` : 'Занята';
  }

  return 'Забронировать';
};

export const setBookAuthorsAndYearText = (authors: string[] | null, issueYear: string | null) => {
  let resultString = authors ? authors.join(', ') : '';

  if (authors && issueYear) {
    resultString += ', ';
  }
  resultString += issueYear ? issueYear : '';

  return resultString;
};
