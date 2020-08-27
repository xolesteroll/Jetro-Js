'use strict';
alert('hello');

const result = confirm("ТЫ петух?");

const answer = prompt("Вам есть что расчехлить по водному??", "");

console.log(answer);

console.log(result);
console.log(typeof(answer)); 

const answers = [];    // пустой массив

answers[0] = prompt('Как ваше ничегО??', '');
answers[1] = prompt('Не подахуели ли??', '');
answers[2] = prompt('Может быть чаю с малинавым варением??', '');

document.write(answers); // хуета старая

console.log(typeof(answers)); // объект !! 

// Вся информация, которую мы получаем от пользователя, приходит к нам в виде строки, независимо от того как именно мы ее получили!!!!!!!!!!!!!!!!!!!!!!
