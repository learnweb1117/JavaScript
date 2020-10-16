'use strict';

const str = 'test';
const arr = [1, 2, 4];

// console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const log = 'Hello World!';

// console.log(log.slice(5));

// console.log(log.substring(6, 11));

console.log(log.substr(6, 5));

const num = 12.5;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));