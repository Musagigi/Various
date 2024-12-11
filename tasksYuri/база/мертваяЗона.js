// let a = a + 1;

// console.log(a); 

// '------------------------------------2'
// function foo(a) {
    
//     if (a > 0) {
//       let a = a + 10
//       return a
//     }
//     return a
// }
// console.log(foo(15))

   
// '------------------------------------3';
// function say(a = b, b) { 
//     console.log(a, ' ', b);
// }
 
// say(undefined, 2);

// '------------------------------------4';
// console.log(
//     (function (a, b = () => a) {
//         var a;
//         var c = a;
//         a = 2;
//         return [a, c, b()];
//     })(1)
// ) 

// console.log('------------------------------------5');
// function baz(a) { 
//     a = 10;
//     return a;
//     let a = 2;
//     var a = 2 
// }

// let a = 1;
// baz(a)

// console.log('------------------------------------6');
// function giveMeX(showX) {
//     if(showX) {
//         let x = 5;
//     }
//     return x;
// }

// console.log(giveMeX(false)); 
// console.log(giveMeX(true)); 