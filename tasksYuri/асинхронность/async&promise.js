// /////////////////////Задачи на .then
// Promise.reject(1)
// 	// skip
// 	// обработать reject можно только в .catch
// 	.then(data => {
// 		console.log(data);
// 	})
// 	// второй аргумент .then вместо .catch
// 	.then(null, data => console.log(data)) // => 1
// 	// после обработки ошибки попадаем в .then
// 	// => "ok"
// 	.then(() => console.log('ok'));

// Promise.reject("Api Error")
// 	// skip из-за Promise.reject
// 	.then(data => console.log('ok'))
// 	// обработка ошибки
// 	.catch(error => {
// 		console.log(error); // => "Api Error"
// 		return "1";
// 	})
// 	// catch вернул "1"
// 	.then(data => {
// 		console.log(data); // => "1"
// 	})

// Promise.resolve()
// 	.then(data => {
// 		// возникновение ошибки
// 		throw new Error('Api Error');
// 		// не имеет значения, что вернули
// 		return 1;
// 	})
// 	// skip, потому что предыдущий .then бросил ошибку
// 	.then(data => console.log('ok'))
// 	// обработка ошибки
// 	.catch(error => {
// 		console.log(error.message); // => "Api Error"
// 		return "2";
// 	})
// 	// .catch вернул "2"
// 	.then(data => {
// 		console.log(data); // => "2"
// 	})

// Promise.resolve()
// 	// Необработанная ошибка в Promise не влияет на работу программы,
// 	// т.к. Promise не выпускает ошибку за свои пределы.
// 	.then(() => {
// 		throw new Error('Api Error');
// 	})
// // код будет работать
// setTimeout(() => {
// 	console.log('setTimeout'); // => "setTimeout"
// }, 1000);


// /////////////////////Задачи на .catch
// Promise.reject("Api Error")
// 	// skip: ошибку не обработали
// 	.catch(null)
// 	// skip из-за необработанной ошибки
// 	.then(data => console.log('ok'))
// 	// обработка ошибки
// 	.catch(error => console.log(error)) // => "Api Error"
// 	// .then выполнится
// 	.then(data => console.log('ok')) // => "ok"

///////////////Задачи на несколько Promise
// // Если несколько Promise, то ".then" будет выполняться последовательно 
// // для каждого:
// Promise.resolve()
// 	.then(() => console.log(1))  // "Первый"
// 	.then(() => console.log(2))  // "Третий"

// Promise.resolve()
// 	.then(() => console.log(11)) // "Второй"
// 	.then(() => console.log(12)) // "Четвертый"


// // При ".catch" аналогично:
// Promise.resolve()
// 	.then(() => console.log(1))                          // "Первый"
// 	.then(() => { console.log(2); throw new Error(); })  // "Третий"
// 	.catch(() => console.log(3))                         // "Пятый"
// 	.then(() => console.log(4))                          // "Седьмой"

// Promise.resolve()
// 	.then(() => console.log(11))                         // "Второй"
// 	.then(() => { console.log(12); throw new Error(); }) // "Четвертый"
// 	.catch(() => console.log(13))                        // "Шестой"
// 	.then(() => console.log(14))                         // "Восьмой

// // Задача на бесконечные микротаски
// // В качестве бонуса покажу, как повесить браузер микротасками, 
// // которыми являются 
// const foo = () =>  {
//     Promise.resolve().then(() => foo())
// }

// foo();

// Promise.resolve()
//     .then(() => {
//       return "1";
//     })
//     // .then вернул "1", но .finally пропустит его мимо себя
//     .finally(data => { 
//       console.log(data); // => "undefined"
//       return "2";
//     })
//     // из .finally вернули "2", 
// 		// но результат берется из предыдущего .then или .catch
//     .then(data => console.log(data)) // => "1"


// Promise.reject()
// 	// .finally выполняется в любом случае: даже при возникновении ошибки
// 	.finally(data => {
// 		console.log('finally'); // => "finally"
// 	})

// Promise
//     .reject('a')  
//     .catch(p => p + 'b') 
//     .catch(p => p + 'с') 
//     .then(p => p + 'd') 
//     .finally(p => p + 'e') 
//     .then(p => console.log(p))

