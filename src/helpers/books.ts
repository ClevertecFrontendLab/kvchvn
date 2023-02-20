import { BookBooking, BookDelivery } from '../types';

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
