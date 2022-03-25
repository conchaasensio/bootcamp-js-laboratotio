'use strict';

const randomPick = (num, min, max) => {
  const numbers = [];
  const range = max - min + 1;

  while (numbers.length < num) {
    const randomNumber = Math.floor(Math.random() * range) + min;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};

console.log(randomPick(10, 1, 100));
