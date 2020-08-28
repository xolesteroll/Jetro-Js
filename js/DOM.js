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

// console.log(oneParagraph); // Получаем первый по порядку элемент с указанным классом на странице

blog.style.backgroundColor = "red";// стили устанавливаются инлайново и имеют наивыыший приоритет
blog.style.width = "50%";

spans[1].style.fontSize = '50px';