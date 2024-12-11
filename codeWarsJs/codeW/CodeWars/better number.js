// функция высшего порядка
// либо
//      принимает как аргумент функцию
//      возвращает функцию
function number(n) {

    let maxNubmer = -Infinity
    let copyMainNumber = ''
    let newNumber = ''
    newNumber += n
    newNumber = newNumber.split('')
    
    for (let i = 0; i < newNumber.length; i++) { //  тут мы перебираем i

        copyMainNumber = [...newNumber] // делается копия
        console.log(copyMainNumber + '\n', copyMainNumber[i], 'delete number') // удаляемое число
        delete copyMainNumber[i] // удаление i-й цифры,
        let resultNumber = +copyMainNumber.join('') 
        console.log(resultNumber, 'result number\n') // вывод копии, без 1 числа

        if (maxNubmer < resultNumber) {
            maxNubmer = resultNumber
        }
    }
    console.log(maxNubmer, 'max number')
}
number(4501241201)