'use strict';
// ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Передается ссылка на сузществующий объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) { // передается значение с помощью функции и цикла
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5, 
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // НЕзависимая поверхностная копия объекта путем объединения объхектов
// Для того чтобы сделать независимую копию объекта соединяем его с помощью этого метода 
// с пустым объектом - 

const clone = Object.assign({}, add);

clone.d = 22;
console.log(clone);
console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Копируем массив

newArray[1] = 'факю';

console.log(oldArray);
console.log(newArray);
