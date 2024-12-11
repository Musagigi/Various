// let array = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
// let newArray = [...array]
// newArray.shift()
// console.log(array)
// console.log(newArray)
// count = []

// function solution(list){
//     for (let i in array){

//         for (let j in newArray){

//             if (array[i] + 1 === newArray[j]){
//                 count = count.concat(array[i])
//                 console.log(typeof(array[i]))
//                 continue
//             }
//         }
//     }
//     return count
// }

// console.log(solution(array))


// let obj = {'12': 'qwewq', 'qwe': '12rqwe'}

// for (let i in obj) {
//     console.log(i, obj[i])
// }


// const myCity = {
//     city: 'new york',
//     cityGreeting: function (a) {
//         console.log('метод объекта ' + a)
//     }
// }

// myCity.cityGreeting(12)


// const myCity = {
//     1: {
//         innerObj: 'dadada'
//     },
//     city: 'new york',
//     // можно создавать метод таким образом
//     cityGreeting(a) {
//         console.log('метод объекта ' + a)
//     }
// }

// myCity.cityGreeting(12)
// console.log(myCity[1])
// console.log(myCity['1'])
// strJS = JSON.stringify(myCity)
// console.log(strJS)
// console.log(JSON.parse(strJS))
// console.log(myCity)


// ... - оператор разделения объекта на св-ва, копирует объект в другой объект,
    //  при изменении данных в новом объекте, старый объект не меняется,
    //  но вложенные объекты будут привязаны к старому и при измении нового
    //  старый тоже будет меняться 
// const myCity3 = {...myCity}
// console.log(myCity3, '\n')


// //  const test2 = JSON.parse(JSON.stringify(test)) - можно копировать так
// //  преимущество такого копирвоания, в том, что копируются и вложенные объекты
// //  создаются новые ссылки для нового объекта, НО минус, МЕТОДЫ не копируются!!!
// const myCity2 = JSON.parse(JSON.stringify(myCity))
// console.log(myCity2)
