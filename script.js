'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Clicked');
// };
let i = 0;
const deleter = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleter);
    // }
    // console.log('hover');
    // e.target.remove();
};

// btn.addEventListener('click', deleter);
// overlay.addEventListener('click', deleter);

btns.forEach(btn => {
    btn.addEventListener('click', deleter, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(e.target);
});