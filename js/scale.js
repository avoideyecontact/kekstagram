const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const imgPreview = document.querySelector('.img-upload__preview');

let imgScale = 100;

btnSmaller.addEventListener('click', function() {
  if (imgScale >= 50) {
    imgScale -= 25;
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

btnBigger.addEventListener('click', function() {
  if (imgScale <= 75) {
    imgScale += 25;
    scaleValue.value = imgScale + '%';
    imgPreview.style.transform = 'scale(' + imgScale / 100 + ')';
  }
})

export { imgPreview }
