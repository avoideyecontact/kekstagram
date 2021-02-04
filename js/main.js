// Проверки максимальной длины строки
function checkLength(yourString, maxLength) {
  return yourString.length <= maxLength;
}

// Целое число из диапазона "min...max"
function getRandomInt(min, max) {
  if (max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else if (min == max) {
    return min;
  }
  else return Math.floor(Math.random() * (min - max + 1)) + max;
}

checkLength('some string', 16);

getRandomInt(1, 9);
