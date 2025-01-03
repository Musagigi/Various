//@ts-nocheck

// Task 1
// Допишите функцию callBack1 такую, что принимает элементы массива из map и возвращает их возведенные в 3 степень.
const ar1 = [4, 5, 6];
let res1;
let callBack1 = item => item ** 3; // вот
res1 = ar1.map(callBack1);

console.log(res1);


// Task 2
// Допишите анонимную стрелочную функцию внутри map такую, что принимает элементы массива из map 
// и возвращает их возведенные в 3 степень.
let res2;
res2 = ar1.map(item => item ** 3); // сюда в скобки дописываете стрелочную функцию

console.log(res2);


// Task 3.
// Допишите функцию callBack3 такую, что принимает элементы массива из filter 
// и возвращет true если это число.
const ar3 = [4, '5', 6, '12qwe'];
let res3;
let callBack3 = el => (typeof el === 'number')
res3 = ar3.filter(callBack3);
console.log(res3);


// Task 4
// Допишите анонимную стрелочную функцию внутри filter такую, 
// что принимает элементы массива из filter и возвращает true если это число.
let res4;
res4 = ar3.filter(el => (typeof el === 'number')); // сюда в скобки дописываете стрелочную функцию

console.log(res4);


// Task 5
// Напишите функцию callBack5 такую, что принимает элементы массива и 
// пушит их в res5 приведенные к toLowerCase().
const ar5 = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ'];
let res5 = [];
let callBack5 = el => (res5.push(el.toLowerCase()))

ar5.forEach(callBack5);
console.log(res5);


// Task 6
// Допишите анонимную стрелочную функцию внутри forEach такую, 
// что принимает элементы массива из forEach и пушит их в res6 приведенные к toLowerCase().
let res6 = [];
ar5.forEach(el => res6.push(el.toLowerCase())); // сюда в скобки дописываете стрелочную функцию

console.log(res6);


// Task 7
// Напишите функцию callBack7 такую, что принимает элементы массива ar7 и 
// возвращет true если они больше 10.
const ar7 = [5,7, 10, 20, 30, 60];
let res7;
let callBack7 = el => (el >= 10);

// if (...) {
//   return true
// }
// else
//   return false

// { расширенная версия
//     if (el >= 10) {
//         return true;
//     }
  
// }

res7 = ar7.every(callBack7);
console.log(res7);

// Task 8
// Допишите анонимную стрелочную функцию внутри every такую, 
// что принимает элементы массива ar7 из every и возвращет true если они больше 10.
const ar8 = [10, 20, 30, 60];
let res8;
res8 = ar8.every(el => el >= 10);// сюда в скобки дописываете стрелочную функцию

console.log(res8);

// Task 9
// Напишите функцию callBack9 такую, что принимает элементы массива ar9 и 
// возвращет true если тип данных элемента boolean.
const ar9 = [5, 7, false, 10, 20, 30, 60];
let res9;
let callBack9 = el => (typeof el === 'boolean');

res9 = ar9.some(callBack9);
console.log(res9);


// Task 10
// Допишите анонимную стрелочную функцию внутри some такую, 
// что принимает элементы массива ar9 из some и возвращет true если тип данных элемента boolean.
let res10;
res10 = ar9.some(el => typeof el === 'boolean'); // сюда в скобки дописываете стрелочную функцию

console.log(res10);