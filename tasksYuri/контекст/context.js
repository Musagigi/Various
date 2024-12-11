// let foo = {
//     x: 42,
//     baz: function() {
//       console.log(this.x);
//     },
//     bar: () => {
//       console.log(this.x);
//     }
// }
// foo.baz();
// let bar = foo.baz;

// bar();
// foo.bar();


'------------------------------------2'
// const obj = {
//     a: 1,
//     e: (function () {
//         return () => {
//             console.log(this.a);
//         };
//     })(),
// };

// obj.e();
// obj.e.call({ a: 2 }); 

'------------------------------------3'
// this.y = 5;
// const a = () => {
//   console.log(this.y)
// }

// function x(func) {
//   this.y = 10;
//   func();
// }

// x(a);

'------------------------------------4'
// const obj = {
//     child: {
//         i: 10,
//         b: () => console.log(this.i, this),
//         c () {
//           console.log(this.i, this);
//         },
//     }
// };

// obj.child.b(); 
// obj.child.c();

'------------------------------------5'
// const foo = () => {
//     console.log(this.prop);
// }

// const obj = {
//     prop: 1,
//     m1() {
//         console.log(this.prop);
//     },
//     m2(foo) {
//       foo();
//     },
//     m3() {
//       const foo = () => {
//         console.log(this.prop);
//       }
//       foo();
//     },

//     m4: foo,
//     m5() {
//       foo();
//     },
// };

// obj.m1(); 
// obj.m2(foo); 
// obj.m3(); 
// obj.m4(); 
// obj.m5(); 

'------------------------------------6'
function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
        console.log(this.x);
    },
    baz: function () {
        console.log(this.x);
    }
  };
}

const obj1 = foo();
obj1.bar(); 
obj1.baz(); 

const obj2 = foo.call({ x: 30 }); 
/* небольшая подсказка, тут мы задаем THIS для Foo
теперь у стрелочной есть

  function foo() {
    const x = 10;
    this.x: 30;
  }
  то есть стрелочная фун-ия берет знач из этого this.x
*/
let y = obj2.bar; 
let z = obj2.baz; 
y(); 
z(); 

obj2.bar(); 
obj2.baz();

'------------------------------------7'
// // // версия 2
// function foo() {
//   const x = 10;
//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz: function () {
//       console.log(this.x);
//     }
//   };
// }

// const obj1 = foo();
// obj1.bar();
// obj1.baz();

// const obj2 = foo.call({ x: 30 });
// obj2.bar(); 
// obj2.baz(); 


'------------------------------------8'
// function foo() {
//     return function bar() {
//         console.log(this)
//         return () => console.log(this)
//     }
// }

// const baz = foo().call({x:10});
// baz.call({y:20}); 


'------------------------------------9'
// function foo() {
//     foo.x = 30
//     const {x} = this
//     console.log(x) 
// }

// foo.x = 10

// foo.call(foo,20)

'------------------------------------10'
// function foo(...rest) {
//     console.log(this,rest)
// }

// const bar = foo.bind({x:10},20).bind({y:30},40)

// bar() 

'------------------------------------11'
// const user = {
//     name: 'Bob',
//     funcFunc() {
//       return function() {
//         console.log(this);
//       }
//     },
//     funcArrow() {
//       return () => {
//         console.log(this);
//       }
//     },
//     arrowFunc: () => {
//       return function() {
//         console.log(this);
//       }
//     },
//     arrowArrow: () => {
//       return () => {
//         console.log(this);
//       }
//     },
// };
  
// user.funcFunc()();
// user.funcArrow()(); 
// user.arrowFunc()(); 
// user.arrowArrow()(); 

'------------------------------------12'
// var poke1 = {name:'Pikachu'};
// var poke2 = {name:'Chermander'};
// var poke3 = {name:'Bulbasaur'};

// var sayName = function(){ console.log(this.name) }

// sayName.bind(poke1).bind(poke2).call(poke3); 

'------------------------------------13'
// const obj = {
//     firstName: 'Bill',
//     lastName: 'Ivanov',

//     showFirstName: function () {
//         console.log(this.firstName);
//     },

//     showLastName: () => {
//         console.log(this.lastName);
//     }
// }

// obj.showFirstName(); 
// obj.showLastName(); 

// obj.showFirstName.bind({ firstName: 'Boris' })(); 
// obj.showFirstName.bind({ firstName: 'Boris' }).bind({ firstName: 'Oleg' })();
// obj.showLastName.bind({ firstName: 'Boris' })();

'------------------------------------14'
// const contextA = {a: "a"};
// const contextB = {b: "b"};

// function logThis() {
//     console.log(this);
// }

// const bound1 = logThis.bind(contextA);
// const bound2 = logThis.bind(contextB);

// const bound3 = bound1.bind(contextB);
// const bound4 = bound2.bind(contextA);

// bound1();
// bound2(); 
// bound3(); 
// bound4();


'------------------------------------15'
// var f = function() {
// 	https://habr.com/ru/articles/149516/
// 	this.x = 5;   // window.x = 5
// 	(function() {
// 			this.x = 3; // window.x = 3
// 	})();
// 	console.log(this.x); 
// };
	
// var obj = {
// 	x: 4, 
// 	m: function() {
// 		console.log(this.x);
// 	}
// };
	
	
// f(); // 3
// new f(); // 5
// obj.m();  // 4
// new obj.m(); // undefined
// f.call(f);  // 5
// obj.m.call(f); // 5