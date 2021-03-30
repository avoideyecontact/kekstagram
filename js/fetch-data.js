import { showImgFilterElement } from './filters.js';

export const createFetch = (onSuccess, onError) => {
  return fetch(
    'https://22.javascript.pages.academy/kekstagram/data',
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    })
    .then(() => {
      showImgFilterElement();
    });
};
