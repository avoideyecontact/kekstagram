// Проверки максимальной длины строки
function checkStrLength(yourString, maxLength) {
  return yourString.length <= maxLength;
}

// Целое число из диапазона "min...max"
function getRandomInt(min, max) {
  return Math.abs(Math.floor(Math.random() * (min - max + 1)) + max);
}

checkStrLength('some string', 16);
getRandomInt(1, 9);

// Возвращает случайный элемент массива
function getRandomArrayElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

let temp = getRandomInt(1, 10);

export { getRandomInt, getRandomArrayElement, temp };
