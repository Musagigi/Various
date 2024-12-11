//@ts-nocheck
// function sg(a = 7, b = 5, c = 6, d = 20) {
//     for(let i of arguments) {
//         console.log(i)
//     }
//     console.log(arguments[3], 'new')
// }
// sg(5, 3, 4, 20)

// 111
const elementByClass = document.getElementsByClassName('out-1')[0]
const randomInt = (min, max) => {
    let randNum = Math.floor(((max + 1 - min) * Math.random() + min));
    elementByClass.innerText = randNum;
}
document.getElementsByClassName('b-1')[0].onclick = () => {randomInt(10, 100)}


// 222
const randomInt2 = (min, max, elem) => {
    let randNum2 = Math.floor(((max + 1 - min) * Math.random() + min));
    document.querySelector(elem).innerText = randNum2;
}
document.querySelector('.b-2').onclick = () => {randomInt2(10, 100, '.out-2')}


// 333
const randomInt3 = (min, max) => {
    let randNum3 = Math.floor(((max + 1 - min) * Math.random() + min));
    document.querySelector('.out-3').innerText = randNum3;
}
document.querySelector('.b-3').onclick = () => {randomInt3(10, 100)}


// 444
const resDiding = (a, b, c) => {
    if (b === 0) {
        document.querySelector('.out-4').innerText = c;
    } else {
        let res = Math.floor(a / b);
        document.querySelector('.out-4').innerText = res;
    }
}
document.querySelector('.b-4').onclick = () => resDiding(12, 3, 3)


// 555
const resDiding2 = (a, b, c = 0) => {
    const out5 = document.querySelector('.out-5');
    c = 0;
    if (b === 0) {
        out5.innerText = c;
    } else {
        let res = Math.floor(a / b);
        out5.innerText = res;
    }
}
document.querySelector('.b-5').onclick = () => resDiding2(12, 0, 3);


// 666
const arrExpes = (elem, arr) => {
    document.querySelector(elem).innerText = arr;
}
document.querySelector('.b-6').onclick = () => arrExpes('.out-6', [1, 2, 3, 4])


// 777
const arrExpes2 = (elem, arr = 2) => {
    const out7 = document.querySelector(elem)
    if (Array.isArray(arr)) {
        out7.innerText = arr
    } else {
        out7.innerText = false
    }
}
document.querySelector('.b-7').onclick = () => arrExpes2('.out-7', [1, 2, 3, 4])


// 888
const strExpres = (str) => {
    const editStr = str.trim().toLowerCase();
    document.querySelector('.out-8').innerText = editStr;
}
document.querySelector('.b-8').onclick = () => strExpres('   qwew12GFA ')


// 999
const strExpres2 = (str = '') => {
    const editStr = str.trim().toLowerCase();
    const valueQuertSlr = document.querySelector('.out-9')

    if (valueQuertSlr !== null) {
        valueQuertSlr.innerText = editStr;
    }
}
document.querySelector('.b-9').onclick = () => strExpres2('   qwew12GFA ')


// 101010
const countArg = (...arg) => {
    document.querySelector('.out-10').innerText = arg.length;
}
document.querySelector('.b-10').onclick = () => countArg('12', 4, 5, 'rqe')


// 111111
const countArg2 = function(a, b, c, d) {
    let count = 0;
    for (let arg of arguments) {
        if (Number.isFinite(arg)) {count += arg}
    }
    document.querySelector('.out-11').innerText = count;
}
document.querySelector('.b-11').onclick = () => countArg2('12', 4, 5, 'rqe', 11)


// 121212
const countArg3 = (...arg) => {
    let count = 0;
    for (let el of arg) {
        if (Number.isFinite(el)) {count += el}
    }
    document.querySelector('.out-12').innerText = count;
}
document.querySelector('.b-12').onclick = () => countArg3('12', 5, 5, 'rqe')


// 131313
function t13(arr, innerFuncArg) {

    innerFuncArg(arr);
}
function funcArg(arg) {
    document.querySelector('.out-13').innerText = arg
}
document.querySelector('.b-13').onclick = () => t13([1, 2, 'qe', 4], funcArg)


// 141414
const funcGetArgs = (arr, getTransferArgs, classBlockName = '.out-14') => {

    getTransferArgs(arr, classBlockName);
}
const funcTransferArgs = (arg, classBlockName) => {
    document.querySelector(classBlockName).innerText = arg 
}
document.querySelector('.b-14').onclick = () => funcGetArgs([33, 8, 'qwrFSA', 23], funcTransferArgs, '.out-14')


// 151515 even - четный, odd - нечентый
const even = (numb) => {
    document.querySelector('.out-15').innerText = ('Четное ' + numb);
}
const odd = (numb) => {
    document.querySelector('.out-15').innerText = ('Нечетное ' + numb);
}
const inputNumber = (num) => {

    if ((num % 2) === 0) {
        even(num);
    } else {
        odd(num);
    }
}
document.querySelector('.b-15').onclick = () => inputNumber(11)