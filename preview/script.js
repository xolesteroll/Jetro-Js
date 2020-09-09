'use strict';

// Параметры документа, окна и работа с ними

const box = document.querySelector('.box'),
      btn = document.querySelector('button'),
      width = box.clientWidth, // Получаем ширишу элемента без учета паддингов скроллов и тд
      height = box.clientHeight,
      offsetW = box.offsetWidth, // Получаем полную ширину элемента включая паддинги скроллы и тд
      offsetH = box.offsetHeight,
      scrollW = box.scrollWidth, // Получаем полную высоту элемента учитывая и тот контент который виден только при скролле
      scrollH = box.scrollHeight;


      console.log(width, height);
      console.log(offsetW, offsetH);
      console.log(scrollW, scrollH);

btn.addEventListener('click', () => {
    // box.style.height = scrollH + 'px'; // При клике высота элемента увеличивается до значения полного контента который появляетяс при скролле
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // Получаем объект с координатами элемента 

const style = window.getComputedStyle(box); // Получаем высчитанные стаили элемента, тоесть если даже ширина или 
// какой либо другой параметр был задан в условных единицах - мы получаем уже конечные стили которые к нему применились
// в пикселях .. 

console.log(style.display); // Получаем значение параметра display эелемента в данном случае - block 
// Так же можем получить значение любого параметра

console.log(document.documentElement.scrollTop); // Просто обратиться к document и посмотреть насколько уже \
// проскроллена страница мы не можем сам document не имеет такого метода.. поэтому чтобы получить значение этого
// свойства или любого другого нужно обращаться к document через documentElement

window.scrollBy(x, y); // Команда для скролла окна относительно нынешнего положения, по оси x и по оси y
window.scrollTo(x, y); // Команда для скролла окна относительно всей страницы, по оси x и по оси y



