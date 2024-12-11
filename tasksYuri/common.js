// // Найти сумму
// const object = {
// 	a: 1,
// 	next: {
// 			b: 2,
// 			next: {
// 					c: 3,
// 			},
// 	},
// }

// function test(obj) {
// 	let sum = 0

// 	for (let i in obj) {
// 		if (typeof obj[i] === 'object') {
// 			sum += test(obj[i])
// 		} else {
//       sum += obj[i]
//     }
// 	}

// 	return sum
// }
// console.log(test(object))
////////////////////////////////////////////////////


/*  Написать функцию, которая принимает объект и путь, а на 
выходе значение по этому пути 
func(obj, 'a.b.c') --> 'd'
*/
// const obj = {
//   a: {
//     b: {
//       c: 'd'
//     },
//     e: 'f'
//   }
// }

// function test(param, path) {

//   let arr = path.split('.')
//   let answer = param

//   arr.forEach(elem => answer = answer[elem])

//   return answer
// }
// console.log(test(obj, 'a.b.c'))
////////////////////////////////////////////////////


/* Функция создания дубликатов символов строки: */
// function accum(str) {
//   let answ = []

//   for (let i = 0; i < str.length; i++) {	
//     answ.push(`${str[i].toUpperCase()}${str[i].repeat(i)}`)
//   }

//   return answ.join('-')
// }

// console.log(accum("abcde")) // "A-Bb-Ccc-Dddd-Eeeee"
////////////////////////////////////////////////////


/*Сделать вложенный объект из строки.
Пример:
{
  one: {
    two: {
      three: {
        four: {
          five: {}
        }
      }
    }
  }
}
*/

// const str = 'one.two.three.four.five'

// function test(param) {
//   let reverseArrayString = param.split('.').reverse()

//   let answ = reverseArrayString.reduce((acc, current) => {
	
//     return {[current]: {...acc}}
//   }, {})

//   return answ
// }
// console.log(test(str))
////////////////////////////////////////////////////


/* Написать функцию, которая получает значение, 
где # = backspace, то есть символ перед # будет удалён.
"abc#d##c"      ==>  "ac"
"abc##d#"       ==>  "a"
*/
// function test(param) {

//   let answ = ''

//   for (let i = 0; i < param.length; i++) {
	
//     if (param[i] !== '#') {
//       answ += param[i]
//     } else {
//       answ = answ.slice(0, -1)
//     }
//   }

//   return answ
// }
// console.log(test("abc#d##c"))
// console.log(test("abc##d#"))
////////////////////////////////////////////////////


// // 70000 + 200 + 3
// function expandedForm(num) {
// 	const numString = num.toString();
// 	let result = [];

// 	for (let i = 0; i < numString.length; i++) {
// 		if (numString[i] === '0') {
// 			continue;
// 		}
// 		const zeros = '0'.repeat(numString.length - i - 1);
// 		result.push(`${numString[i]}${zeros}`);
// 	}
// 	return result.join(' + ');
// }
// expandedForm(70203) // 70000 + 200 + 3
////////////////////////////////////////////////////


// // перемножать пока не станет меньше 10
// function persistence(num) {
	
//   if (10 > num) {
// 		return 0
// 	} else {
// 		let count = 0

// 		while (num >= 10) {
// 			count++
// 			let total = 1
// 			String(num).split('').forEach(item => {
// 				total *= Number(item)
// 			})
//       console.log(total);
// 			num = total
// 		}

// 		return count
// 	}
// }
// console.log(persistence(999));
////////////////////////////////////////////////////


// function longestConsec(strarr, k) {
// 	if (strarr.length === 0 || k > strarr.length || k <= 0) {return ''}

// 	return strarr.slice(0, k).join('')
// }
// console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 3))
// console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
////////////////////////////////////////////////////


// function alphabetPosition(text) {
// 	const replacedParameter = [];
// 	const textSplit = text.toLowerCase().split('');
	
//   textSplit.forEach(element => {

