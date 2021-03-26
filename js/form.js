import * as upload from './upload.js';
const formElement = document.querySelector('.img-upload__form');
const templateError = document.querySelector('#error').content;
const formError = templateError.querySelector('.error');
const formErrorButton = templateError.querySelector('.error__button');
const htmlMain = document.querySelector('main');

const onUploadError = function() {
  window.console.log('bad');
  htmlMain.appendChild(formError);

  upload.editForm.classList.add('hidden'); // Скрываем форму загрузки фото
  upload.body.classList.remove('modal-open');
  upload.uploadFile.value = '';
  document.removeEventListener('keydown', upload.onDocumentKeyDown);
  upload.uploadCancel.removeEventListener('click', upload.onUploadCancelClick);

  document.addEventListener('click', function() {
    formError.classList.add('hidden');
    // Не забыть убрать evtlistener
  })
}

const onUploadSuccess = function() {
  window.console.log('good');
}

const sendFormData = function(formData, onSuccess, onError) {
  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onError();
      }
    })
}

formElement.addEventListener('submit', function(evt){
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendFormData(formData,
    () => {onUploadError()},
    () => {onUploadSuccess()}, // Не забыть поменять местами
  );
});
