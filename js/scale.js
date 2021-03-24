const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const imgPreview = document.querySelector('.img-upload__preview');

const maxValue = 100;
const minValue = 25;
const stepValue = 25;

let imgScale = 100;

btnSmaller.addEventListener('click', function() {
  if (imgScale >= minValue + stepValue) {
    imgScale -= stepValue;
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

btnBigger.addEventListener('click', function() {
  if (imgScale <= maxValue - stepValue) {
    imgScale += stepValue;
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

export { imgPreview }
