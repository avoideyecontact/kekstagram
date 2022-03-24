import { getRandomInt } from './util.js';


const RANDOM_PICS_NUMBER = 10;

const imgFilterElement = document.querySelector('.img-filters');
const imgFilterFormElement = document.querySelector('.img-filters__form');
const filterButtons = imgFilterFormElement.querySelectorAll('.img-filters__button');

const onFilterFormClick = (evt) => {

  filterButtons.forEach((button) => {
    if (button.id !== evt.target.id) {
      button.classList.remove('img-filters__button--active');
    } else {
      button.classList.add('img-filters__button--active');
    }
  });
}

imgFilterFormElement.addEventListener('click', onFilterFormClick);

const showImgFilterElement = () => {
  imgFilterElement.classList.remove('img-filters--inactive');
}

const getRandomElements = (array) => {

  let results = [];

  while(results.length < RANDOM_PICS_NUMBER){
    let randomElement = array[getRandomInt(0, array.length - 1)];

    if (!results.includes(randomElement)){
      results.push(randomElement);
    }
  }
  return results;
}

const getQuantityComents = (a, b) => {
  if(a.comments.length > b.comments.length){
    return -1
  }
  if (a.comments.length < b.comments.length) {
    return 1;
  }
  return 0;
}

const onFilterButtonClick = (photos, createPhotos) => {

  const uniqueSet = new Set(photos);
  const arrayOfSet = [...uniqueSet];

  imgFilterFormElement.addEventListener('click', (evt) => {
    if (evt.target.id === 'filter-random') {
      const elementsRandom = getRandomElements(arrayOfSet);

      const pictures = document.querySelector('main').querySelectorAll('.picture');
      pictures.forEach((currentValue) => {currentValue.remove()})

      createPhotos(elementsRandom);
    }
    else if (evt.target.id === 'filter-discussed') {
      const commentsLow = arrayOfSet.slice().sort(getQuantityComents);

      const pictures = document.querySelector('main').querySelectorAll('.picture');
      pictures.forEach((currentValue) => {currentValue.remove()})

      createPhotos(commentsLow);
    }
    else if (evt.target.id === 'filter-default') {
      const pictures = document.querySelector('main').querySelectorAll('.picture');
      pictures.forEach((currentValue) => {currentValue.remove()})

      createPhotos(arrayOfSet);
    }
  })
}

export {showImgFilterElement, onFilterButtonClick}
