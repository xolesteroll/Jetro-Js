'use strict';
// МАССИВЫ И ПСЕВДОМАССИВЫ

// МЫ получаем псевдомассивы когда работаем с элементами на странице

const array = [1, 2, 3, 5, 8]; // МАссив

// array.join("-");
// console.log(typeof(array.join("-")));

// array.pop(); // Удаляет последний элемент из массива
// array.push(10); // ДОбавляем элемент в конец массива

// console.log(array);

// for (let i = 0; i < array.length; i++) { // перебираем элементы массива c помощью цикла For
//     console.log(array[i]); // Свойство lenght считается как последний индекс массива + 1
// }

// for (let value of array) { // перебираем элементы массива с помощью цикла FOr OF который работает только с массивоподобными сущностями (строками, псевдомассивами и тд)
//     console.log(value);
// }

array.forEach(function(item, i, array) { // Метод foreach для перебора всех элементов массива принимает в качестве аргумента callback функцию
    // первый аргумент у функции в цикле foreach это наше название элементов массива, 
    // второй аргумент - его порядковый номер (индекс)
    // а третий аргумент  это ссылка на массив который мы перебираем
    console.log(`${i}: ${item} внутри массива ${array}`);

});

const string = prompt("", "");
const products = string.split(", "); // Метод split превращает строку в массив, чтобы он увидел какие 
// эелементы разделять при вводе данных указывается разделитель, в данном случае - запятая, пробел, 
// все что будет записано без запятой и пробела будет определяться как один элемент
products.sort(); // Сортирует элементы массива по алфавиту
console.log(products.join('; ')); // метод join преобразует массив в строку, в качесте аргумента указывается разделитель
