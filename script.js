'use strict';

// To string

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(1)));

// 2)
console.log(typeof(null + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'3'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, Nan === FALSE

// 1)
let switcher = null;

if (switcher) { // Условие не выполняется
    console.log('Working...');
}

switcher = 1;

if (switcher) { // Условие выполняется
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4'));