import './util.js';
import './upload.js';
import './scale.js';
import './effect.js';
import './form.js';
import './hash-validation.js';
import './photo.js';
import './big-pic.js';

import { drawPictures } from './draw.js'
import { onFilterButtonClick } from './filters.js'
import { createFetch } from './fetch-data.js'
import { openPopupOnError, closePopupOnError } from './fetch-data.js'

createFetch((data) => {
  drawPictures(data);
  closePopupOnError();
  onFilterButtonClick(data, drawPictures);
},
openPopupOnError,
);
