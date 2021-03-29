import * as scale from './scale.js';

let imgEffect = '';

const sliderBar = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

/* eslint-disable */
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const effectsElement = document.querySelector('.effects__list');

const onElementChange = function(evt) {
  if (evt.target.matches('input[type="radio"]')) {
    imgEffect = evt.target.value;
    scale.imgPreview.className = 'img-upload__preview';
    scale.imgPreview.classList.add( `effects__preview--${imgEffect}`);

    if (imgEffect === 'none') {
      sliderBar.classList.add('hidden');
      scale.imgPreview.style.filter = '';
    }
    else {
      sliderBar.classList.remove('hidden');
    }
    sliderElement.noUiSlider.reset();
  }
};

effectsElement.addEventListener('change', onElementChange);

sliderElement.noUiSlider.on('update', (___, handle, unencoded) => {
  valueElement.value = unencoded[handle];
  if (imgEffect === 'chrome') {
    scale.imgPreview.style.filter = 'grayscale(' + Math.floor(valueElement.value / 10) * 0.1 + ')';
  }
  if (imgEffect === 'sepia') {
    scale.imgPreview.style.filter = 'sepia(' + Math.floor(valueElement.value / 10) * 0.1 + ')';
  }
  if (imgEffect === 'marvin') {
    scale.imgPreview.style.filter = 'invert(' + valueElement.value + '%)';
  }
  if (imgEffect === 'phobos') {
    scale.imgPreview.style.filter = 'blur(' + Math.floor(valueElement.value * 0.3) * 0.1 + 'px)';
  }
  if (imgEffect === 'heat') {
    scale.imgPreview.style.filter = 'brightness(' + Math.floor(valueElement.value * 0.3) * 0.1 + ')';
  }
});

export { sliderElement, sliderBar };
