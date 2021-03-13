import * as data from './data.js';

const templatePicture = document.querySelector('#picture').content; // Находим template картинки
const template = templatePicture.querySelector('.picture'); // Находим "внутренности" шаблона

const pictures = document.querySelector('.pictures'); // Находим блок картинок

function getPhotoTemplate(photoObject) {
  const element = template.cloneNode(true); // Копируем внутренности шаблона
  element.querySelector('img').src = photoObject.url; // Задаем адрес картинке
  element.querySelector('.picture__comments').textContent = photoObject.comments.length; // Задаем количество комментариев
  element.querySelector('.picture__likes').textContent = photoObject.likes; // Задаем количество лайков

  return element;
}

function drawPictures(photosData) {
  const fragment = document.createDocumentFragment(); // Создаем фрагмент для дальнейшего использования

  for (let i = 0; i < photosData.length; i++) {
    const element = getPhotoTemplate(photosData[i]);

    fragment.appendChild(element); // Добавляем во фрагмент элемент
  }

  pictures.appendChild(fragment); // Добавляем фрагмент на страницу
}

drawPictures(data.postsDescription)
