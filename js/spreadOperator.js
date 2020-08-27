'use strict';
// SPREAD ОПЕРАТОР

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const numm = [2, 5, 7];

log(...numm);

const arrray = ["a", "b"]

const newArrray = [...arrray]; // Независимая поверхностная копия массива с помощью SPREAD оператора

newArrray[1] = "нахиди";

console.log(arrray);
console.log(newArrray);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; // Независимая поверхностная копия объекта с помощью SPREAD оператора

newQ.one = 23231;

console.log(q);
console.log(newQ);