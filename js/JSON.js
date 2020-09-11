'use strict';

// Изначально JSON формат данных появился в JS но сейчас он может использоваться
// практически любым языкмо программирования. Документ JSON представляет собой набор
// пар ключ - значение, главное правило - все строки должны быть обязательно в двойных кавычках

const persone = { // В таком виде мы не можем отправить объект на сервер ибо сервер не понимает такой формат
    name: 'Alex',
    tel: '+744444444'
};

// Используя встроенный метод JSON у которого есть свои методы и свойства мы можем преобразовать
// Обычный объект в объект JSON

console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+744444444"} - такой формат данных
// уже может быть отправлен на сервер

console.log(JSON.parse(JSON.stringify(persone))); // Обратная операция

// Глубокие копии объектов

const person = { 
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Kolia'
    }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);