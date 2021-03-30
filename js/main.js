import './util.js';
import './upload.js';
import './scale.js';
import './effect.js';
import './form.js';
import './hash-validation.js';
import './photo.js';
import './big-pic.js';


import { drawPictures } from './draw.js'
import {onFilterButtonClick} from './filters.js'
import {createFetch} from './fetch-data.js'

createFetch(
(data) => {
console.log(data)
drawPictures(data);
onFilterButtonClick(data, drawPictures);
},
(err) => {
window.console.log(err);
});
