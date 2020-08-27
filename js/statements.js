'use strict';
// УСЛОВИЯ

if (1){  // Условие превращает любой тип данный в Boolean
  console.log('Ok');
} else {
  console.log('Error')
}

const num = 50;

// if (num < 49){
//   console.log('Error');
// } else if (num > 100) {
//   console.log('toomuch');
// } else {
//   console.log('Ok');
// }

switch (num) {  // Конструкция switch всегда работает со строгим сравнением! ! !
  case 49:
    console.log('Неверно');
    break;  // Обязательная синтаксическая конструкция
  case 100:
    console.log('Неверно');
    break;
  case 51:
    console.log('В точку');
    break;   
  default: // Условие при котором ни один case не будет верным
    console.log('Не в этот раз');
    break;            
}