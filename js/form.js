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
const closeFormError = () => {
  formError.classList.add('hidden');
  document.removeEventListener('click', closeFormErrorClickOutside);
  document.removeEventListener('keydown', closeFormErrorOnKeyDown);
  formErrorButton.removeEventListener('click', closeFormErrorButtonClick);
}

// Функция выполняющаяся при ошибке отправки формы
const onUploadError = () => {
  window.console.log('bad');

  formError.classList.remove('hidden');
  htmlMain.appendChild(formError); //Добавляем окошко ошибки

  upload.closeFormError(); // Скрываем форму загрузки фото

  document.addEventListener('click', closeFormErrorClickOutside);
  document.addEventListener('keydown', closeFormErrorOnKeyDown);
  formErrorButton.addEventListener('click', closeFormErrorButtonClick);
}

// При нажатии на ESC
const closeFormErrorOnKeyDown = (evt) => {
  if (evt.keyCode === upload.KEY_CODE_ESC) {
    closeFormError();
  }
}

// При нажатии на кнопку
const closeFormErrorButtonClick = () => {
  closeFormError();
}

// При нажатии на область вне окна
const closeFormErrorClickOutside = (evt) => {
  if (evt.target === formError) {
    closeFormError();
  }
}

// Функция закрытия окошка успешной отправки
const closeFormSuccess = () => {
  formSuccess.classList.add('hidden');
  document.removeEventListener('click', closeFormSuccessClickOutside);
  document.removeEventListener('keydown', closeFormSuccessOnKeyDown);
  formSuccessButton.removeEventListener('click', closeFormSuccessButtonClick);
}

// Функция выполняющаяся при успешной отправке формы
const onUploadSuccess = () => {
  window.console.log('good');

  upload.closeForm();

  formSuccess.classList.remove('hidden');
  htmlMain.appendChild(formSuccess); //Добавляем окошко успешной отправки

  upload.closeForm(); // Скрываем форму загрузки фото

  document.addEventListener('click', closeFormSuccessClickOutside);
  document.addEventListener('keydown', closeFormSuccessOnKeyDown);
  formSuccessButton.addEventListener('click', closeFormSuccessButtonClick);
}

// При нажатии на ESC
const closeFormSuccessOnKeyDown = (evt) => {
  if (evt.keyCode === upload.KEY_CODE_ESC) {
    closeFormSuccess();
  }
}

// При нажатии на кнопку
const closeFormSuccessButtonClick = () => {
  closeFormSuccess();
}

// При нажатии на область вне окна
const closeFormSuccessClickOutside = (evt) => {
  if (evt.target === formSuccess) {
    closeFormSuccess();
  }
}

// Функция отправки формы
const sendFormData = (formData, onSuccess, onError) => {
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
formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendFormData(formData,
    onUploadSuccess,
    onUploadError, // Не забыть поменять местами
  );
});

export { formElement }
