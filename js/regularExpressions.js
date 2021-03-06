'use strict';

// Регулярные выражения позволяют очень удобно работать со строками
// ЛЮбое регулярное выражение состоит из двух частей - патерны и флаги

// new RegExp('pattern', 'flags'); // Классичесникй синтксис которым никто не пользуется

// /pattern/f 
// Флаги
// i = найти что то в независимости от регистра
// g = когад ищем все вхождения
// m = Включает многострочный режим

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;


// console.log(ans.search(reg)); // Этот метод ищет первое попавшееся совпадение с паттерном в строке
// console.log(ans.match(reg)); // БЕз флажка g работает так же как search но  результате мы получаем массив с инфой о паттерне

// const pass = prompt('Password');


// console.log(pass.replace(/./ig, '*')); // ЗАменяем все символы(или указаные в паттерне конкретные символы) в полученной строке звездочками


// console.log('12-34-56'.replace(/-/g, ':'));

// Методы регулярных выражений

// const ans = prompt('Введите что нибудь чтобы мы это могли изменить и швырнуть вам в ебло');

// const reg = /n/ig;
// console.log(reg.test(ans)); // Метод test проверяет строку на совпадение с паттерном, возвращает bolean значение

// Классы в регулярных выражениях 

// \d - в качестве паттерна внутри рег выражения означает digits и ищет цифры
// \w - words - слова - буквы
// \s - spaces - пробелы

// const ans = prompt('Введите ваше число');

// const reg = /\d/;
// console.log(ans.match(reg)); // ВОзвращает нам массив со всеми цифрами в строке

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // ищет кусок строки который подходит под формат буква\цифра\буква\цифра

// ОБратные классы
// /\D/ = не числа
// /\W/ = не слова(не буквы)
// /\S/ = не пробелы