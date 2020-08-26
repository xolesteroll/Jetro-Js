'use strict';

// Первое консольное приложение

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
//       personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//       };

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      };

start();
      // a = prompt('Один из последних просмотренных фильмов?'),
      // b = prompt('На сколько оцените его?'),
      // c = prompt('Один из последних просмотренных фильмов?'),
      // d = prompt('На сколько оцените его?');



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?'), // цикл для повторения вопросов дважды с помозью счетчика итерации i
            b = prompt('На сколько оцените его?');
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50) { // Условие для тогшо чтобы польщзователь не мог вводить пустую строку, отменять операцию , ил вводить слишком длнную стролку
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;   // повторение итерации при несоблюдении условий
      }
    }
}

rememberMyFilms();

// let i = 0;

// while (i < 2) {
//   const a = prompt('Один из последних просмотренных фильмов?'),  // Цикл while  с той же логикой что и выше
//         b = prompt('На сколько оцените его?');
//   i++;
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

// do {
//   const a = prompt('Один из последних просмотренных фильмов?'),  // цикл do while с той же логикой
//         b = prompt('На сколько оцените его?');
//   i++;
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }
// while(i < 2);



function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довльно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
  }else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();



function writeYourGenres() {
  for (let i = 0; i < 3; i++){
    const a = prompt(`Ваш Любимый жанр под номером ${i + 1}`);
    personalMovieDB.genres[i] = a;
    
    // personalMovieDB.genres[i] = prompt(`Ваш Любимый жанр под номером ${i + 1}`); // Укороченная запись без создания переменной
  }
}

writeYourGenres();

function showMyDB() {
  if (personalMovieDB.privat == false) { // МОй вариант
    console.log(personalMovieDB);
  } else {
    console.log('Настройки приватности не позволяют показать вам список');
  }
}
showMyDB();

// function showMyDB(hidden) { // Вариант УЧИТЕЛЯ c использованием аргумента для функции
//   if (!hidden) {
//     console.log(personalMovieDB);
//   } else{
//     console.log('Настройки приватности не позволяют показать вам список');
//   }
// }
// showMyDB(personalMovieDB.privat);

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

$(function () {
    $('.slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // autoplay: true,
        infinite: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-right.png" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-left.png" alt="prev arrow"></button>',
        asNavFor: '.slider-bottom',
        responsive: [
            {
              breakpoint: 721,
              settings: {
                arrows: false,
              }
            },
        ]
    });

    $('.slider-bottom').slick({
        asNavFor: '.slider-top',
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 965,
              settings: {
                slidesToShow: 5,
              }
            },
        ]
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').slideToggle();
        $(this).toggleClass('active')
    });



});

