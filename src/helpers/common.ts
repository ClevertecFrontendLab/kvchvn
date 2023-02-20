export const disableScrolling = (element: HTMLElement) => {
  element.style.overflow = 'hidden';
};

export const enableScrolling = (element: HTMLElement) => {
  element.style.overflow = '';
};
