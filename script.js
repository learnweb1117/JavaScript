'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('Mustafa top of the top');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(34343, 343434));
// console.log(calc(33, 34));
// console.log(calc(-33, 34));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function () {
    console.log('Hi!');
};

logger();

const calc = (a, b) => {
  return a + b; 
};