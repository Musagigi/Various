// // должна посчитать кол-во операций (1 операция увеличивает на 1), посчитать кол-во операций
// // если левое значение < правого ничего не делаем
// // если больше увеличиваем его, пока оно не станет больше правого
// function minOperations(nums) {

//   let answ = 0

//   for (let i = 0; i < nums.length - 1; i++) {
  
//     if (nums[i] >= nums[i + 1]) {
	
//       const currentSum = nums[i] - nums[i+1] + 1
	
//       answ += currentSum      
//       nums[i+1] += currentSum
//     } 
//   }
//   return answ
// }
  
  
// let nums = [1,1,1] // 1, 2, 3
// console.log(minOperations(nums)) // 3

// nums = [1,5,2,4,1] 
// console.log(minOperations(nums)) // 14

// nums = [8]
// console.log(minOperations(nums)) // 0


// function promiseChain(functions) {
	
	
  //   return (arg) => {
	  
  //       let t = functions.reduce((acc, curr) => {
		  
  //         return acc.then(curr)
		  
  //       }, Promise.resolve(arg))
		
  //     return t
  //   }
  // }
  
  
  // const chained = promiseChain([
  //   (result) => new Promise((resolve, reject) => setTimeout(() => {
  //     console.log(result)
  //     resolve(result)
  //   }, 1000)),
  //   (result) => new Promise((resolve, reject) => setTimeout(() => {
  //     console.log(result)
  //     // throw("ERROR")
  //     resolve(result)}, 2000)),
  //   (result) => new Promise((resolve, reject) => setTimeout(() => {
  //     console.log(result)
	  
  //     resolve(result)}, 3000)),
  // ])
  
// chained(42).then(console.log).catch(console.log) //42



// Напишите функцию arrayToList, которая строит список, чья структура
// подобна показанной, если передать функции массив [1, 2, з] в качестве
// аргумента. Напишите также функцию listToArray, создающую массив из
// списка. Затем добавьте вспомогательную функцию prepend, принимающую
// элемент и список и создающую новый список, в котором заданный элемент
// добавлен в начало исходного списка. Кроме того, создайте функцию nth,
// принимающую список и число и возвращающую элемент, находящийся в за­
// данной позиции в этом списке (где ноль соответствует первому элементу),
// или undefined, если элемента в заданной позиции не существует.



// посмотреть как это вообще работает
var reconstructQueue = function(people) {

	const res = [];

    people.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0])

    for (const p of people) {
        res.splice(p[1], 0, p); 
    }
    
    return res;
};

// people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]

// console.log(reconstructQueue(people));

// [1,2,3,4,5]
// const b = 4 или 5 или 6




// function createInc(param) {
// 	let value = 0
// 	console.log(value, 'value');
// 	function inc() {
// 		value += param
// 		console.log(value);
// 	}

	
// 	const message = `Current value is ${value}`
// 	function log() {
// 		console.log(message);
// 	}
	
// 	return [inc, log]
// }

// const [inc, log] = createInc(1)
// log выдаст 3, скорее из-за того что inc и log добавлены в один массив

// inc()
// inc()
// inc()
// log()

// const inc = createInc(1)[0]
// const log = createInc(1)[1]


// console.log(true + false); // 1
// console.log(1 + '2'); // 12
// console.log('1' + 2); // 12
// console.log([1,2,3] == [1,2,3]); // false
// console.log(typeof typeof null); // string 
// console.log(null == undefined); // true
// console.log({} + '1' + +[]); // [object Object]1NaN

//-----------------------------------------------------------//
 
// const arr = [3, 5, 7];

// for (i in arr) {
//     console.log(i); // 0, 1, 2
// }

// for (i of arr) {
//     console.log(i); // 3, 5, 7
// }

// const obj = {a:3, b: 5, c: 7};

// for (i in obj) {
//     console.log(i); // a, b, c
// }

// for (i of obj) {
//     console.log(i); // obj is not iterable
// }

//-----------------------------------------------------------//

// let value = 2;

// function showValue() {
//     console.log(value); // 3
// }

// function wrapper() {
//     let value = 3;
//     console.log(value); // 3

//     showValue();
// }

// wrapper();

//-----------------------------------------------------------//

// var a = 5;

// const obj = {
//     a: 2,
//     foo: () => {console.log(this.a)},
// };

// obj.foo(); // 5

//-----------------------------------------------------------//

// console.log(1);

// let promise = new Promise((resolve, reject) => {
//     console.log(2);

//     resolve(3);

//     setTimeout(() => resolve(4), 1000);
// });

// promise
//     .catch(a => {
//         console.log(a);
//         return a;
//     })
//     .then(b => Promise.reject(b))
//     .then(c => {
//         console.log(c);
//         return c;
//     }, d => {
//         console.log(d);
//         return d;
//     })
//     .catch(e => console.log(e))
//     .finally(f => console.log(f));

// // 1 2 3 undefined

//-----------------------------------------------------------//


/*async function foo() {
    console.log(1);

    await setTimeout(() => console.log(2));

    console.log(3);

    const promise = new Promise((res, rej) => {
        console.log(5);

        res(6);
    });

    let result = await promise;

    console.log(result);

    await setTimeout(() => console.log(4));
}

foo(); // 1 3 5 6 2 4*/

