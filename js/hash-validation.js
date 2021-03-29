import { checkStrLength } from './util.js';

const fieldHashElement = document.querySelector('.text__hashtags');
const HASH_VALIDITY = RegExp('^#[a-zA-Z0-9а-яА-ЯёЁ]{1,19}$');
const MAX_HASHS_NUMBER = 5;

const validateHashs = () => {
  fieldHashElement.addEventListener('input', (evt) => {
    const hashsArray = evt.target.value.toLowerCase().split(' ');
    const isDuplicateHash = !hashsArray.every((item, index, array) => array.indexOf(item) === index);
    const isInvalidHash = !hashsArray.every((item) => (item === '' || HASH_VALIDITY.test(item)));

    if (hashsArray.length > MAX_HASHS_NUMBER) {
      fieldHashElement.setCustomValidity('Максимальное кол-во хештегов: ' + MAX_HASHS_NUMBER);
      fieldHashElement.classList.add('error-validation');
    }
    else if (isInvalidHash) {
      fieldHashElement.setCustomValidity('Хэштег должен начинаться с # и не может содержать цифры, знаки или эмодзи');
      fieldHashElement.classList.add('error-validation');
    }
    else if (isDuplicateHash) {
      fieldHashElement.setCustomValidity('Хэштеги не должны повторяться');
      fieldHashElement.classList.add('error-validation');
    }
    else {
      fieldHashElement.classList.remove('error-validation');
      fieldHashElement.setCustomValidity('')
    }

    fieldHashElement.reportValidity();
  });
}

const fieldCommentElement = document.querySelector('.text__description');

const MAX_COMMENT_LENGTH = 140;

const valideteComment = () => {

  fieldCommentElement.addEventListener('input', () => {

    if ( !checkStrLength( fieldCommentElement.value, 140 ) ) {
      fieldCommentElement.setCustomValidity('Комментарий не должен превышать ' + MAX_COMMENT_LENGTH + ' символов.');
      fieldCommentElement.classList.add('error-validation');
    }
    else {
      fieldCommentElement.classList.remove('error-validation');
    }

  });

  fieldCommentElement.reportValidity();

};

validateHashs();
valideteComment();

export { validateHashs, fieldHashElement };