// '------------------------------------1'
// Promise.reject('a') 
//     .then(p=>p+'1',p=>p+'2') 
//     .catch(p=>p+'b') 
//     .catch(p=>p+'с') 
//     .then(p=>p+'d1') 
//     .then('d2') 
//     .then(p=>p+'d3') 
//     .finally(p=>p+'e') 
//     .then(p=>console.log(p))
// '------------------------------------2'
// const prom = new Promise((resolve,reject) =>{
//     resolve(10);
//     reject(20)
// })

// prom
// .then((value)=>console.log('then',value)) 
// .catch((value)=>console.log('catch',value))
// '------------------------------------3' 
// const p1 = new Promise((res)=>setTimeout(()=>res(10),3000))
// const p2 = new Promise((res)=>setTimeout(()=>res(20),1000))

// const prom = Promise.all([p1,p2])

// prom
//     .then((value)=>console.log('then',value)) 
//     .catch((value)=>console.log('catch',value))
// '------------------------------------4'
// Promise.reject(1)
//   .then(() => {}, undefined)
//   .then((res) => {
//     console.log('then s', res);
//   }, (res) => {
//     console.log('then f', res); 
//   })
//   .catch((res) => {
//     console.log('catch', res);
//   })
// '------------------------------------5'
// Promise.resolve(1)
// .then(()=>{console.log(2)}) 
// .then(console.log(3)) 
// .then(()=>{console.log(4)})

// '------------------------------------6'
// Promise.resolve(1)
// .then(()=>{console.log(2)})
// .then(console.log)
// .then(()=>{console.log(4)})

// '------------------------------------7'
// function a() {
//     console.log('1')
//     Promise.resolve().then(a)
// }

// function b() {
//     console.log('2')
//     setTimeout(b);
// }

// a()
// b()
// 1, 2, 11111111111111111111 - рекурсия пойдет
// '------------------------------------8'
// Promise
//   .resolve()
//   .then(() => {console.log('a1')})
//   .then(() => {console.log('a2')})
//   .then(() => {console.log('a3')});

// Promise
//   .resolve()
//   .then(() => {console.log('b1')})
//   .then(() => {console.log('b2')})
//   .then(() => {console.log('b3')});


// '------------------------------------9'
// Promise.reject('start')
//     .finally(val => {
//         console.log('f1', val);
//         return 'one';
//     })
//     .catch(val => {
//         console.log('c2', val);
//         return 'two';
//     })
//     .finally(val => {
//         console.log('f3', val);
//         return 'three';
//     })
//     .then(val => {
//         console.log('f4', val);
//         return 'four';
//     })
//     .finally(val => {
//         console.log('f5', val);
//         return 'five';
//     })
//     .then(val => console.log('result', val));


