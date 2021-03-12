import * as data from './data.js';

const templatePicture = document.querySelector('#picture').content; // Находим template картинки
const template = templatePicture.querySelector('.picture'); // Находим "внутренности" шаблона

const pictures = document.querySelector('.pictures'); // Находим блок картинок

const fragment = document.createDocumentFragment(); // Создаем фрагмент для дальнейшего использования

for (let i = 0; i < data.postsDescription.length; i++) {
  const element = template.cloneNode(true); // Копируем внутренности шаблона

  const img = element.querySelector('img'); // Находим в шаблоне картинку
  img.src = data.postsDescription[i].url; // Задаем адрес картинке

  const comment = element.querySelector('.picture__comments'); // Находим тег комментариев
  const likes = element.querySelector('.picture__likes'); // Находим тег лайков

  comment.textContent = data.postsDescription[i].comments.length; // Задаем количество комментариев
  likes.textContent = data.postsDescription[i].likes; // Задаем количество лайков

  fragment.appendChild(element); // Добавляем во фрагмент элемент
}

pictures.appendChild(fragment); // Добавляем фрагмент на страницу
