'use strict';

// Local Starage это свойство глобального объекта window / сам он тоже является объектом который содержит пары ключ-значение

// Заносим нвоый ключ в localstorage

// localStorage.setItem('number', 5);

// // Получаем данные из localstorage

// localStorage.getItem('number');

// console.log(localStorage.getItem('number'));

// // Удаляем элемент и-з localstorage

// localStorage.removeItem('number');

// // Очищаем наш localstorage

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const presone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(presone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));