//-----------------------------------------------------------//

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// 1 7 3 5 2 6 4

//-----------------------------------------------------------//

// const obj = {
//     a: 5,
//     b: 3,
// };

// const obj_2 = {
//     __proto__: obj,
// };

// delete obj.b;

// console.log(obj_2.b); // undefined

// delete obj; // удаляет только св-ва

// console.log(obj_2.a); // undefined будет 5

//-----------------------------------------------------------//


// проверить является ли анаграммой(путем перестановки букв 
// 1 слова получить второе слово можно или нет)
// llaa alla
// true


// function checkAnagrams (wordOne, wordTwo) {
    
    
//     if (wordOne.length !== wordTwo.length) {return false}
    
    
//     let sortedWordOne = wordOne.split('').sort().join('')
//     let sortedWordTwo = wordTwo.split('').sort().join('')
    

//     return sortedWordOne === sortedWordTwo;
// }


// console.log(checkAnagrams('llaa', 'alla')); // true

// console.log(checkAnagrams('манао', 'омон')); // false

// console.log(checkAnagrams('апельсин', 'спаниель')) // true

//-----------------------------------------------------------//


// отсортировать по полю salary (по возрастанию)
// const arr = [
//   {title: 'asdf', salary: 2800},
//   {title: 'asdf', salary: 2100},
//   {title: 'asdf', salary: 2300},
// ]

// function sortArray(param) {

//     return param.sort((a, b) => a.salary - b.salary)
// }


// console.log(sortArray(arr));

//-----------------------------------------------------------//

// Полифил filter

// Array.prototype.myFilter = function (fn) {
    
//     let answArr = []
    
//     for (let i = 0; i < this.length; i++) {
        
//         if (fn(this[i], i ,this)) {
            
//             answArr.push(this[i])
//         }
        
//     }
    
//     return answArr
// }

// console.log([1, 2, 3, 4, 5, 6].myFilter((item, i, array) => {
//     console.log(i);
    
//     if (i === array.length - 1) {
//         console.log(array);
//     }
    
//     return item % 2 === 0;
// })); // [2, 4, 6] 0, 1, 2, 3, 4, 5, [1, 2, 3, 4, 5, 6] 

//-----------------------------------------------------------//


// посчитать сумму всех value
// const tree = {
//   value: 12,
//   s: {
//     value: 1,
//     p: {
//       value:3
//     }
//   }
// }

// function sumValues(obj) {
    
//     let answ = 0
    
//     for (let i in obj) { 
        
//         if (typeof obj[i] === 'number') {
//             answ += obj[i];
//         } else {
//             answ += sumValues(obj[i]);
//         }
        
//     }
    
//     return answ
// }

// console.log(sumValues(tree)); //16


// Homework:
// Змейка
// const arr_1 = [
// 	[1,2,3]
// 	[4,5,6]
// 	[7,8,9]
//    ]
   
//    const arr_2 = [
// 	[1,2,3,4,5]
// 	[6,7,8,9,10]
// 	[11,12,13,14,15]
// 	[16,17,18,19,20]
// 	[21,22,23,24,25]
//    ]
   
//    console.log(snail(arr_1)) // [1, 2, 3, 6, 9, 8, 7, 4, 5];
   
//    console.log(snail(arr_2)) // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
   
//    //-----------------------------------------------------------//
   
//    // Написать функцию, которая высчитывает число итераций до тех пор, пока не останется число с одной цифрой
   
//    39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//    4 --> 0 (because 4 is already a one-digit number)
   


let value = 2;
// 1 showValue в LE попадают ссылки на значения из глобального окружения
// поэтому он видит value из глобального объекта
function showValue() {
    console.log(value, 'value'); 
}

function wrapper() {
    let value = 34;
    console.log(value, 'wrapper');

	// 3 не будет 34, так как showValue хоть и вызывает внутри wrapper,
	// но он видит глобальное окружение, так как вызывается НЕ в объекте
    showValue(); 
}

// 2 так как мы тут меняем значение value в глобальном окружении
// то значение у LE в showValue меняется и поэтому там покажет 5
value = 5 

// wrapper(); 



// ЗАМЫКАНИЕ
// Задача 1+: Счетчик с произвольным шагом
// Создайте функцию createCounter(step), которая возвращает функцию-счетчик с заданным шагом.
function createCounter(step) {
  let count = 0
  return () => {
      return count += step
  }
}
const counter = createCounter(5);
console.log(counter()); // 5
console.log(counter()); // 10
console.log(counter()); // 15


// Задача 2+: Кэширование результатов функции
// Создайте функцию memoize(fn), которая принимает функцию и возвращает её мемоизированную версию.
function memoize(fn) {
    
    const memoFn = {}
    
    return (...args) => {
        
        const keyFn = fn(...args)
        
        if (keyFn in memoFn) {
            return memoFn[keyFn]()
        }
        
        memoFn[keyFn] = fn
        
        return fn(...args)
    }
}