// '------------------------------------10'
// const promise = new Promise(reject => reject(2));
// promise
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .catch((v) => {
//         console.log(v);
//         return v;
//     })
//     .finally(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//     });

// '------------------------------------11'
// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//         console.log('3');
//     });
// }

// console.log('1');
// let promise = job();
// console.log('2');

// promise
//     .then(function() {
//         console.log('Success 1');
//     })
//     .then(function() {
//         console.log('Success 2');
//     })
//     .then(function() {
//         console.log('Success 3');
//     })
//     .catch(function() {
//         console.log('Error 1');
//     })
//     .then(function() {
//         console.log('Success 4');
//     });

// '------------------------------------12'
// Promise.resolve()
//   .then(() => console.log("a:1"))
//   .then(() => {
//       setTimeout(() => console.log('timeout1'))
//       console.log('a:2')
//   })
//   .then(() => {
//       setTimeout(() => console.log('timeout2'))
//       console.log('a:3')
//   })

// new Promise((res, rej) => {
//     console.log('b');
//     res(new Error("123"))
// })
//   .then(console.log("b1"))
//   .then(
//       () => console.log('b:2'),
//       () => {console.log('b: reject')}
//       )
//   .catch(() => console.log("b:3"))
//   .then(() =>  console.log('b:4'))

// '------------------------------------13'
// console.log(1);
// const promise = new Promise((resolve) => {
//     console.log(3);
//     setTimeout(() => console.log(2), 1000);
//     throw new Error('Упс...');
//     resolve();
// });
// promise.then(() => console.log(4));
// promise.catch(() => console.log(5));
// setTimeout(() => console.log(6), 2);


// '------------------------------------14'
// /// Проваливание в промисах
// setTimeout(() => console.log('a'));

// Promise.resolve()
//   .then((first) => {
//     console.log('first', first);
//     return 'b';
//   })
//   .then(
//     Promise.resolve().then((second) => {
//       console.log('second', second);
//       return 'c';
//     })
//   )
//   .then((third) => console.log('third', third));


// '------------------------------------15'
// /// Промисы и асик\авэйт
// const myPromise = Promise.resolve(Promise.resolve('Promise!'));

// function funcOne() {
//     myPromise.then(res => res).then(res => console.log(res, 'Результат funcOne'));
//     setTimeout(() => console.log('Timeout! 1', 0));
//     console.log('Last line! 1');
// }

// async function funcTwo() {
//     const res = await myPromise;
//     console.log(res, 'Результат funcTwo');
//     setTimeout(() => console.log('Timeout! 2', 0));
//     console.log('Last line! 2');
// }

// funcOne();
// funcTwo();

// '------------------------------------16'
// const foo = async () => {
//     console.log('1');
//     return 100;
//   }
  
// const bar = async () => {
//     console.log('2');
//     const r = await foo();
//     console.log(r);
//     foo().then(res => console.log(res));
//     await console.log('3');
//     console.log(await '4');
// };
  
// bar();


// '------------------------------------17'
// /// async / await
// async function a(p) {
//     return p;
// }

// console.log('1');

// (async function() {
//     console.log('f1');
//     console.log(await a('a1'));
//     console.log('f2');
//     console.log(await a('a2'));
//     console.log('f3');
// })();

// console.log('2');



// '------------------------------------18'
// const checkPromise = async () => {
//     console.log(1);

//     setTimeout(() => console.log(3));

//     Promise.resolve().then(() => {
//         console.log(2);
//     });

//     await Promise.resolve(); // Promise { undefined }, просто пропустится
//     console.log(4);

//     console.log(5);
// };

// checkPromise();



// '------------------------------------19'
// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, '111'))
// const promise2 = new Promise((resolve) => setTimeout(resolve, 300, '222'))
// const promise3 = new Promise((resolve) => setTimeout(resolve, 700, '333'))
// const promise4 = new Promise((resolve, reject) => setTimeout(reject, 400, '444'))


// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2]);
//     const res2  = await Promise.all([promise3, promise4]); 
//     return [res1, res2]
// }

// runPromises()
//     .then(res => console.log(res)) 
//     .catch(err => console.log('Catch:', err))  


// '------------------------------------20'
// console.log('start')

// const fn = async() => {
//     console.log('async 1')

//     await new Promise((res) => {
//         res()
//         console.log('new promise')
//     }).then(() => console.log('promise then'));

//     console.log('async 2')
// }

// fn()

// console.log('end')


// '------------------------------------21'
// const fn = async () => {
//     const ks = await Promise
//         .resolve(3)
//         .then((v) => {
//             console.log('await')
//         })
//     console.log('async');
//     return 1
// }


// const value = fn()
// console.log('sync')

// value
//     .then((v) => { 
//         return v + 1
//     })
//     .then(console.log)
//     .then(() =>3) 

// value
//     .finally((x = 0) => console.log(x + ' finally'))

// value
//     .then(console.log) 



// '------------------------------------22'
// Promise.resolve(1)
//     .then((val) => {
//         console.log(val); 
//         return val + 1;
//     })
//     .then((val) => {
//         console.log(val); 
//     })
//     .then((val) => {
//         console.log(val); 
//         return Promise.resolve(3).then((val) => {
//             console.log(val); 
//         });
//     })
//     .then((val) => {
//         console.log(val); 
//         return Promise.reject(4);
//     })
//     .catch((val) => {
//         console.log(val);
//     })
//     .finally((val) => {
//         console.log(val); 
//         return 10;
//     })
//     .then((val) => {
//         console.log(val);
//     });



// '------------------------------------23'
// (async () => {
//     await Promise.all([]).then(
//         (value) => {
//             console.log(value); 
//         },
//         (error) => {
//             console.log(error);
//         }
//     );

//     await Promise.all([1, 2, Promise.resolve(3), Promise.resolve(4)]).then(
//         (value) => {
//             console.log(value); 
//         },
//         (error) => {
//             console.log(error);
//         }
//     );

//     await Promise.all([1, 2, Promise.resolve(3), Promise.reject("error")]).then(
//         (value) => {
//             console.log(value);
//         },
//         (error) => {
//             console.log(error); 
//         }
//     );
// })();



// '------------------------------------24'
// setTimeout(() => console.log('setTimeout'), 0)

// async function bar() { 
//   console.log(10)
//   await '' 
//   console.log(20)
//   return 30
// }

// async function foo() { 
//   console.log(40)
//   bar()
//   const datal = await 'other'
//   console.log(datal)
//   await 50
//   const data2 = await bar() 
//   console.log(data2)
// }

// foo();
// console.log(60); 

// '------------------------------------25'
// console.log(1);
// ['x', 'y'].forEach(async (e) => {
//     console.log(await e);
// })
// console.log(2);

// '------------------------------------26'
// console.log([1, 2, 3].filter(async (e) => e > 2)) 
// console.log([1, 2, 3].map(async (e) => e * 2)) 

// '------------------------------------27'
// const numbers = [4, 8, 15];

// const result = numbers.reduce(async (acc, curr) => {
//     return await acc + curr;
// }, 0);

// result.then((result) => {
//     console.log(result); // "[object Promise]15" - как исправить? await перед acc + curr
// })

// '------------------------------------28'
// console.log("start");

// async function foo() {
//     console.log("1");
//     await console.log("2");
//     console.log("3");
// }

// foo();

// console.log("end");

// '------------------------------------29'
// async function a() {
//     console.log('a');
// }

// console.log('1');

// (async function() {
//     console.log('f1');
//     await a();
//     console.log('f2');
// })();

// console.log('2');

// '------------------------------------30'
// setTimeout(() => {
//     console.log('1')
// }, 50);
// setTimeout(() => {
//     console.log('2')
// }, 150);
// setTimeout(() => {
//     console.log('3')
// }, 250);
  
  
// console.log('в момент выполнения этой строки: сколько МАКРОзадач в очереди?') 

// /// проваливание и параллельные цепочки '------------------------------------31'
// Promise.resolve(1)
//   .then(()=>{console.log('2.1')})
//   .then(console.log(3))
//   .then(()=>{console.log('4.1')})


// Promise.resolve(1)
// .then(()=>{console.log('2.2')})
// .then(console.log)
// .then(()=>{console.log('4.2')})

// '------------------------------------32'
// console.log("1");
// const p = new Promise((resolve, reject) => {
//     console.log("2");
//     if (true) resolve('name 1');
// })

// setTimeout(() => console.log("3"), 2000);

// p.then(name => {
//     console.log(name);
//     setTimeout(() => console.log(name + '.2'), 500);
// })

// console.log("5");

// '------------------------------------33'
// console.log(1)

// setTimeout(() => {
//     console.log(2)
// })

// Promise.resolve().then(() => console.log('micro'))
// Promise.resolve().then(() => console.log('micro1'))
// Promise.resolve().then(() => console.log('micro2'))

// const p = new Promise((res) => {
//     console.log(3)
//     setTimeout(() => {
//         console.log(4);
//         res();
//     })
// })

// setTimeout(() => {
//     console.log(5);
// })

// p.then(() => {
//     console.log(6);
// }).then(() => {
//     console.log(7);
// })

// console.log(8);

// '------------------------------------34'
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// '------------------------------------35'
// (function ( ) {
//     console.log('this is the start');

//     Promise.resolve(console.log('promise 1'));

//     setTimeout(function cb1() { console.log('timeout 0'); }, 2000);

//     setTimeout(function cb() { console.log('timeout 1'); });

//     console.log('this is just a message');

//     setTimeout(function cbl() { console.log('timeout 2'); }, 0);

//     new Promise((res, rj) => res('promise 2')).then(console.log);

//     console.log('this is the end?');
// })();

// '------------------------------------36'
// setTimeout(()=>console.log('st1'),1000);

// Promise.resolve()
//     .then(()=>console.log('p1'))
//     .then(()=>console.log('p2'))
//     .catch(()=>console.log('catch'))
    
// setTimeout(()=>console.log('st2'),0)

// console.log('log')

// '------------------------------------37'
// const doSmth = () => new Promise(resolve=>{
//     setTimeout(()=>resolve(10),1000)
// })

// const doSmthElse = () => new Promise(resolve=>{
//     setTimeout(()=>resolve(20),2000)
// })

// const finalHandler = value =>{
//     console.log(value)
// }

// doSmth()
//     .then(value=>{
//         console.log(value);
//         doSmthElse()
//     })
//     .then(finalHandler)

// '------------------------------------38'
// setTimeout(()=>console.log('set'),0)

// async function foo() {
//     console.log('some')
//     let data = await Promise.resolve(10)
//     console.log(data)
// }

// foo()

// console.log(20)

// '------------------------------------39'
// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// '------------------------------------40'
// queueMicrotask(() => {
//     console.log('1');
// });
 
// Promise.reject('2')
//      .catch((res1) => {
//          console.log('res1', res1);
//          return '4';
//      })
//      .then((res2) => {
//          console.log('res2', res2);
//      })
 
// queueMicrotask(() => {
//      console.log('3');
// });

// '------------------------------------41'
// function x() {
//     console.log('прыг!');
//     setTimeout(x, 5);
// }

// setTimeout(x, 5);

// setInterval(() => {
//     console.log('прыг!');
// }, 5);

// // рекурсивный прыг!


// если в then передать не функцию или коллбек, то все внутри него отработает синхронно
// называется Проваливание промисов
// console.log(4)
// Promise.resolve().then(console.log(3)) 
// setTimeout(() => console.log(6))
// console.log(2)
// setTimeout(() => console.log(5), 0)


// async function f() {

// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("готово!"), 1000)
// 	});

// 	let result = await promise; 

//   // через 1 секунду покажет "готово!" из-за await (который ждет результат выполнения promise)
// 	console.log(result); 

//   // а так можно было бы выести через promise.then(console.log)
// }
// f();


// Promise
// 	.resolve()
// 	.then(() => { console.log('a1') })
// 	.then(() => { console.log('a2') })
// 	.then(() => { console.log('a3') });

// Promise
// 	.resolve()
// 	.then(() => { console.log('b1') })
// 	.then(() => { console.log('b2') })
// 	.then(() => { console.log('b3') });


// Promise.resolve(1)
// 	.then(() => { console.log('2.1') }) //m1
// 	.then(console.log(3)) //m3 //https://habr.com/ru/companies/vk/articles/269465/
// 	.then(() => { console.log('4.1') })//m5

// Promise.resolve(1)
// 	.then(() => {
// 		console.log('2.2')
// 	}) //m2
// 	.then(console.log) //m4
// 	.then(() => { console.log('4.2') })//m6

// // M_a1  M_b1   M_a2   M_b2   M_a3    M_b3
// //  |_____|______|      |     |         |
// //        |______|______|     |         | 
// //               |______|_____|         |
// //                      |_______________|


// async function a(p) {
// 	return p;
// }
// console.log('1');
// (async function() {
//     console.log('f1');
//     console.log(await a('a1'));
//     console.log('f2');
//     console.log(await a('a2'));
//     console.log('f3');
// })();
// console.log('2');

// (function() {
// 	console.log('f1');
// 	a('a1').then((res) => {
// 		console.log(res);
// 		console.log('f2');
// 		a('a2').then((res) => {
// 			console.log(res);
// 			console.log('f3');  
// 		})
// 	})  
// })();
// console.log('2');