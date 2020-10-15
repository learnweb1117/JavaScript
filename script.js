/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла DONE

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i <= 2; i++) {
//     let film = prompt('Один из последних просмотренных фильмов?', ''),
//         rate = prompt('На сколько оцените его?', '');
//     if (film == '' || film.length > 50) {
//         i--;
//     }
//     else {
//         personalMovieDB.movies[film] = rate;
//     }
// }

// let i = 0;
// while (i <= 2) {
//     let film = prompt('Один из последних просмотренных фильмов?', ''),
//     rate = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[film] = rate;
// if (film == '' || film.length > 50) {
//     personalMovieDB.movies = {};
//     i = -1;
// }
// i++;
// }
let i = 0;
do {
    let film = prompt('Один из последних просмотренных фильмов?', ''),
    rate = prompt('На сколько оцените его?', '');
   
if (film == '' || film.length > 50) {
    i--;
}
else {
    personalMovieDB.movies[film] = rate;
}
i++;
}
while(i <= 2);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы Мустафа');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB); 