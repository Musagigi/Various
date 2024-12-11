function toBase(number, base=2) {
    let strRemain = []
    const digitToChar = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    if (number === 0) return '0'

    for (let i = number; i !== 0;) {
        let remainder = i % base
        // console.log(remainder, 'test')
        strRemain.push(digitToChar[remainder])
        i = Math.floor(i / base)
        // console.log(i, 'test')
    }
    return strRemain.reverse().join('')
}

console.log(toBase(124, 16))


// console.log(124..toString(2))
// let x = 0b1111100; // bin
// let y = 0o101; // oct
// let z = 101;   // dec
// let w = 0x101; // hex
// console.log(x, y, z, w)
// function test(expected, actual) {
//     if ((isNaN(expected) && isNaN(actual)) || expected === actual) return "OK";
//     else return `expected: ${expected}\tis not equal to actual:\t${actual}`;
// }


// console.log("--------tests---------")

// console.log(test(0..toString(2), toBase(0)))
// console.log(test(12..toString(2), toBase(12)))
// console.log(test(1337..toString(2), toBase(1337)))

// console.log("----------------------");