//     let chareCodElem = element.charCodeAt(0) - 96

//     if (chareCodElem > 0) {
//       replacedParameter.push(chareCodElem)
//     }
// 	})
	
//   return replacedParameter.join(' ');
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
// console.log(alphabetPosition('5 r%p*e_'))
////////////////////////////////////////////////////


// let salaries = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// }
// function isEmpty(innerUser) {
// 	for (let props in innerUser) {
// 		if (Number.isFinite(innerUser[props])) {
// 			innerUser[props] *= 2
// 		}
// 	}
// }
// isEmpty(salaries)
// console.log(salaries);
////////////////////////////////////////////////////


/* Самое большое слово в строке (Можно переписать код и сделать лучше) */
// function high(x) {
// 	let answ = null
// 	let count = 0
// 	let maxSumInAlphabet = 0
// 	let numInAlphabet = null
// 	let xArray = x.split(' ')

// 	for (let i = 0; i < xArray.length; i++) {

// 		for (let x = 0; x < xArray[i].length; x++) {

// 			numInAlphabet = xArray[i][x].charCodeAt(0) - 96
// 			count += numInAlphabet
// 		}

// 		if (count > maxSumInAlphabet) {
// 			maxSumInAlphabet = count
// 			answ = xArray[i]
// 		}
// 		count = 0
// 	}
// 	return answ;
// }
// console.log(high('man i need a taxi up to ubud'));
////////////////////////////////////////////////////


// var twoSum = function (nums, target) {
// 	obj = {}
// 	let current = 0

// 	for (let i = 0; i < nums.length; i++) {
// 		current = target - nums[i]

// 		if (current in obj) {

// 			return [obj[current], i]
// 		}

// 		obj[nums[i]] = i
// 	}
// };
// console.log(twoSum([3, 2, 3], 6)) // [ 0, 2 ]
// console.log(twoSum([2, 7, 11, 15], 9)) // [ 0, 1 ]
////////////////////////////////////////////////////



// var isPalindrome = function (x) {
//   if (0 > x) {return false}

// 	let copyX = x
// 	copyX = (String(copyX).split('').reverse()).join('')
	
//   return x === +copyX
// };
// console.log(isPalindrome(121))
// console.log(isPalindrome(123))
// console.log(isPalindrome(-121))
////////////////////////////////////////////////////


// function rndm(min, max) {	
// 	return (Math.floor((max - min + 1) * Math.random() + min))
// }
// console.log(rndm(1, 3));
////////////////////////////////////////////////////


// var romanToInt = function (s) {
// 	const romanObj = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	}
// 	let sumNum = 0
// 	let currentNum = 0
// 	let nextNum = 0
// 	for (let i = 0; i < s.length; i++) {
// 		currentNum = romanObj[s[i]]
// 		nextNum = romanObj[s[i + 1]]

// 		if (nextNum > currentNum) {
// 			sumNum += nextNum - currentNum
// 			i++
// 		} else {
// 			sumNum += currentNum
// 		}
// 	};
// 	return sumNum
// }
// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));
////////////////////////////////////////////////////


// function truncate(str, maxlength) {
// 	return (str.length > maxlength) ?
// 		str.slice(0, maxlength - 1) + '…' : str;
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));
////////////////////////////////////////////////////


`
Отличный алгоритм под названием Тасование Фишера — Йетса. 
Суть заключается в том, чтобы проходить по массиву в обратном порядке и 
менять местами каждый элемент со случайным элементом, который находится перед ним
`
// let arr4 = [1, 2, 3];
// function shuffle(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

// 		// поменять элементы местами
// 		// мы используем для этого синтаксис "деструктурирующее присваивание"
// 		// подробнее о нём - в следующих главах
// 		// то же самое можно записать как:
// 		// let t = array[i]; array[i] = array[j]; array[j] = t
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// }
// shuffle(arr4)
// console.log(arr4);
////////////////////////////////////////////////////


