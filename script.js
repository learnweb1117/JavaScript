'use strict';

if (0) {
    console.log('Ok!');
} else {
    console.log('Error!');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too many!');
// } else {
//     console.log(num);
// }

// (num == 50) ? console.log('Ok') : console.log('Error');


const num = '50';
switch (num) {
   case 49:
       console.log('Noo');
       break;
    case '51':
        console.log('Noo');
        break;
    case 50:
        console.log('Yeeah!');
        break;
    default:
        console.log('Sorry:(');
        break;
}