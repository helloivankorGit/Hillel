// 1) Создайте объект coffeeMachine со свойством message: 
// ‘Your coffee is ready!’ и методом start(), при вызове 
// которого через 3 секунды в консоль выведется сообщение,
//  записанное в свойстве message.

// Начальный код:

let coffeeMachine = {
    message: 'Your coffee is ready',
    start: function() {

        setTimeout(() => {console.log(this.message + ' with arrow function!')}, 3000);

        setTimeout(function() {
            console.log(this.message  + ' with bind!')
        }.bind(this), 3000);

        setTimeout(function() {
            console.log(this.message)
        }.bind(teaPlease), 3000);

    },
}

// Создайте объект teaPlease со свойством message: 
// 'Wanna some tea instead of coffee?'. Обновите метод 
// start() контекст так, чтобы он выводил сообщение с нового 
// объекта.

let teaPlease = {
    message: 'Wanna some tea instead of coffee?'
}

// Результат:
coffeeMachine.start(); // 'Your coffee is ready'


// 2) Напишите функцию concatStr(), которая соединяет две строки, 
// разделенные каким-то символом: разделитель и строки передаются 
// в параметрах функции. Используя привязку аргументов 
// с помощью bind, создайте новую функцию hello(), которая 
// выводит приветствие тому, кто передан в ее параметре:

function concatStr(first, symbol, second) {
    return first + symbol + second;
}

let hello = concatStr.bind(null, 'Hello ', '');

let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'
console.log(checkConcat);
let finalResult = hello('John') // 'Hello John'
console.log(finalResult);

// 3) Напишите функцию showNumbers(), которая последовательно 
// выводит в консоль числа в заданном диапазоне, с заданным 
// интервалом (все данные должны передаваться как 
// параметры функции).

// tips: для реализации используйте функцию setInterval()

function showNumbers(start, end, interval) {
    return console.log(setInterval(() => {
    }, interval));
}
showNumbers(5, 10, 500); // 5 6 7 8 9 10