// function groupById(arr) {
// 	return arr.reduce((acc, current) => {
// 		acc[current.id] = current
// 		return acc;
// 	}, {})
// }

// let users3 = [
// 	{ id: 'john', name: "John Smith", age: 20 },
// 	{ id: 'ann', name: "Ann Smith", age: 24 },
// 	{ id: 'pete', name: "Pete Peterson", age: 31 },
// ];
// let usersById = groupById(users3);
// console.log(usersById);
////////////////////////////////////////////////////


// сделали Итерируемый объект
// let range = {

// 	from: 0,
// 	to: 5,
// 	test() {
// 		return 'hello'
// 	}
// }

// range[Symbol.iterator] = function () {
// 	return {
// 		current: this.from,
// 		last: this.to,

// 		next() {
// 			if (this.current <= this.last) {
// 				return { done: false, value: this.current++ }
// 			}
// 			else {
// 				return { done: true }
// 			}
// 		}
// 	}
// }

// for (let i of range) {
// 	// console.log(i);
// }
// let map = new Map(Object.entries(range))
// let onj = Object.fromEntries(map)
// сделали Итерируемый объект
////////////////////////////////////////////////////


// function aclean(arr) {
// 	let answ = new Map() // у Map не может быть одинаковых ключей

// 	for (let i = 0; i < arr.length; i++) {

// 		let ii = [...arr[i].toLowerCase()].sort().join('')
// 		answ.set(ii, arr[i])
// 	}
// 	return Array.from(answ.values())
// }
// let arr6 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(aclean(arr6))
////////////////////////////////////////////////////


// let prices = {
// 	banana: 1,
// 	orange: 2,
// 	meat: 4,
// };

// let doublePrices = Object.fromEntries(
// 	// преобразовать в массив, затем map, затем fromEntries обратно объект
// 	Object.entries(prices).map(([key, value]) => {
// 		return [key, value * 2]
// 	})
// );
// console.log(doublePrices.meat); // 8
////////////////////////////////////////////////////


// function sumSalaries(salar) {
// 	let sum = 0

// 	// for (let i of Object.values(salar)) {
// 	// 	sum += i
// 	// }
// 	// return sum
// 	return Object.values(salar).reduce((sum, current) => sum += current, 0)
// }

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };
// console.log(sumSalaries(salaries))
////////////////////////////////////////////////////


// let user3 = {
// 	name: "John",
// 	years: 30
// };
// let { name, years: age, isAdmin = false } = user3
// console.log(name);
// console.log(age);
// console.log(isAdmin);
////////////////////////////////////////////////////


// let salariess = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };

// function topSalary(salaries) {
// 	if (Object.keys(salaries).length === 0) {
// 		return null
// 	}

// 	let current = 0
// 	let mName = null
// 	for (let [name, salary] of Object.entries(salaries)) {

// 		if (salary > current) {
// 			current = salary
// 			mName = name
// 		}
// 	}
// 	return mName;
// }
// console.log(topSalary(salariess));
////////////////////////////////////////////////////


// function sum(list, accumulator) {
//   if (list.length == 0) {
//     return accumulator;
//   }

//   return sum(list.slice(1), accumulator + list[0]);
// }
// let list = [1, 2, 3, 4, 5];
// let accumulator = 0;
// console.log(sum(list, accumulator)); // 15
////////////////////////////////////////////////////


// function transpose(matrix) {

// 	let result = []

// 	for (let j = 0; j < matrix[0].length; j++) {

// 		result.push([])

// 		for (let i = 0; i < matrix.length; i++) {
// 			result[result.length - 1].push(matrix[i][j])
// 		}
// 	}
// 	return result
// }
// console.log(transpose([[1, 2, 3], [4, 5, 6]]))
////////////////////////////////////////////////////


