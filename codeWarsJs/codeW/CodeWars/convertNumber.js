//для отметы проверки - @ts-nocheck
//для включения проверки - @ts-check
// () => num = []
// (undefined) => num => [undefined]
const convertInput = (...num) => {
    const input = num[0];
    let result = 0;

    if (input === "-") return NaN;
    if (num.length === 0 || input === null) return 0
    if (input === undefined) return NaN

    let start = 0;
    let sign = 1;
    if (input[0] === '-') {
        start = 1;
        sign = -1;
    }
    let codeOfZero = "0".charCodeAt();
    for (let i = start; i < input.length; i++) {
        let digit = input[i].charCodeAt() - codeOfZero;
        if (digit >= 0 && digit <= 9) {
            result = (result * 10) + digit
        } else {
            return NaN
        }
    }
    return result * sign;
}




// Условия
// Нельзя использовать для перевода строки в число следующее:
//      Number()
//      Number.parseInt()
//      Number.parseFloat()
//      унарный +
//      / * + - **

// можно использовать
// обьекты

// "some".charCodeAt()
// String.fromCharCode()

function test(expected, actual) {
    if ((isNaN(expected) && isNaN(actual)) || expected === actual) return "OK";
    else return `expected: ${expected}\tis not equal to actual:\t${actual}`;
}


let func = convertInput;

console.log("--------tests---------")

console.log(test(Number() /*0*/, func() /*0*/));
console.log(test(Number(undefined) /*NaN*/, func(undefined) /*NaN*/)); // экстра тест, я сам его через костыль неочень прикольно обошел
console.log(test(Number(null), func(null)));
console.log(test(Number("123"), func("123")));
console.log(test(Number("7"), func("7")));
console.log(test(Number("0"), func("0")));
console.log(test(Number("-0"), func("-0")));
console.log(test(Number("-06"), func("-6")));
console.log(test(Number("-7"), func("-7")));
console.log(test(Number("-123"), func("-123")));
console.log(test(Number("-"), func("-")));
console.log(test(Number("--"), func("--")));
console.log(test(Number(""), func("")));
console.log(test(Number("asgad"), func("asgad")));

console.log("----------------------");
