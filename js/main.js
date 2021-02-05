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
