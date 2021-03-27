const uploadFile = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const KEY_CODE_ESC = 27;

const uploadCancel = document.querySelector('#upload-cancel');

const closeForm = function() {
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
  document.removeEventListener('keydown', onDocumentKeyDown);
  uploadCancel.removeEventListener('click', onUploadCancelClick);
}

const onDocumentKeyDown = function(evt) {
  if (evt.keyCode === KEY_CODE_ESC) {
    closeForm();
  }
}

const onUploadCancelClick = function() {
  closeForm();
}

const onUploadFillChange = function() {
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  uploadCancel.addEventListener('click', onUploadCancelClick);
}

uploadFile.addEventListener('change', onUploadFillChange);

export { KEY_CODE_ESC, uploadFile, uploadCancel, editForm, body, onUploadCancelClick, onDocumentKeyDown, closeForm }
