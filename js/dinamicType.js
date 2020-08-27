'use strict';

// To String

// Старый способо почти не используется нынче
console.log(typeof(String(null))); 

// С помощью конкатенации превращаем число в строку. При сложении со строкой любых типов данных получается строка
console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px'; // Использование для задания стилей

// To Number

// ТОже устаревший способ, никто им не пользуется
console.log(typeof(Number('4')));

// Унарный Плюс
console.log(typeof(+'5'));
let answer = +prompt('HEllo', ''); // Все что мы получаем от пользователя является строкой, с помощью унарного плюса мы странсформируем эту строку в число

//
console.log(typeof(parseInt('15px', 10)));

// To Boolean

// 0, '', null, undefined, NaN; Все это я вляется false 
let switcher = null;

if (switcher) {
    console.log('working...');
}

switcher = 1;

if (switcher) {
    console.log('working...');
}

console.log(typeof(Boolean('4'))); // to boolean тоже устарекший

console.log(typeof(!!'4444')); // тоже редкий способ
