// var i = 1;
// var b = {};

// (function(){
//     i++;
//     b.j = 1;
// })();
// console.log(i, b); 

// (function(i, b) {
//     i++;
//     b.k = 1;
// })(i, b);
// console.log(i, b); 

// console.log('------------------------------------2');
// fill() - МУТИРУЕТ МАССИВ
// Метод fill() заполняет все элементы массива от начального 
//              до конечного индексов одним значением.
// const array1 = [1, 2, 3, 4];
// Заполните значением 0 от позиции 2 до позиции 4
// console.log(array1.fill(0, 2, 4)); - [1, 2, 0, 0]

// Заполните значением 5 от позиции 1
// console.log(array1.fill(5, 1)); - [1, 5, 5, 5] 

// console.log(array1.fill(6)); - [6, 6, 6, 6]

// Объекты заполняются по ссылке. Такая вот ФФФишка СМОТРИ
// var arr = Array(3).fill({}) // [{}, {}, {}];
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// const test = new Array(3).fill([0,0,0]) 
// test = [[0,0,0], [0,0,0], [0,0,0]]
// Объекты заполняются по ссылке. Такая вот ФФФишка СМОТРИ
// test[1][0] = 1
// console.log(test) // [[1,0,0], [1,0,0], [1,0,0]]

// console.log('------------------------------------3');
// let aa = { a: "a" };
// let bb = aa;

// bb = { b: "b" };

// const foo = function(c) {
//     c = { c: "c" };
// };

// foo(bb);

// console.log(aa); 
// console.log(bb); 

// console.log('------------------------------------4');
// let foo2 = {
//     bar: 1,
// }
// const baz2 = foo2;
  
// foo2.bar = 2
  
// foo2 = {
//     bar: 3
// }
  
// console.log (baz2.bar);  
  

// console.log('------------------------------------5');
// var a2 = {};
// function clear(a2) {
//     a2.b = 2;
//     a2 = null;
// }
// clear(a2);

// console.log(a2); 
// console.log(a2.b); 