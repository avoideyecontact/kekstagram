const templatePicture = document.querySelector('#picture').content; // Находим template картинки
const template = templatePicture.querySelector('.picture'); // Находим "внутренности" шаблона

let arrayOfPhotos = [];

const pictures = document.querySelector('.pictures'); // Находим блок картинок

const getPhotoTemplate = (photoObject) => {
  const element = template.cloneNode(true); // Копируем внутренности шаблона
  element.querySelector('img').src = photoObject.url; // Задаем адрес картинке
  element.querySelector('.picture__comments').textContent = photoObject.comments.length; // Задаем количество комментариев
  element.querySelector('.picture__likes').textContent = photoObject.likes; // Задаем количество лайков

  return element;
}

const drawPictures = (photosData) => {
  const fragment = document.createDocumentFragment(); // Создаем фрагмент для дальнейшего использования

  photosData.forEach( (photoObject) => {
    const element = getPhotoTemplate(photoObject);
    fragment.appendChild(element); // Добавляем во фрагмент элемент
  });

  arrayOfPhotos = [...photosData];
  pictures.appendChild(fragment); // Добавляем фрагмент на страницу
}

export { drawPictures, arrayOfPhotos }
