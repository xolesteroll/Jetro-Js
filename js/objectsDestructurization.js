'use strict';
// ОБЪЕКТЫ , ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

options.makeTest(); // Самодельный метод для нашего объекта

// ДЕСТРУКТУРИЗАЦИЯ

const { border, bg } = options.color; // ДОстаем куски из объекта чтобы иметь возможность использовать их как отдельные переменные
console.log(border);

// ДЕСТРУКТУРИЗАЦИЯ

// Метод Object.keys() для объектов возвращает нам массив с элементами объекта, и уже у этого массива есть свойство lenght
// С помощью которого мы можем получить количество элементов
// console.log(Object.keys(options).length);

// console.log(options.color.border);

// console.log(options.name);

// delete options.name; // оператор для удаления элементов объекта

// console.log(options);


let counter = 0; // Счетчик для пересчета элементов объекта. Свойства lenght у объектов нет
for (let key in options) { // оператор for in для перебора элементов объекта будет работать столько раз, сколько элементов в объекте
    if (typeof (options[key]) === 'object') { // Если элемент объекта сам является объектом то запускается перебор элементов внутри него
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }


}

console.log(counter);

let string = 'abc dedededebc;;',
    stringArr = string.split('');

stringArr.forEach((item, i) => {
    if (isNaN(+item) || +item == 0) {
        stringArr.splice(i, 1);
    }
    console.log(stringArr);
});

console.log(stringArr.join(' '));

// let array = [12345678];
//     values = .map.call(, function(obj) {
//     return obj.value;
//   });

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
    return num.join(' ');
    
    }







console.log(isPrime(array));  // [53, 2, 5, 7, 31, 97, 17]