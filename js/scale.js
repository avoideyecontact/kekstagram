const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const imgPreview = document.querySelector('.img-upload__preview');

const MAX_VALUE = 100;
const MIN_VALUE = 25;
const STEP_VALUE = 25;

let imgScale = 100;

btnSmaller.addEventListener('click', () => {
  if (imgScale >= MIN_VALUE + STEP_VALUE) {
    imgScale -= STEP_VALUE;
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

btnBigger.addEventListener('click', () => {
  if (imgScale <= MAX_VALUE - STEP_VALUE) {
    imgScale += STEP_VALUE;
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

export { imgPreview }
