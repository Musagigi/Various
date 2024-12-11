// function foo() {
//     console.log('d2.1', d2); 
//     let d1 = '1';
//     return function() {
//         console.log('d1', d1); 
//         console.log('d2.2', d2);
//     }
// }
// const d2 = '2';
// const x = foo();
// x();

'------------------------------------2'
// var globalVar = 'global';
// var outerVar = 'outer';

// function outerFunc(outerParam) {
//     function innerFunc(innerParam) {
//         console.log(globalVar, outerParam, innerParam);
//     }
//     return innerFunc;
// }

// const x = outerFunc(outerVar);
// outerVar = 'outer-2';
// globalVar = 'guess';
// x('inner'); 

// const x2 = outerFunc(outerVar);
// x2('innnnner')

'------------------------------------3'
// let group = getGroup();

// group[0](); 
// group[5](); 

// function getGroup() {
//   let students = [];
//   let i = 0;
//   while (i < 10) {
//     // const innerI = i 
//     students[i] = function() {
//       // console.log(innerI);
//     console.log(i)
//     }
//     i++
//   }

//   return students;
// }

'------------------------------------4'
// const [increment, log] = createIncrement();
// increment() 
// increment() 
// increment() 
// log() 

// function createIncrement() {
//     let value = 0
    
//     function increment(){
//         value += 1;
//         console.log(value)
//     }

//     const message = `Current value is ${value}`
    
//     function log(){
//         console.log(message)
//     }
         
//     return [increment, log];
// }

'------------------------------------5'
// применив замыкание решить задачу

// function x() {
//     // let val = 0

//     // return () => {
//     //     console.log(val += 1);
//     // }
// }

// const func = x();


// func();
// func();
// func();
// func();