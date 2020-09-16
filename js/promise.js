'use strict';

// console.log('Запрос даных...');

// const req = new Promise(function(resolve, reject) { // Содаем новый promise
//     setTimeout(() => { 
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
    
//         // setTimeout(() => {
//         //     product.status = 'order';
//         //     console.log(product);
//         // }, 2000);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
//     // setTimeout(() => {
//     //     product.status = 'order';
//     //     console.log(product);
//     // }, 2000);
// }).then(data => {
//     data.modify = true;
//     return data;
    
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ОШибка')
// }).finally(() => {
//     console.log('finnaly')
// });

// setTimeout(() => { // Такое дерево колл бееков прийдется создавать если нет promise но слава богу что они есть поэтому мы используем их
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

    // setTimeout(() => {
    //     product.status = 'order';
    //     console.log(product);
    // }, 2000);
// }, 2000);

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(2000).then(() => console.log('2000 ms'));
// test(3000).then(() => console.log('3000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});

