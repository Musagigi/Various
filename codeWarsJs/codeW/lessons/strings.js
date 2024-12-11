// const man = {
//     name: 'Artem',
//     age: 23,
//     logInfo (job) {
//         console.log(this.name)
//         console.log(this.age)
//         console.log(job)
//     }
// }

// const woman = {
//     name: 'lena',
//     age: 23,
// }

// man.logInfo('full')
// console.log(man, '\n')
// const newWoman = man.logInfo.bind(woman, 'front\n')()
// man.logInfo.bind(woman, 'back')()


// function makeUser() {
//     return {
//         name: 'Jon',
//         ref: this
//     }
// }
// let x = {}
// x.f = makeUser
// console.log(x.f())

let guestList = `guest:
 -jon
 -pete
 -mary
`;
console.log(guestList)

let str = `hello`;
console.log(str.length)
console.log(str[str.length - 4])
console.log(str[str.length - 2 + 1])
console.log(str[str.length - 1],'\n')

// for..of относительно строк
for (let i of str) {
    console.log(i)
}
console.log('\n')
//можно записывать результат итераций в новый идентификатор
let secStr = ''
for (let i of str) {
    secStr += i
}
console.log(secStr,'\n')


//поиск в строке indexOf()
let stroka = 'Widget with id'
console.log('строка найдена под индексом', stroka.indexOf('Widget'))
console.log('строка не найдена, чувствительность к регистру', stroka.indexOf('widget'))
console.log('первое найденное совпадение под индексом', stroka.indexOf('id'))
console.log('поиск со 2 позиции ндекса, строка найдена под индексом', stroka.indexOf('id', 2), '\n')
//includes(), startsWith(), endsWith()
//Это — правильный выбор, 
//если нам необходимо проверить, есть ли СОВПАДЕНИЕ, но ПОЗИЦИЯ не нужна:
console.log('widget with id'.includes('widget'))
console.log('widget with id'.includes('Widget'))
console.log('widget with id'.includes('wi', 2)) //поиск с позиции
//начинается ли строка или заканчивается
console.log('widget with id'.startsWith('wi'))
console.log('widget with id'.startsWith('we'))
console.log('widget with id'.endsWith('id'), '\n')
//slice()
let strsSlice = "stringify";
console.log( strsSlice.slice(0, 5) ); //символы от 0 до 5 (не включая 5)
console.log( strsSlice.slice(0, 1) ); // 's', от 0 до 1, не включая 1
console.log( strsSlice.slice(2)) // со 2 позиции и до конца
console.log( strsSlice.slice(-4, -1)) //нач -4 знач индекса и до -1 индекса


//еще полезные методы
//str.trim() — убирает пробелы в начале и конце строки.
//str.repeat(n) — повторяет строку n раз.