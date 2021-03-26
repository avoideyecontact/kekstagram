import {drawPictures} from './draw.js'
import {createFetch} from './fetch-data.js'

const fetchData = createFetch(
  (data) => {
    drawPictures(data);
  },
  (err) => {
    window.console.log(err);
  });

fetchData();
