import * as scale from './scale.js';

const effectArray = document.querySelectorAll('.effects__item');

let imgEffect = '';

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

for (let i = 0; i < effectArray.length; i++) {
  const effectRadio = effectArray[i].querySelector('.effects__radio');
  effectRadio.addEventListener('click', function() {
    scale.imgPreview.className = scale.imgPreview.className.split(' ')[0];
    imgEffect = effectArray[i].querySelector('.effects__preview').className.split(' ');
    imgEffect = imgEffect[imgEffect.length - 1];
    scale.imgPreview.style.filter = '';
    scale.imgPreview.classList.add( imgEffect );

    if (imgEffect === 'effects__preview--none') {
      sliderElement.classList.add('visually-hidden');
    }
    else {
      sliderElement.classList.remove('visually-hidden');
    }

    sliderElement.noUiSlider.reset();
  });
}

sliderElement.noUiSlider.on('update', (___, handle, unencoded) => {
  valueElement.value = unencoded[handle];
  if (imgEffect === 'effects__preview--chrome') {
    scale.imgPreview.style.filter = 'grayscale(' + Math.floor(valueElement.value / 10) * 0.1 + ')';
  }
  if (imgEffect === 'effects__preview--sepia') {
    scale.imgPreview.style.filter = 'sepia(' + Math.floor(valueElement.value / 10) * 0.1 + ')';
  }
  if (imgEffect === 'effects__preview--marvin') {
    scale.imgPreview.style.filter = 'invert(' + valueElement.value + '%)';
  }
  if (imgEffect === 'effects__preview--phobos') {
    scale.imgPreview.style.filter = 'blur(' + Math.floor(valueElement.value * 0.3) * 0.1 + 'px)';
  }
  if (imgEffect === 'effects__preview--heat') {
    scale.imgPreview.style.filter = 'brightness(' + Math.floor(valueElement.value * 0.3) * 0.1 + ')';
  }
});
