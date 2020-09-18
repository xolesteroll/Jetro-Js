'use strict';

// Глобальных переменных должно быть как можно меньше, модуль помогает держать в чистоте глобальное пространство
// А так же позволяет избежать конфликтов с одинаковыми именами


const app = 123;

// Модуль с использованием анонимной самовызвающиейся функции

const number = 1; // Переменная записывается в глобальную область видимости

(function(){ // Создаем собственную область вдимости
    let number = 2; // ЛОкальная переменная с локальной областью видимости
    console.log(number);
    console.log(number + 3);
}()); // Анонимная самовызывающаяся функция, которая вызывается сразу после объявления

console.log(number); // ОБращаемся к переменной из глобальной области видимости вне нашей функции

// ИСпользование объектного интерфейса ддля создания модуля

const user = (function(){
    const privat = function() {
        console.log('I am private');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();