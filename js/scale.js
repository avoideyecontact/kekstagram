const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const imgPreview = document.querySelector('.img-upload__preview');

const MAX_VALUE = 100;
const MIN_VALUE = 25;
const STEP_VALUE = 25;

let imgScale = 100;

btnSmaller.addEventListener('click', () => {
<<<<<<< HEAD
  if (imgScale >= MIN_VALUE + STEP_VALUE) {
    imgScale -= STEP_VALUE;
=======
  if (imgScale >= minValue + stepValue) {
    imgScale -= stepValue;
>>>>>>> 8ed2a55fbefb0923fde7b8ba537511d3b986298f
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

btnBigger.addEventListener('click', () => {
<<<<<<< HEAD
  if (imgScale <= MAX_VALUE - STEP_VALUE) {
    imgScale += STEP_VALUE;
=======
  if (imgScale <= maxValue - stepValue) {
    imgScale += stepValue;
>>>>>>> 8ed2a55fbefb0923fde7b8ba537511d3b986298f
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

export { imgPreview }