// var obj22 = {
// 	person: {
// 		name: 'joe',
// 		history: {
// 			hometown: 'bratislava',
// 			bio: {
// 				funFact: 'I like fishing.'
// 			}
// 		},
// 		// animal: {
// 		// 	pet: {
// 		// 		name: 'Fluffy',
// 		// 		needNoseAntEater: true
// 		// 	}
// 		// }
// 	}
// };
// Object.prototype.hash = function (string) {
// 	let strSplit = string.split('.')
// 	let result = this
	
// 	for (let element of strSplit) {
// 		if (!result[element]) {
// 			return ' Элемент не найден'
// 		}
// 		result = result[element]
// 	}
// 	return result
// }
// console.log(obj22.hash('person.name')); // 'joe'
// console.log(obj22.hash('person.history.bio')); // { funFact: 'I like fishing.' }
// console.log(obj22.hash('person.history.homeStreet')); // undefined
// console.log(obj22.hash('person.animal.pet.needNoseAntEater')); // undefined
////////////////////////////////////////////////////


// class Foo {
// 	constructor() {
// 		this.id = 'foo';
// 		this.print();
// 	}

// 	print() {
// 		console.log('foo' + this.id);
// 	}

// 	arrowPrint = () => {
// 		this.arrowPrint = () => {
// 			console.log('arrow' + this.id);
// 		}
// 	}
// }

// class Bar extends Foo {
// 	constructor() {
// 		super(); // 
// 		// супер считай это вот так
// 		// функция print будет срабатывать в этом окружении (bar)
// 		// а перемменые нет, они идут по порядку, то есть будет род. this.id = foo
// 		// constructor() {
// 			// this.id = 'foo';
// 			// this.print();
// 		// }
		
// 		this.id = 'bar';
// 		this.print(); // 
// 		super.print(); // 
// 		// super.arrowPrint();//error
// 		this.arrowPrint(); // все ок :)
// 	}

// 	print() {
// 		console.log('bar' + this.id);
// 	}
// }
// const p = new Bar();

// console.log(p.__proto__.hasOwnProperty('print')); //
// console.log(p.__proto__.__proto__.hasOwnProperty('print')); //
// console.log(p.__proto__.print === p.__proto__.__proto__.print); //
// console.log(p.hasOwnProperty('arrowPrint')); //
////////////////////////////////////////////////////


// с ЛайвКодинга мемоизяация
// function memoize(fn) {
// 	let obj = {}

// 	return (...args) => {		
// 		let key = args.join('+')

// 		if (key in obj) {
// 			return obj[key]
// 		}
		
// 		obj[key] = fn(...args)

// 		return obj[key]
// 	}
// }

// let callCount = 0

// const memoizeFn = memoize((a, b) => ++callCount && a + b)

// console.log(memoizeFn(2,3)); //5
// console.log(memoizeFn(3,2)); //5
// console.log(memoizeFn(2,3)); //5
// console.log(memoizeFn(4,3)); //7
// console.log(callCount);
////////////////////////////////////////////////////


// function test() {
// 	let isEven = false
// 	let prevRes = 0
	
// 	return function (digit) {
// 	  isEven = !isEven

// 	  if (isEven) {
// 		prevRes += digit
// 	  } else {
// 		prevRes -= digit
// 	  } 
// 	  return prevRes     
// 	}
// }
// let func = test()
// console.log(func(4))// 4   0 + 4 |1
// console.log(func(2))// 2   4 - 2 |2
// console.log(func(3))// 5   2 + 3 |3
// console.log(func(5))// 0   5 - 5 |4


// function isSubsequence(s, t) {
  
//   let markerS = 0

//   for (let i = 0; i < t.length; i++) {
//     if (t[i] === s[markerS]) {
//       markerS++
//     }
//   }

//   return markerS === s.length
// }
// let s = "abc", t = "ahbgdc"
// console.log(isSubsequence(s,t)) //true
// // 
// s = "abc", t = "ahcgdb"
// console.log(isSubsequence(s,t)) //false
// // 
// s = "axc", t = "ahbgdc"
// console.log(isSubsequence(s,t)) //false
////////////////////////////////////////////////////


