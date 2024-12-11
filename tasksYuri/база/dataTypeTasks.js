// console.log(NaN + 1 + null + 1);           // NaN
// console.log(NaN + 1 + null + 1 + "");      // NaN 
// console.log("" + NaN + 1 + null + 1 + ""); // NaN1null1
// console.log("number" + 15 + 3)             // 'number153'
// console.log(true + false)                  // 1
// console.log([] + null + 1)                 // 'null1'
// console.log("foo" + + "bar")               // 'fooNaN'
// console.log(!!"false" == !!"true")         // true
// console.log(null == '')                    // false
// console.log([] == ![])                     // true

// console.log('------------------------------------2');
// console.log(NaN + 1)          // NaN
// console.log(NaN + 'o')        // NaNo
// console.log(undefined + 1)    // NaN
// console.log(undefined - 1)    // NaN
// console.log(null + 1)         // 1
// console.log(null / 5)         // 0
// console.log(5 / undefined)    // NaN
// console.log(-5 / null)        // -Infinity
// console.log(null == 0)        // false
// console.log(null == '')       // false
// console.log(null > 0)         // false
// console.log(null >= 0)        // true
// console.log({} + {})          // [object Object][object Object]
// console.log(+{})              // NaN
// console.log(null == '')       // false
// console.log('foo' + + 'bar')  // fooNaN
// console.log('11' + '1' - 1)   // 110
// console.log(typeof Object)    // function
// console.log(typeof Math)      // object

// console.log('------------------------------------3');
// console.log(Boolean([]));              // true
// console.log(Boolean(function () {}));  // true
// console.log(Boolean(Symbol('Hi')));    // true
// console.log(typeof function () {});    // function
// console.log([] == []);                 // false
// console.log(true == 1);                // true
// console.log(false == 0);               // true
// console.log(false === '');             // false
// console.log(typeof null);              // object

// const res = 'B' + 'a' + (1 - 'hello');
// console.log(res); 
// const res2 = (true && 3) + 'd';
// console.log(res2); 
// const res3 = Boolean(true && 3) + 'd';
// console.log(res3);


// console.log('------------------------------------4');
// function x() {}
// console.log(typeof x);                     // function
// console.log(x instanceof Object);          // true

// var str1 = String(123);
// var str2 = new String(123);
// console.log(typeof str1 === typeof str2);  // false
// console.log(str1 === str2);                // false
// console.log(str1 === String(123));         // true
// console.log(str2 === new String(123));     // false
// console.log(str1 === 123);                 // false
// console.log(str1 === '123');               // true
// console.log(str1 == 123);                  // true
// console.log(str1 == "123");                // true
// console.log(str1 == str2);                 // true

// console.log('------------------------------------5');
// var y = [];
// console.log(typeof y);                // object

// var str3 = "123"; 
// str3[0] = "2"; 
// console.log(str3);                    // '123'

// var a = 1 + 2 + 3 + "";               // 6
// var b = "" + 1 + 2 + 3;               // 123

// console.log(a, typeof a);             // 6 string
// console.log(b, typeof b);             // 123 string

// var c = "123x";
// console.log(Number(c));               // NaN
// console.log(parseInt(c, 10));         // 123
// console.log(+c);                      // NaN
// console.log(typeof +c);               // number
// console.log(Boolean(String(false)));  // true
// var d = [];
// console.log(d ? 1 : 2);               // 1

// console.log('------------------------------------6');
// console.log("a" && "b" && "c") // c
// console.log("a" || "b" || "c") // a
// console.log("a" && "" && "c")  // ''
// console.log("a" && "" || "c")  // c
// console.log('' ?? "a")         // ''
// console.log(false ?? "a")      // false
// console.log(null ?? "a")       // a


// console.log('------------------------------------7');
// let str = 'string';
// str.len = 4;
// console.log(str.len);  // undefined || err

// str.__proto__.len = 4;
// console.log(str.len);  // 4 
