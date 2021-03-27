import * as upload from './upload.js';
const formElement = document.querySelector('.img-upload__form');
const templateError = document.querySelector('#error').content;
const formError = templateError.querySelector('.error');
const formErrorButton = templateError.querySelector('.error__button');
const htmlMain = document.querySelector('main');

// Функция закрытия окошка ошибки
const closeForm = function() {
  formError.classList.add('hidden');
  document.removeEventListener('click', closeFormClickOutside);
  document.removeEventListener('keydown', onDocumentKeyDown);
  formErrorButton.removeEventListener('click', closeFormButtonClick);
}

// Функция выполняющаяся при ошибке отправки формы
const onUploadError = function() {
  window.console.log('bad');

  formError.classList.remove('hidden')
  htmlMain.appendChild(formError); //Добавляем окошко ошибки

  upload.closeForm(); // Скрываем форму загрузки фото

  document.addEventListener('click', closeFormClickOutside);
  document.addEventListener('keydown', onDocumentKeyDown);
  formErrorButton.addEventListener('click', closeFormButtonClick);
}

// При нажатии на ESC
const onDocumentKeyDown = function(evt) {
  if (evt.keyCode === upload.KEY_CODE_ESC) {
    closeForm();
  }
}

// При нажатии на кнопку
const closeFormButtonClick = function() {
  closeForm();
}

// При нажатии на область вне окна
const closeFormClickOutside = function(evt) {
  if (evt.target === formError) {
    closeForm();
  }
}

// Функция выполняющаяся при успешной отправке формы
const onUploadSuccess = function() {
  window.console.log('good');
  formElement.reset();
  upload.closeForm();
}

// Функция отправки формы
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

// Добавляем слушатель отправки формы
formElement.addEventListener('submit', function(evt){
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendFormData(formData,
    onUploadError,
    onUploadSuccess, // Не забыть поменять местами
  );
});
