'use strict';
// Создаем нвоый объект Даты

const now = new Date(2020, 8, 9, 20); // Время считается по гринвичу, тоесть я тут указал 20 часов а по гринвичу это -3 тоесть 17
// Так же месяцы ут считаются с 0 , поэтому чтобы получить девятый месяц мне нужно указать 8. Отсчет времени вобще идет в миллисекундах 
// И начинается с 1970 года

console.log(now);


const beginning = new Date(0); // 1970-01-01T00:00:00.000Z - начало отсчета времени в JAVASCRIPT 
// Для того чтобы получить дату раньше начала отсчета мы можем использовать отрицательные значения милисекунд

console.log(beginning);

// Получение отдельных значений даты (год, месяц, и тд по отдельности)

const getDate = new Date();

// Методы геттеры
console.log(typeof(getDate.getFullYear()));  // Год
console.log(getDate.getMonth()); // Месяц всегда минус 1 потомук что отсчет идет от 0
console.log(getDate.getDate()); // дата
console.log(getDate.getDay()); // день недели нумерация начинается с воскресенья , отсчет идет с нуля
console.log(getDate.getHours()); // время (час)
console.log(typeof(getDate.getMinutes())); // минута
console.log(getDate.getSeconds()); // секунды
console.log(getDate.getMilliseconds()); // милисекунды
console.log(getDate.getUTCHours()); // Аналог для всех этих методов для получения времени в UTC формате

console.log(getDate.getTimezoneOffset()); // показывает разницу в минутах между местным часовым поясом и UTС
console.log(getDate.getTime()); // Показывает количество милисекунд от начала отсчета (1970 года)

// Методы сеттеры - те же методы только с приставкой set

const date = new Date();

console.log(date.setHours(18));
console.log(date); // получаем не 18 а 15 потому что консоль в vscode ориентируется на UTC время, но если эотт скрипт запустится
// в браузере то он покажет 18, потмоу что он ориентируется на время у меня на компе


// Сверяем время начала и конца обработки цикла
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`); 




