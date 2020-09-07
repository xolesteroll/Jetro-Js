'use strict';

const blog = document.getElementById('blog');

// console.log(blog);

const spans = document.getElementsByTagName('span'); // Получаем все span на странце
const span = document.getElementsByTagName('span')[1]; // Получаем второй по порядку спан на странице
    
// console.log(spans); // Получаем html коллекцию(псевдомассив) из всех спанов на страницу
// console.log(spans[1]); // получаю второй спан из псевдомассива
// console.log(span);

const textBlocks = document.getElementsByClassName('slider-top__text');

// console.log(textBlocks);

// БОЛЕЕ СОВРЕМЕННЫЕ МЕТОДЫ

const paragraphs = document.querySelectorAll('.about-item__text');

// console.log(paragraphs); // Получаем псевдо массив, но у него уже есть метод foreach

// paragraphs.forEach(item => {
//     console.log(item);
// });

const oneParagraph = document.querySelector('.about-item__text');
const works = document.querySelector('.works__inner');

// console.log(oneParagraph); // Получаем первый по порядку элемент с указанным классом на странице

blog.style.backgroundColor = "red";// стили устанавливаются инлайново и имеют наивыыший приоритет
blog.style.width = "50%";

spans[1].style.fontSize = '50px';

span.style.backgroundColor = 'green';

blog.style.cssText = 'background-color: green; width: 1000px; border-radius: 100%';

// for (let i = 0; i < paragraphs.length; i++) { // Цикл для перебора элментов псевдомассива и задания им стилей
//     paragraphs[i].style.backgroundColor = 'blue';
// }

paragraphs.forEach(item => { // for each для перебора элементов
    item.style.backgroundColor = 'blue';
});

// Создаем новый элемент с помощью скрипта

const div = document.createElement('div'); // Создает его только внутри js файла

const text = document.createTextNode('Тут был я а там был он');

div.classList.add('black');   

// Добавляем созданный элемент на страницу

document.body.append(div); // Добавляем элемент в конец тега body


// document.querySelector('.works__inner').append(div);// Добавляем элемент в конец блока по тегу


// works.prepend(div); // Добаляет элемент в начало блока указанного по селектору

// paragraphs[2].before(div); // добавляем элемент перед указанным элементом

// spans[1].remove(); // удалаем элемент со страницы

// spans[1].replaceWith(div); // Заменяем один элемент другим

// // Устаревшие конструкции

// works.appendChild(div); 
// works.insertBefore(div, spans[1]); // Первый аргумент добавляемый элемент, а второй элемент перед которым он добавляется
// spans.removeChild(spans[1]);
// works.replaceChild(div, spans[1]);

// Редактирование элементов на странице

div.innerHTML = `<h1>Hello World</h1>`; // Вкрапление HTML внутрь элемента

// div.textContent = 'Hello'; // Только Текст

div.insertAdjacentHTML('beforebegin', '<h2>Hello MAaaf</h2>');
div.insertAdjacentHTML('beforeend', '<h2>Hello MAaaf</h2>');
div.insertAdjacentHTML('afterbegin', '<h2>Hello MAaaf</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello MAaaf</h2>');


console.log(document.body); // доступ к тегу body
console.log(document.documentElement); // доступ к тегу html тоесть ко всему полотну

console.log(document.body.childNodes); // Получаем список узлов в теге body
// включая текстовые узлы между элементами
// Каждый элдемент в html коде является по факту DOM узлом, но не каждый дом узел является элементом

console.log(document.body.firstChild); // Первый узел на странице
console.log(document.body.lastChild); // Последний узел на странице
console.log(document.body.firstElementChild); // Аналогично для элементов(не узлов)

// Команды для получения родителя, соседей и детей элементов

console.log(document.querySelector('#blog').parentNode.parentNode); 
// Получаем родительскйи узел родительского узла элемента

console.log(document.querySelector('#blog').parentElement); 
// Получаем родительский элемент(не узел)

console.log(document.querySelector('[data-current="2"]').nextSibling);
// ПОлучаем следующий после элемента узел,  по аттрибуту, аналолично с nextElementSibling для получения элемента(не узла)

console.log(document.querySelector('[data-current="2"]').nextElementSibling);
// // ПОлучаем следующий после элемента элемент(не узел),  по аттрибуту

// Для свойства childNodes не существует аналогии для получения только элементов(не узлов)
// Поэтому чтобы сделать это требуется прописать код для этого в ручнуюю

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text'){
        continue;
    }

    console.log(node);
}