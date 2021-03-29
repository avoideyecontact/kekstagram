import { showImgFilterElement } from './filters.js';

const createFetch = (onSuccess, onError) => () => {
  return fetch(
    'https://22.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      window.console.log(data);
      // onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    })
    .then(() => {
      showImgFilterElement();
    });
};

createFetch();

export { createFetch }
