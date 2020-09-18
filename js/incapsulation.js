'use strict';

// Создание инкапсуляции

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Iarovoi';

    // Сохраняя переменную внутри объекта мы не имеем к ней доступа, и поменять ее не можем

    say() {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }
    set age(num) {
        if (typeof num === 'number' && num > 0 && num < 110) {
            this._age = num;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User('Ivan', 27);
// console.log(ivan._age);
// ivan._age = 99;
// console.log(ivan._age);
console.log(ivan.surname);
ivan.say();