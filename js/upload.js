const uploadFile = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

uploadFile.addEventListener('change', function () {
  editForm.classList.remove('hidden');
  body.classList.add('modal-open');
});

const uploadCancel = document.querySelector('#upload-cancel');

uploadCancel.addEventListener('click', function() {
  editForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';
})

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    editForm.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFile.value = '';
  }
});
