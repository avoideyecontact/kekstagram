import * as scale from './scale.js';

const effectArray = document.querySelectorAll('.effects__item');

for (let i = 0; i < effectArray.length; i++) {
  const effectRadio = effectArray[i].querySelector('.effects__radio');
  effectRadio.addEventListener('click', function() {
    scale.imgPreview.className = scale.imgPreview.className.split(' ')[0];
    let imgEffect = effectArray[i].querySelector('.effects__preview').className.split(' ');
    imgEffect = imgEffect[imgEffect.length - 1];
    scale.imgPreview.classList.add( imgEffect );
  });
}
