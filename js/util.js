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

export { getRandomInt, checkStrLength, isEscEvent };
