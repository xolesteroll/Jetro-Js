'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // Создаем нвоый объект запроса
    // МЕтоды XMLHttpRequest запроса:
    // request.open(method, url, async, login, password); Метод GEt Или POSt 
    // url расчитывается относительно HTML файла
    // async по умолчанию true
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // Устнавливаем так называвемый header для запроса для того чтобы сервер понимал какие данные
    // он получает
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            console.log(request.response);
        } else {
            inputUsd.value = 'Что то пошло не так';
        }
    });

    // Свойства XMLHttpRequest запроса:
    // status - https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
    // statusText - ТЕкствое выражение status 
    // response - ответ от сервера
    // readyState - содержит текущее состояние нашего запроса (https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState)

    // События запроса 
    // 'readystatechange' - отслеживает изменение readyState статуса готовности нашего запроса в данынй момент
    // 'load' 


});