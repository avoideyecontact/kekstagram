import { sliderElement, sliderBar } from './effect.js';
import { formElement } from './form.js';
import { imgPreview } from './scale.js';
import { fieldHashElement } from './hash-validation.js';
const uploadFile = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const commentElement = document.querySelector('.text__description')

const KEY_CODE_ESC = 27;

const uploadCancel = document.querySelector('#upload-cancel');

const closeForm = () => {
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';

  sliderElement.noUiSlider.reset();
  sliderBar.classList.add('hidden');
  formElement.reset();
  imgPreview.className = 'img-upload__preview';
  imgPreview.style.filter = '';
  imgPreview.style.transform = '';
  fieldHashElement.classList.remove('error-validation');
  fieldHashElement.setCustomValidity('')

  document.removeEventListener('keydown', onDocumentKeyDown);
  uploadCancel.removeEventListener('click', onUploadCancelClick);
}

const onDocumentKeyDown = (evt) => {
  if (evt.keyCode === KEY_CODE_ESC) {
    closeForm();
  }
}

fieldHashElement.addEventListener('focus', () => {
  document.removeEventListener('keydown', onDocumentKeyDown)
  });

fieldHashElement.addEventListener('blur', () => {
  document.addEventListener('keydown', onDocumentKeyDown)
});

commentElement.addEventListener('focus', () => {
  document.removeEventListener('keydown', onDocumentKeyDown)
});

commentElement.addEventListener('blur', () => {
  document.addEventListener('keydown', onDocumentKeyDown)
});

const onUploadCancelClick = () => {
  closeForm();
}

const onUploadFillChange = () => {
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadCancel.addEventListener('click', onUploadCancelClick);
}

uploadFile.addEventListener('change', onUploadFillChange);

export { KEY_CODE_ESC, uploadFile, uploadCancel, editForm, body, onUploadCancelClick, onDocumentKeyDown, closeForm }
