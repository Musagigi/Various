// var a = 1;
// var b = 2;

// (function() {
//     var b = 3;
//     a += b;
// })();

// console.log(a);  
// console.log(b);

'------------------------------------2'
// console.log(x) 

// var x = 1;

// console.log(x); 

// function car() {
//     if(false) {
//         var x = 2;
//     }
//     console.log(x); 
// }

// car()
// console.log(x); 

'------------------------------------3'
// function getClosure() {
//     var canYouSeeMe = "here I am";
//     return (function theClosure() {
//         return {canYouSeeIt: canYouSeeMe ? "yes!" : "no"};
//     });
// }

// var closure = getClosure();
// console.log(closure().canYouSeeIt);


'------------------------------------4'
// var a = {};

// (function b(a) {
// 	a.a = 10
// 	a = null
// })()

// console.log(a);
'------------------------------------5'

// let value = 100;
// function worker() {
//  value = 10;
//  console.log(value);
//  return; 
//  function value() {}
// }
// worker(); 
// console.log(value);