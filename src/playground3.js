/* The ES6 map Method on an array */
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => number * number);

console.log(squares);

const names = ['PAUL', 'JEFF', 'GON'];

const lowercaseNames = names.map((name) => name.toLowerCase());

console.log(lowercaseNames);
