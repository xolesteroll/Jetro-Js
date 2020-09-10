'use strict';
// Устаревший синтаксис
const num = new Number(3); // Не совсем корректный способ создание нового числа
console.log(num);

const fun = new Function(3);
console.log(fun);


// СТАНДАРТ ES5(то что проичсходит под капотом) В современном стандарте используются классы
function User(name, id){ // С помощью аткого синтаксиса мы делаем из функции конструктор и на ее основе можем
    // Сощлавать новых пользователей в данном случае
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() { // так же в качестве свойств в конструкторе мы можем использовать методы
        console.log(`Hello ${this.name}`);
    };

}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`); // Добавляем новый методе в наш прототип и 
    // этот метод появится у вех потомков данного прототипа
};

const ivan = new User('Ivan', 28); // Благодаря функции конструктору мы здесь получаем новые объекты
const alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello(); // вызываем методжы которые перешли по наследству от функции конструктора - прототипа
alex.hello();
alex.exit();

