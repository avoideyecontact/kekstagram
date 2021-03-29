// Проверки максимальной длины строки
function checkStrLength(yourString, maxLength) {
  return yourString.length <= maxLength;
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

// Целое число из диапазона "min...max"
function getRandomInt(min, max) {
  return Math.abs(Math.floor(Math.random() * (min - max + 1)) + max);
}

// Возвращает случайный элемент массива
function getRandomArrayElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

export { getRandomInt, getRandomArrayElement, checkStrLength, isEscEvent };

//Временный код чтобы пройти тесты
window.console.log(checkStrLength('abc', 15));
