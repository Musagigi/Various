// @ts-nocheck
// const min = 100;
// const max = 200;
// console.log(Math.floor(Math.random() * min + min));

// 111111111
// const unitRanomButton = document.querySelector('.unit1')
const getRandomInt = () => {
    // const unit1QurySelector
    const min = 117;
    const max = 132;
    let randomInt = Math.floor((max + 1 - min) * Math.random() + min);
    document.querySelector('.unit1').innerText = randomInt;
    return randomInt
}
document.querySelector('.unit1').onclick = getRandomInt;


// 2222222222
let width = 100;
const blockWidth = () => {
    width++;
    document.querySelector('.unit2').style.width = width + 'px';
}
document.querySelector('.unit2')?.addEventListener('mousemove', blockWidth);


// 333333333
function getTextHello() {
    document.querySelector('.button').innerText += 'hello';
}
function getTextYear () {
    console.log(getTextHello())
    document.querySelector('.button').innerText += ' 2022';
    
}
const getInnetFunc = () => {
    console.log(getTextYear ())
}
document.querySelector('.button').onclick = getInnetFunc;


// 4444444444 even - четный, odd - нечентый 
const even = (numb) => {
    console.log('Четное ' + numb);
}
const odd = (numb) => {
    console.log('Нечетное ' + numb);
}
const inputNumber = (event) => {
    let inputElementValue = event.target.value;
    let parseElementValue = Number.parseInt(inputElementValue);
    if (Number.isFinite(parseElementValue)) {
        if ((parseElementValue % 2) === 0) {
            even(parseElementValue);
        } else {
            odd(parseElementValue);
        }
    };
}
document.querySelector('.unit3')?.addEventListener('change', inputNumber);


// 5555555555 работает с функциями 111 и 444
const getRandomNumber = () => {
    let getNumb = getRandomInt();
    // const evenOdd = document.querySelector('.unit4').innerText
    console.log(getNumb);
    if (getNumb % 2 === 0) {
        even(getNumb)
        document.querySelector('.unit4').innerText = 'Четное ' + getNumb;
    } else {
        odd(getNumb);
        document.querySelector('.unit4').innerText = 'Нечетное ' + getNumb;
    }
}
document.querySelector('.unit4').onclick = getRandomNumber;


// 6666666666
let num = 91;
const plusNumb = () => {
    // console.log(num++);
    if (num <= 100) {
        document.querySelector('.button2').innerText = num++;   
    }
}
document.querySelector('.button2').onclick = plusNumb;


// 77777777777
let num7 = 0;
const plusNum7 = () => {
    document.querySelector('.button3').innerText = num7++;
    showNumer();
    return num7;
}
const showNumer = () => {
    if (num7 > 9) {
        num7 = 0;
    }
}
document.querySelector('.button3').onclick = plusNum7;


// 8888888888
const inputNum = (event) => {
    let inputNumEvent = event.target.value
    let parseElementValue = Number.parseInt(inputNumEvent)
    let option = parseElementValue
    if (option <= 5) {
        console.log(option)
        document.querySelector('.input2__text').innerText = 'perfect'
    } else {
        document.querySelector('.input2__text').innerText = 'введите другое число'
    }
}
document.querySelector('.input2')?.addEventListener('input', inputNum)


// 9999999999
const arr = [1, 2, 3, 10, 'qwe', 4, 'qfd', 5]

const showArr = (getForArr) => {
    document.querySelector('.unit5').innerText = getForArr
}
const forArr = () => {
    const arrNum = []
    
    for (let el of arr) {
        if (Number.isFinite(el))
        arrNum.push(el)
    }
    showArr(arrNum)
}
document.querySelector('.unit5').onclick = forArr