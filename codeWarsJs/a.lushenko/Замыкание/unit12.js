// @ts-nocheck
// Task 1
// Напишите анонимную функцию применяя замыкание. 
// Внутри функции создайте переменную равную 75, и повесьте на кнопку .b-1 событие клик и функцию, 
// которая увеличивает переменную на 1 и присваивает блоку .out-1 ширину равную переменной + 'px'. 
// Анонимная функция замыкание должна запускаться при загрузке файла.
(function () {
    let w = 75; // тут ваша переменная
    let element = document.querySelector('.out-1');
    document.querySelector('.b-1').onclick = function () {
        w++;
        element.style.width = w + 'px';
    };
})();


// Task 2
// Усложним предыдущую задачу. Создайте анонимную функцию замыкание, 
// в которой создайте переменные w = 75 и h = 30. Создайте две функции, '
// одна запускается при клике на кнопку .b-2-1 и увеличивает ширину блока .out-2, 
// вторая запускается при клике на кнопку .b-2-2 и увеличивает высоту блока .out-2. 
// Анонимная функция замыкание должна запускаться при загрузке файла.
(function () {
    let w = 75;
    let h = 30;
    let sizeElement = document.querySelector('.out-2');
    document.querySelector('.b-2-1').onclick = () => {
        w++;
        sizeElement.style.width = w + 'px';
    };
    document.querySelector('.b-2-2').onclick = () => {
        h++;
        sizeElement.style.height = h + 'px';
    };
})();


// Task 3.
// В скобках напишите код функции замыкания, которая создает переменную count = 0 и 
// возвращает анонимную функцию, которая в свою очередь увеличивает count на 1 и возвращает его.
let count3 = (function () {
    let count = 0;
    return () => count++;
})();
console.log(count3());
console.log(count3());
console.log(count3());


// Task 4
// Напишите функцию замыкание createCount. Внутри функции создайте count равный переданному в createCount аргументу 
// ( по умолчанию равен 0) и сделайте return функции, которая увеличивает count на 1 и возвращает его. 
function createCount(innerCount = 0) {
    return () => innerCount++;
};

let count4 = createCount(444);

console.log(count4());
console.log(count4());


// Task 5
// Напишите функцию замыкание generatePassword, которая принимает аргумент - массив символов, и содержит в себе две функции. 
// Первая функция randomInteger(min, max) возрвщает случайное целое число в диапазоне, а вторую функцию возвращает (делает return).
// Данная функция, которую возвращают должна возвращать случайный символ из массива 
// переданного функции generatePassword в качестве аргумента. 
function generatePassword(arr) {
    let lengArr = arr.length;

    let randomInteger = (min = 0, max = lengArr) => Math.floor((max - min) * Math.random() + min);
    let getRandomElement = () => arr[randomInteger()];
    return getRandomElement;
}

let password = generatePassword(['b', 'y', 'Y', 'b', 'z']);
console.log(password());
console.log(password());


// Task 6
// Напишите функцию замыкание generatePassword2, которая принимает два аргумента - массив символов (arr), и длину пароля(n). 
// Функция  содержит в себе две функции. Первая функция randomInteger(min, max) , а вторую функцию возвращает (делает return). 
// Данная функция, которую возвращают должна возвращать строку длинной n из символов массива arr. 
// Символы выбираются случайным образом. 
function generatePassword2(arr, n) {
    let lengArr = arr.length;

    let randomInteger = (min = 0, max = lengArr) => Math.floor((max - min) * Math.random() + min);
    let getRandomElement = () => {
        let randArr = '';
        for (let i = n; i--;) {
            // for (let i = 0; i < n; i++) {
            randArr += arr[randomInteger()];
        }
        return randArr;
    };
    return getRandomElement;
}

let password2 = generatePassword2(['b', 'y', 'Y', 'b', 'z'], 10);
console.log(password2());
console.log(password2());


// Task 7
// Напишите функцию замыкание createElement, которая принимает 2 аргумента, первый название тега (elem),
// второй текст в теге (text). Функция createElement должна возвращать функцию, 
// которая через createElement создает elem и через innerHTML добавляет в него текст. 
// Созданный тег должен быть возвращен. 
function generateElement(elem, text) {

    return () => {
        const $tagName = document.createElement(elem);
        $tagName.innerHTML = text;
        return $tagName;
    };
}

let divCreator = generateElement('div', 'hello');
let spanCreator = generateElement('span', 'hi');
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(spanCreator());
document.querySelector('.out-7').append(spanCreator());


// Task 8
// Напишите функцию замыкание createElement2, которая принимает 1 аргумент -  название тега (elem). 
// Функция createElement2 должна возвращать функцию, которая через createElement создает elem и 
// через innerHTML добавляет в него текст переданный в данную функцию как аргумент text. 
// Созданный тег должен быть возвращен. 
function generateElement2(elem) {

    return (text) => {
        const $tagName2 = generateElement(elem, text);
        return $tagName2();
    };
}

let divCreator2 = generateElement2('div');
let spanCreator2 = generateElement2('span');
document.querySelector('.out-8').append(divCreator2('ex1'));
document.querySelector('.out-8').append(divCreator2('ex2'));
document.querySelector('.out-8').append(spanCreator2('ex3'));
document.querySelector('.out-8').append(spanCreator2('ex4'));


// Task 9
// Напишите функцию замыкание generateDay, внутри которой создан массив days с именами дней недели и 
// return анонимной функции, которая получает аргумент n и возвращает days[n-1] день недели. 
function generateDay() {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    return (n) => (days[n - 1]);
}

const day = generateDay();
console.log(day(2));
console.log(day(3));



// Task 10
// Напишите функцию замыкание generateMonth, внутри которой создан массив month с именами месяцев и 
// return анонимной функции, которая получает аргумент n и возвращает month[n-1]. 
function generateMonth() {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return (n) => (month[n - 1]);
}
const month = generateMonth();
console.log(month(2));
console.log(month(3));