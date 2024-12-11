const myArray = [1, 2, 3]
console.log(myArray)


// метод map возвращает новый массив
const newArrray = myArray.map(el => {
    return el * 2
})
console.log(newArrray)


// можно подставить любую букву
const newArrray2 = myArray.map(i => i * 3)
console.log(newArrray2)


// метод forEach не возвращает новый массив
// он только производит операцию
const forArray = myArray.forEach(el => el * 4)
console.log(forArray) // не присвоит новой переменной выполн. результат

myArray.forEach(el => {
    console.log(el * 4, 'forEach')
})


// Можно через обычный for, можно присвоить массив новой переменной
// можно не присваивать
for (let i = 0; i < myArray.length; i++) {
    let forNewArray = myArray[i]
    console.log(forNewArray * 2, 'новой переменной')
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i] * 3, 'увеличиваем осн. массив')
}