const slowFunction = (num) => {
    console.log('slowFunction call!');
    return num * 2;
};

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // 'slowFunction call!' вычисляет и кэширует результат
console.log(memoizedFunction(5)); // возвращает кэшированный результат


// Задача 3+: Ограничение вызовов функции
// Создайте функцию limitCalls(fn, maxCalls), которая ограничивает количество вызовов функции fn до maxCalls.
// В случае превышения выбрасывает исключение.
// function limitCalls(fn, maxCalls) {
 
//  const counter = 0 
 
//  return (...args) => {
    
//     counter += 1
    
//     if (counter >= maxCalls) {
//         return
//     }
    
//     return fn(...args)
     
//  }
 
// }

// const limitedFunction = limitCalls((x) => x * 2, 3);
// console.log(limitedFunction(2)); // 4
// console.log(limitedFunction(3)); // 6
// console.log(limitedFunction(4)); // 8
// console.log(limitedFunction(5)); // Error: Function call limit exceeded


// Задача 4+: Частичное применение аргументов
// Создайте функцию partial(fn, ...fixedArgs), которая частично применяет заданные аргументы к функции fn.
function partial(fn, ...fixedArgs) {

    
    return (...args) => {
        
      return fn(...fixedArgs, ...args) 
    }
}

const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);
console.log(add5(3, 2)); // 10






// КОНТЕКСТ
// Задача 1:+ Вызов метода объекта из другой функции
// Создайте объект с методом и вызовите этот метод из другой функции, сохраняя правильный контекст.
// const obj33 = {
//     value: 42,
//     getValue() {
//         return this.value;
//     }
// };

// function callMethod(method) {
//     return method();
// }

// console.log(callMethod(obj.getValue.bind(obj))); // 42

// Задача 2:+ Использование call и apply для изменения контекста
// Создайте функцию и вызовите её с разными контекстами, используя call и apply.
// key - ключ поля со значением.
const key = 'value';

function showValue(paramKey) {
    console.log(this[paramKey]);
}

const obj1 = { [key]: 42 };
const obj2 = { [key]: 24 };

showValue.call(obj1, [key]); // 42
showValue.apply(obj2, [key]); // 24



// Задача 3+: Контекст в конструкторах
// Создайте конструктор и используйте его для создания объектов, сохраняя правильный контекст.
function MyConstructor(value) {
   
    this.value = value
}

MyConstructor.prototyp.getValue = function(){
    return this.value
}

const instance = new MyConstructor(42);
console.log(instance.getValue()); // 42




// АСИНХРОННОСТЬ

// 1.+ Реализуйте функцию с таймаутом, которая возвращает результат или 
//     ошибку в случае превышения времени ожидания.
function asyncWithTimeout(task, timeout)  {
    
    return new Promise((resolve, reject) => {
        
        task()
          .then((response) => response.json())
          .then((res) => {
            resolve(res)
          })
        
        setTimeout(() => {
          reject('error')
        }, timeout)
    })
}

asyncWithTimeout(() => fetch('https://api.example.com/data'), 5000)
  .then(data => console.log(data))
  .catch(error => console.error(error));
  
  
// 2.+ Создайте функцию для обработки нескольких асинхронных запросов и
//     возврата результатов в таком же порядке.
// Запросы выполняются параллельно.
async function handleMultipleRequests(urls) {
    
  return Promise.all(urls.map(url => fetch(url)))  
}

const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];

handleMultipleRequests(urls)
  .then(results => console.log(results))
  .catch(error => console.error(error));


// 3. Тайм-аут для асинхронной операции
// Напишите функцию, которая выполняет асинхронную операцию, но 
// прерывает её, если она не завершилась в течение заданного времени.
function timeout(promise, ms) {
    
    return Promise((resolve, reject) => {
       
       setTimeout(() => {
                   try {
            resolve(promise())
        } catch(e) {
            
        }
       }) 

    })
}

// Пример использования
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Done'), 2000));

timeout(slowPromise, 1000).then(console.log).catch(console.error); // Error: Timeout



// АЛГОРИТМИЧЕСКИЕ

//0. Функция на входе принимает строку и возвращает true, 
//   если количество каждой буквы в слове одинаково, иначе false.
function areOccurrencesEqual(str) {
   let letterCount 
}

console.log(areOccurrencesEqual('abacbc')) //true
console.log(areOccurrencesEqual('aaabb')) //false


//1. Нахождение наибольшей суммы подряд идущих элементов массива. 
//   На входе функции массив и количество подряд идущих элементов.
function maxSubarraySum(arr, num) {

    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // Ответ: 19




//2. Напишите функцию, которая находит самую длинный общий префикс для всех строк входного массива.

// Если общего префикса нет, вернуть пустую строку "".
function maxPrefix(arr) {
  
} 

console.log(maxPrefix(["flower","flow","flight"]));
console.log(maxPrefix(["dog","racecar","car"]));

// Пример 1:

// Ввод: strs = ["flower","flow","flight"]
// Вывод: "fl"


// Пример 2:

// Ввод: strs = ["dog","racecar","car"]
// Вывод: ""
// Объяснение: Среди входных строк нет общего префикса.

