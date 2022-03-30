'use strict';

/******* 1. hasId function ******/

const jsStudent = {
  id: 1,
  name: 'Concha',
  lastName: 'Asensio',
  level: 'Junior',
};

const hasId = (object) => 'id' in object;

console.log(hasId(jsStudent));

/***** 2. head function *****/

const andalusianCapitalcities = [
  'Almería',
  'Granada',
  'Málaga',
  'Jaén',
  'Córdoba',
  'Sevilla',
  'Cádiz',
  'Huelva',
];

const head = ([first]) => first;

// const head = (array) => {
//   const [first] = array;
//   return first;
// };

console.log(head(andalusianCapitalcities));

/***** 3. tail function *****/

const fruits = ['lemon', 'orange', 'strawberry', 'graps', 'apple'];

const tail = (array) => {
  const [, ...restItems] = array;
  return restItems;
};

//const tail = ([, ...restItems]) => restItems;

console.log(tail(fruits));

/***** 4. swapFirstToLast function *****/

const animals = ['dog', 'horse', 'donkey', 'duck'];

const swapFirstToLast = (array) => {
  const [firstItem, ...restItems] = array;
  const newArray = [...restItems, firstItem];
  return newArray;
};

console.log(swapFirstToLast(animals));

/***** 5. excludeId function *****/

const user = {
  id: 1,
  name: 'Luis',
  surname: 'Pérez',
  age: 40,
};

const excludeId = (obj) => {
  const { id, ...restItems } = obj;
  const newObject = { ...restItems };

  return newObject;
};

// const excludeId = ({ id, ...restItems }) => restItems;

console.log(excludeId(user));

/***** 6. wordStartingWithA function *****/

const words = [
  'coche',
  'avión',
  'mesa',
  'casa',
  'Araña',
  'Tortilla',
  'aceituna',
  'Ángel',
];

const wordStartingWithA = (array) => {
  return array.filter((word) => word.charAt(0).toLowerCase() === 'a');
};

// const wordStartingWithA = (array) => {
//   return array.filter((word) => /^[a|A|á|Á]/.test(word));
// };

console.log(wordStartingWithA(words));

/***** 7. concat function *****/

const concat = (...strings) => strings.join('|');

console.log(
  `Concatenated strings: ${concat('car', 'house', 'bike', 'garage')}`
);

/***** 8. multArray function *****/

const numbers = [1, 2, 3, 4, 5];

const multArray = (array, number) => array.map((element) => element * number);

console.log(multArray(numbers, 5));

/***** 9. calcMult function *****/

const calcMult = (...numbers) =>
  numbers.reduce((acc, number) => acc * number, 2);

console.log(calcMult(1, 2, 3, 4, 5));

/***** EXTRA *****/
/***** 1. swapFirstSecond function *****/

const europeanCapitals = ['Madrid', 'Berlín', 'Londres', 'París'];

const swapFirstSecond = (array) => {
  const [first, second, ...rest] = array;
  return [second, first, ...rest];
};

console.log(swapFirstSecond(europeanCapitals));

/***** 2. firstEqual function *****/

const firstEqual = (character, ...strings) => {
  return strings.every((string) => string.startsWith(character));
};

console.log(firstEqual('c', 'caballo', 'perro', 'gato', 'conejo'));

/***** 3. longest function *****/

const longest = (...arrays) => {
  const arraysSize = arrays.map((array) => array.length);
  const arraysSizeOrderedByLength = [...arraysSize].sort((a, b) =>
    a < b ? 1 : -1
  );
  const [firstArray] = arraysSizeOrderedByLength;
  const index = arraysSize.findIndex((arraySize) => arraySize === firstArray);
  return arrays[index];
};

console.log(longest([1, 2], [1], [1, 2, 3]));

/***** 4. searchInStringV1 function *****/

const searchInStringV1 = (string, character) => {
  return Array.from(string).reduce(
    (acc, letter) => (letter === character ? acc + 1 : acc),
    0
  );
};

console.log(searchInStringV1('esternocleidomastoideo', 'e'));

/***** 5. searchInStringV2 function *****/

const searchInStringV2 = (string, character) =>
  Array.from(string).filter((letter) => letter === character).length;

console.log(searchInStringV2('gárgara', 'o'));

/***** 6. sortCharacters function *****/

const sortCharacters = (string) => Array.from(string).sort().join('');

console.log(sortCharacters('bonito'));

/***** 7. shout function *****/

const shout = (...words) =>
  `¡${words.map((word) => word.toUpperCase()).join(' ')}!`;

console.log(shout('no', 'hagas', 'eso'));
