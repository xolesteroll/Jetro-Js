














'use strict';

// НУЖНО ЧТО ТО СДЕЛАТЬ С ЦИФРАМИ В ИНПУТЕ
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function alphabetPosition(text) {

    function toObj() { // Функция для перехода от строки к массиву
        if (typeof (text) == 'string') {
            text = text.split('');
        }
        return (text);
    }
    function noNumber(letter) { // Функция для перебора элементов на соттветсвие
        // в последствии вызывается внутри метода filter, для конечного резульатат
        if (+letter > 0 && +letter <= 26) {
            return true;
        } else {
            return false;
        }
    }
    // Надо написать функцию чтобы отслеживала вводимые цифры и отсеивала их


    text.split('').forEach((item, num) => { // цикл для перебора введенной строки

        let smallLetter = (item + '').toLowerCase();
        alphabet.split('').forEach((symbol, i) => { // функция возвращается изменненный item

            if (symbol == smallLetter) {
                item = (i + 1).toString();

            } 

            return item;
        });

        toObj();
        text[num] = item;


    });
    text = text.filter(noNumber).join(' '); // Метод фильтр с функцией noNumber внутри
    
    console.log(text);
    return text;
}

alphabetPosition('The sunset sets at twelve o" clock.');