// Function.prototype.callPolyfill = function (thisArg, ...arguments) {
//   thisArg.increment = this
//   let answ = thisArg.increment(...arguments)
//   delete thisArg.increment
//   return answ
// }

// function increment() { 
// 	this.count++; 
// 	return this.count; 
// }

// const count = {
// 	count: 1
// }

// console.log(increment.callPolyfill(count)); // 2
// console.log(count) // {count: 2}
////////////////////////////////////////////////////


// Надо написать функцию, которая на вход  получает массив из чисел и сумму,
// которую необходимо найти, возвращает массив из любых двух элементов полученного массива, 
// которые в сумме получают число для поиска. Если таких слагаемых не нашлось, 
// то должен быть возвращён пустой массив.
function funccc (arr, sum) {  
  let current = 0
	
	for (let i = 0; i < arr.length; i++) {
	 
    current = Math.abs(sum - arr[i])

    if (arr.includes(current)) {
      return [arr[i], current]
    }
	}

  return []
} 
// console.log(funccc([-1, 5, 2, 9], 8)); // [-1, 9]
// console.log(funccc([-2, 5, 2, 9, -1], 8)); // [-1, 9]
// console.log(funccc([-2, 5, 2, 9, -1, 10], 5)); // [10, 5]
////////////////////////////////////////////////////


// через каждые 5л можем из доп. бака перелить в основной 1л
// 1л = 10км
// посчитать кол-во проеханых КМ
function distanceTraveled (mainTank, additionalTank) {
  
	let x = 0
	
	for (let i = 0; i < mainTank; i++) {
	  
	  x += 1
	  
	  if (x % 5 === 0 && additionalTank > 0) {
		  additionalTank -= 1
		  i -= 1
	  }
	}
	
	return x * 10
}
    
let mainTank = 5, additionalTank = 10 //60 
// let mainTank = 1, additionalTank = 2 //10  
// let mainTank = 9, additionalTank = 5 //110
// console.log(distanceTraveled(mainTank, additionalTank)) 
////////////////////////////////////////////////////


function timeLimit(fn, t) {
  return (...params) => {
    return new Promise((resolve, reject) => {
	
      fn(...params).then(resolve).catch(reject)
	
      setTimeout(() => {
        reject('Time Limit Exceeded')
      }, t)
    })
  }
}


const func1 = (t) => new Promise(res => setTimeout(() => {res('SUCCESS')}, t))

// const limited = timeLimit(func1, 100);
// limited(150).catch(console.log) // "Time Limit Exceeded"
// limited(50).then(console.log) // SUCCESS
////////////////////////////////////////////////////


Array.prototype.groupBy = function (func) {

  return this.reduce((acc, curr) => {
    
    let x = func(curr)
    
    if (Array.isArray(acc[x])) {
      acc[x].push(curr)
    } else {
      acc[x] = [curr]
    }
    
    return acc
  }, {})
}
// console.log([1,2,3,1].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
// console.log([
//     {"id":"1"},
//     {"id":"1"},
//     {"id":"2"}
//   ].groupBy((item) => item.id)
// ) // { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }



function getYoungHomo(arrUsers) {  
    
  const objYoung = {}
  
  for (let i = 0; i < arrUsers.length; i++) {
      
      
      
    if(!Object.hasOwn(objYoung, arrUsers[i].level)) {
        
      objYoung[arrUsers[i].level] = arrUsers[i]
        
    } else {
        
      if (arrUsers[i].age < objYoung[arrUsers[i].level].age ) {
          
        objYoung[arrUsers[i].level] = arrUsers[i]
      }
        
    }
      
  }
  
  return objYoung
  
}


let test223 =  [
  { name: 'Иван', age: 23, level: 1 },
  { name: 'Вика', age: 41, level: 3 },
  { name: 'Петя', age: 18, level: 3 },
  { name: 'Вова', age: 50, level: 2 },
  { name: 'Инна', age: 32, level: 2 }
];

console.log(getYoungHomo(test223));