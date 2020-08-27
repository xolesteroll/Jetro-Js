'use strict';

/* Java script объектно ориентированный язык, главную роль в нем играет объект, он может в себе содержать методы свойсства и любой тип данных
представляет собой эдакий кирпичик из которых состоит язык 
JavaScript я вляется прототипно ориентированным языком - это частный случай ООП
*/

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); // строка
console.log(typeof(strObj)); // объект

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('HEllo');
    }
};

const jonh = Object.create(soldier); // Создание объекта с указанием его прототипа в качестве аргумента

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; Устаревший вариант для установки прототипа

// Object.setPrototypeOf(jonh, soldier); 
/* Эта запись идентична устаревшей записи выше! первым аргументом указывается 
объект который наследует прототип, а второй который этот прототип содержит(както так) */

// console.log(jonh.armor);
jonh.sayHello();