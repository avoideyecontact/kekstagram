import * as util from './util.js';

// Массив имен
const names = ['Влад', 'Герман', 'Бенедикт', 'Кирилл', 'Светослава', 'Нина', 'Алиса', 'Василий', 'Богдан', 'Альберт', 'Сильвестр'];

// Массив описаний фотографий
const descriptions = ['Мне нравится эта фотография, потому что она точно передаёт моё настроение',
  'Только что сделал классную фотку!',
  'Моим друзьям понравилось',
  'Даже не знаю что написать',
  'Как вам фотка?',
  'Как по мне, получилось очень даже неплохо!'];

// Массив комментариев к фото
const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

// Создание случайных комметариев
function getCommentObj(messagesArray, namesArray) {
  return {
    avatar: 'img/avatar-' + util.getRandomInt(1, 6) +'.svg',
    message: util.getRandomArrayElement(messagesArray),
    name: util.getRandomArrayElement(namesArray),
    id: util.getRandomInt(1, 255) + '-' + Date.now(),
  }
}

// Заполнение массива случайными комметариями
function generateComments(messagesArray, namesArray) {
  const commentArray = [];
  for (let i = 0; i < util.getRandomInt(1, 25); i++) {
    commentArray.push(getCommentObj(messagesArray, namesArray));
  }
  return commentArray;
}

// Создание описания для постов
function generateData(descriptionsArray, messagesArray, namesArray, number = 1) {
  const dataArray = [];
  for (let i = 0; i < number; i++) {
    dataArray.push({
      id: i,
      url: 'photos/' + (i+1) + '.jpg',
      description: util.getRandomArrayElement(descriptionsArray),
      likes: util.getRandomInt(15, 200),
      comments: generateComments(messagesArray, namesArray),
    });
  }
  return dataArray;
}

// Массив описаний постов
const postsDescription = generateData(descriptions, names, messages, 25);

export { postsDescription };
