// Проверки максимальной длины строки
function checkStrLength(yourString, maxLength) {
  return yourString.length <= maxLength;
}

// Целое число из диапазона "min...max"
function getRandomInt(min, max) {
  return Math.abs(Math.floor(Math.random() * (min - max + 1)) + max);
}

checkStrLength('some string', 16);
getRandomInt(1, 9);

// Массив имен
let names = ['Влад', 'Герман', 'Бенедикт', 'Кирилл', 'Светослава', 'Нина', 'Алиса', 'Василий', 'Богдан', 'Альберт', 'Сильвестр'];

// Массив описаний фотографий
let descriptions = ['Мне нравится эта фотография, потому что она точно передаёт моё настроение',
  'Только что сделал классную фотку!',
  'Моим друзьям понравилось',
  'Даже не знаю что написать',
  'Как вам фотка?',
  'Как по мне, получилось очень даже неплохо!'];

// Массив комментариев к фото
let messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Возвращает случайный элемент массива
function getRandomArrayElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

// Создание случайных комметариев
function generateComments(messagesArray) {
  let commentArray = [];
  //let indexArray = [];
  // for (let i = 1; i <= 255; i++) {
  //   indexArray.push(i);
  // };
  for (let i = 0; i < getRandomInt(1, 10); i++) {
    commentArray.push({
      id: getRandomInt(1, 255),
      avatar: 'img/avatar-' + getRandomInt(1, 6) +'.svg',
      message: getRandomArrayElement(messagesArray),
      name: getRandomArrayElement(names),
    });
  }
  return commentArray;
}

// Создание описания для постов
function generateData(dataArray, descriptionsArray, messagesArray, number = 1) {
  for (let i = 0; i < number; i++) {
    dataArray[i] = {
      id: i,
      url: 'photos/' + i + '.jpg',
      description: getRandomArrayElement(descriptionsArray),
      likes: getRandomInt(15, 200),
      comments: generateComments(messagesArray),
    };
  }
}

// Массив описаний постов
let postsDescription = [];

generateData(postsDescription, descriptions, messages, 25);
