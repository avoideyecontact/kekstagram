import { drawPictures } from './draw.js'
import {createFetch} from './fetch-data.js'
// import {onFilterButtonClick} from './filters';

let arrayOfPhotos = [];

const fetchData = createFetch(
  (data) => {
    drawPictures(data);
    // onFilterButtonClick(data, drawPictures);
    arrayOfPhotos = data;
  },
  (err) => {
    window.console.log(err);
  });

fetchData();

window.console.log(arrayOfPhotos);
