// Проверки максимальной длины строки
const checkStrLength = (yourString, maxLength) => {
  return yourString.length <= maxLength;
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

// Целое число из диапазона "min...max"
const getRandomInt = (min, max) => {
  return Math.abs(Math.floor(Math.random() * (min - max + 1)) + max);
}

<<<<<<< HEAD
export { getRandomInt, checkStrLength, isEscEvent };
=======
// Возвращает случайный элемент массива
const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}

export { getRandomInt, getRandomArrayElement, checkStrLength, isEscEvent };
>>>>>>> 8ed2a55fbefb0923fde7b8ba537511d3b986298f
