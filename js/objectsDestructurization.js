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
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest(); // Самодельный метод для нашего объекта

// ДЕСТРУКТУРИЗАЦИЯ

const {border, bg} = options.color; // ДОстаем куски из объекта чтобы иметь возможность использовать их как отдельные переменные
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
    if (typeof(options[key]) === 'object') { // Если элемент объекта сам является объектом то запускается перебор элементов внутри него
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    
    
}

console.log(counter);
