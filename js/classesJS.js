'use strict';

// Классы в JS - это красивая обертка функций конструкторов

// Принципы объектно ориентированного программирования: 
// 1) Абстракция - когда мы отделяем концепцию от ее экземпляра
// 2) Наследование - способность нашего объекта или класс базироваться на другом объекте или классе

class Rectangle { // Название класса всегда пишется с заглавной буквы
    constructor(height, width) { // В круглых скобках конструктора мы записываем аргументы которые будутп риходить
        this.height = height;
        this.width = width;

    }

    calcArea() {
        return this.height * this.width;
    }
}
// НАследование классов
class ColoredRectangleWithText extends Rectangle{ // в данном случае новый класс наследует все свойства старого
    constructor(height, width, text, bgColor) {
        super(height, width); // Передает  свойства из конструктора прототипного класса
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){ 
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

console.log(div.calcArea());
div.showMyProps();

// const square = new Rectangle(10, 10);
// const long = new Rectangle(40, 10);

// console.log(square.calcArea());
// console.log(long.calcArea());


