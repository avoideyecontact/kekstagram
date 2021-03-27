import * as upload from './upload.js';

const formElement = document.querySelector('.img-upload__form');
const templateError = document.querySelector('#error').content;
const formError = templateError.querySelector('.error');
const formErrorButton = templateError.querySelector('.error__button');
const htmlMain = document.querySelector('main');

const templateSuccess = document.querySelector('#success').content;
const formSuccess = templateSuccess.querySelector('.success');
const formSuccessButton = templateSuccess.querySelector('.success__button');

// Функция закрытия окошка ошибки
const closeFormError = function() {
  formError.classList.add('hidden');
  document.removeEventListener('click', closeFormErrorClickOutside);
  document.removeEventListener('keydown', closeFormErrorOnKeyDown);
  formErrorButton.removeEventListener('click', closeFormErrorButtonClick);
}

// Функция выполняющаяся при ошибке отправки формы
const onUploadError = function() {
  window.console.log('bad');

  formError.classList.remove('hidden');
  htmlMain.appendChild(formError); //Добавляем окошко ошибки

  upload.closeFormError(); // Скрываем форму загрузки фото

  document.addEventListener('click', closeFormErrorClickOutside);
  document.addEventListener('keydown', closeFormErrorOnKeyDown);
  formErrorButton.addEventListener('click', closeFormErrorButtonClick);
}

// При нажатии на ESC
const closeFormErrorOnKeyDown = function(evt) {
  if (evt.keyCode === upload.KEY_CODE_ESC) {
    closeFormError();
  }
}

// При нажатии на кнопку
const closeFormErrorButtonClick = function() {
  closeFormError();
}

// При нажатии на область вне окна
const closeFormErrorClickOutside = function(evt) {
  if (evt.target === formError) {
    closeFormError();
  }
}




// Функция закрытия окошка успешной отправки
const closeFormSuccess = function() {
  formSuccess.classList.add('hidden');
  document.removeEventListener('click', closeFormSuccessClickOutside);
  document.removeEventListener('keydown', closeFormSuccessOnKeyDown);
  formSuccessButton.removeEventListener('click', closeFormSuccessButtonClick);
}

// Функция выполняющаяся при успешной отправке формы
const onUploadSuccess = function() {
  window.console.log('good');
  formElement.reset();
  upload.closeForm();

  formSuccess.classList.remove('hidden');
  htmlMain.appendChild(formSuccess); //Добавляем окошко успешной отправки

  upload.closeForm(); // Скрываем форму загрузки фото

  document.addEventListener('click', closeFormSuccessClickOutside);
  document.addEventListener('keydown', closeFormSuccessOnKeyDown);
  formSuccessButton.addEventListener('click', closeFormSuccessButtonClick);
}

// При нажатии на ESC
const closeFormSuccessOnKeyDown = function(evt) {
  if (evt.keyCode === upload.KEY_CODE_ESC) {
    closeFormSuccess();
  }
}

// При нажатии на кнопку
const closeFormSuccessButtonClick = function() {
  closeFormSuccess();
}

// При нажатии на область вне окна
const closeFormSuccessClickOutside = function(evt) {
  if (evt.target === formSuccess) {
    closeFormSuccess();
  }
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
    onUploadSuccess,
    onUploadError, // Не забыть поменять местами
  );
});
