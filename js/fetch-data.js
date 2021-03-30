import { showImgFilterElement } from './filters.js';

const modalError = document.querySelector('.modal__error');
const imgUploadElement = document.querySelector('.img-upload');

const openPopupOnError = () => {
  modalError.classList.remove('hidden');
  imgUploadElement.classList.add('hidden');
}

const closePopupOnError = () => {
  modalError.classList.add('hidden');
  imgUploadElement.classList.remove('hidden');
}

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

export { openPopupOnError, closePopupOnError }
