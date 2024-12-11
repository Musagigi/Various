//@ts-nocheck
/**
 * 
 * @param {string} input - строка, которую нужно превратить в число 
 * @param {number} base - основание системы счисления
 * @returns - возвращает число
 * 
 */
const convertInput = (input, base) => {
    let result = 0;
    input = input.toUpperCase();
    const objDigits = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15,
    }

    if (input === "-") return NaN;
    if (input === null) return 0;
    if (input === undefined) return NaN;
    
    if (input[0] === '-') {
        for (let i = 1; i < input.length; i++) {
            result = (result * base) + objDigits[input[i]]
        }
        return result * - 1
    }
    for (let i = 0; i < input.length; i++) {
        result = (result * base) + objDigits[input[i]]
    }
    return result
}

let num = convertInput('7c', 16); 
console.log(num)
console.log(typeof num)
