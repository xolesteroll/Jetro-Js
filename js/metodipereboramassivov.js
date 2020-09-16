'use strict';

// Метод filter - этот метод в отличии от того же forEach возвращает новый отфильстрованный массив. 

const names = ['Ivan', 'Ann', 'Xenia', 'Voldemar'];

const shortNames = names.filter(function(name) { // В качесте аргумента у методжа filter задается callback функция которая берет в себя
    // в свою очередь в качестве аргумента каждый отдельный элемент перебираемого массива (О как)
    return name.length < 5; // на выходе мы получаем нвоый массив с отфильтрованным по условиям содержимым
});

console.log(shortNames);

// Метод map - позволяет нам взять исходный массив и изменить элементы внутри него и после получить новый массив с измененными элементами

let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => {
    return item.toLowerCase();
});

console.log(answers);

// Методы every/some - возвращают на boolean значение
// some - перебирает массив по условию и если хотя бы один из элементов массива подходит по условиям то он возвращает нам true
// every - если все элементы соответствуют нашему условию то только в таком случае every вернет true

const sole = ['weq', 7, 98, '231weqd'];

console.log(sole.some(item => {
    
    return typeof(item) === 'number';
}));

console.log(sole.every(item => {
    return typeof(item) === 'number';
}));

// Метод reduce - служит для того чтобы собирать массив в одно единое целое, тоже возвращает новый сформированный массив\результат

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => { // Вторым аргументом у метода reduce после callbak функции может выступать начальное значение sum
    return sum + current;
});

console.log(res);

const arrr = ['apple', 'pear', 'plum'];

const ress = arrr.reduce((sum, current) => {
    return `${sum}, ${current}`;
});

console.log(ress);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)// Таким образом мы получаем новый массив массивов основынный на имеющемся у нас объекте
.filter(item => {
    return item[1] === 'persone'; // Возвращаем массивы из массива второй элемент у который равен строке 'persone'
})
.map(item => {
    return item[0]; // Возвращаем первые элементы из возвращенных по условию массивов
});

console.log(newArr);