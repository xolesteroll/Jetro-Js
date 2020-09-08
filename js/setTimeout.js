// Вариант с указанием анонимной функции в качестве аргумента у setTimeOut()

// const timerId = setTimeout(function(text) { // Значением у переменной будет метод setTimeout()
//     // С анонимной функцией в качестве аргумента
//     console.log(text); 
// }, 2000, 'Hello'); // вторым аргументом у этого метода является задержка в данном случае 2 секунды
// Третий аргумент у данного метода передается в качестве аргумента в функцию которую он в себя принимает

// Вариант с указанием уже ОБЪЯВЛЕННОЙ функции в качестве аргумента у setTimeout()

const btn = document.querySelector('.btn');
let timerId,
    i = 0

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000, 'Hello');
    timerId = setInterval(logger, 2000, 'Hello');
    // После клика на btn каждые две секунды будет срабатывать функция logger

});

// const timerId = setTimeout(logger, 2000, 'Hello');
// setTimeout() необязательно вставлять в переменную, это нужно для того чтобы
// использовать такие переменные с разными задержками в нужное время
// А так же для того чтобы сбрасывать таймер при надобности ниже будет пример
// В данном случае в качестве аргумента у данного метода выступает уже объявленная функция

// clearInterval(timerId);
// Сбрасывваем таймер

function logger(text) {
    if (i === 3) {
        clearInterval(timerId);
    } else {
        console.log(text);
        i++;
    }

}



