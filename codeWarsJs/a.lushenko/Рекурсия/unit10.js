//@ts-nocheck
// Task 1
// Функция принимает число n. Напишите рекурсивную функцию r1,
// которая выводит числа от n до нуля в out-1. Разделитель - пробел.

function t1(n) {
    let out = '';

    function r1(z) {
        out += ' ' + z;
        if (z !== 0) return r1(z - 1);
        return document.querySelector('.out-1').textContent = out;
    }
    return r1(n);
}
document.querySelector('.b-1').addEventListener('click', () => {
    t1(5);
});


// Task 2
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до 
// введенного числа в out-2 с шагом 2. Разделитель - пробел.
function t2(n) {
    let out = '';
    let count = 0;

    function r2(z) {
        out += ' ' + count;
        if (z > 1) {
            count += 2;
            return r2(z - 2);
        }
        return document.querySelector('.out-2').textContent = out;
    }
    return r2(n);
}
document.querySelector('.b-2').addEventListener('click', () => {
    t2(5);
});


// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число 
// в диапазоне от 0 до 100. Решите задачу рекурсивно. 
// Для генерации случайных чисел используйте функцию randomInteger.
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function t3(arg) {
    let ranNum = randomInteger(0, 100);
    console.log(ranNum);

    function returnNum(argEven) {
        if (ranNum % 2 === 0) return argEven;
        return 'odd';
    }
    return returnNum(arg);
}
document.querySelector('.b-3').addEventListener('click', () => {
    document.querySelector('.out-3').textContent = t3('even');
});


// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и 
// проверяет его наличие в массиве ar4. Если число уже есть - выполняет генерацию заново. 
// Если нет - возвращает это число.
let ar4 = [3, 4, 6, 7, 8];

function t4() {
    let ranNum2 = randomInteger(0, 10);
    console.log(ranNum2);

    function returnNum2(numb) {

        if (ar4.includes(numb)) returnNum2(randomInteger(0, 10));
        else return ranNum2 + ' нет в массиве';
    }
    return returnNum2(ranNum2);
}
document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.out-4').textContent = t4();
});


// Task 5.
// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger) и
// добавляем его в массив ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу, 
// если меньше - запускается заново. Возвращает массив ar5 по результату работы.
function t5() {
    let ar5 = [];
    let count = 0;
    let randNum = randomInteger(0, 10);

    function getArr(numb) {
        count += numb;
        ar5.push(numb);

        if (count > 30) {
            console.log(count);
            return ar5;
        }
        else {
            return getArr(randomInteger(0, 10));
        }
    }
    return getArr(randNum);
}
document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t5();
});


// Task 6.
// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res. 
let ar6 = [
    5,
    [3, 4, 'h'],
    [[5, 6, 'b'], ['c', 7, [8]]],
    9,
    [[[[[10, 'i', 11, [12]]]]]]
];
let ar6_res = [];

function t6(arr) {
    for (let el of arr) {
        if (Number(el)) {
            ar6_res.push(el);
        }
        else if (Array.isArray(el)) {
            t6(el);
        }
    }
    return ar6_res;
}
document.querySelector('.b-6').addEventListener('click', () => {
    t6(ar6);
    document.querySelector('.out-6').textContent = ar6_res;
});


// Task 7.
// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res. 
let ar7 = [
    'hi',
    ['hii'],
    [['hiii']],
    [[['hiiii']]],
    ['i', [[[[[['hi']]]]]]]
];
let ar7_res = [];

// ГРЯЗНАЯ ФУНКЦИЯ 102 шага
// function t7(arg) {
//     arg.forEach(element => {
//         if (typeof element === "string") ar7_res.push(element);
//         else if (Array.isArray(element)) t7(element);
//     });
//     // return ar7_res;
// }


// ЗАМЫКАНИЕ 105 шагов
function t71(ar) {
    let arr_temp = [];

    function t71_rec(arg) {
        arg.forEach(element => {
            if (typeof element === "string")
                arr_temp.push(element);
            else if (Array.isArray(element))
                t71_rec(element);
        });
    }
    t71_rec(ar);
    return arr_temp;
}

// ЧИСТАЯ ФУНКЦИЯ 140+ шагов
// function t7_pure(arg) {
//     let arr = [];
//     arg.forEach(element => {
//         if (typeof element === 'string')
//             arr.push(element);
//         else if (Array.isArray(element))
//             arr.push(...t7_pure(element));
//     });
//     return arr;
// }

document.querySelector('.b-7').addEventListener('click', () => {
    ar7_res = t71(ar7);
    document.querySelector('.out-7').textContent = ar7_res;
});


// Task 8.
// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и 
// проверяет если сумма первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число. 
// Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, 
// потому что 1+2 не равно 3+5. А вот число 7180  - удовлетворяет.
function t8() {
    let numOne = 0;
    let numTwo = 0;
    let outNum = 0;
    let randomNum = randomInteger(1000, 9000);

    function sumNum(randomNum) {
        let ArrNum = String(randomNum).split('').map(el => +el);
        numOne = ArrNum[0] + ArrNum[1];
        numTwo = ArrNum[2] + ArrNum[3];
        console.log(randomNum);

        if (numOne === numTwo) {
            console.log(randomNum + ' answer');
            outNum = randomNum;
        }
        else { sumNum(randomInteger(1000, 9000)); };
    }
    sumNum(randomNum);
    return outNum;
}

document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').textContent = t8();
});


// Task 9.
// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age) 
// пользователей прописанных в ar9.
let ar9 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {

            },
            "sniezko": {
                age: 45
            }
        }
    }
};

let ar9_res = [];

function t9(person) {
    if (person.age !== undefined) {
        ar9_res.push(person.age);
    }
    if (person.parent !== undefined) {
        for (let parents in person.parent)
            t9(person.parent[parents]);
    }
}

for (let k in ar9) {
    t9(ar9[k]);
}

document.querySelector('.b-9').addEventListener('click', () => {
    // for (let k in ar9) {
    //     t9(ar9[k]);
    // }
    document.querySelector('.out-9').innerHTML = ar9_res;
});

// Task 10.
// Напишите рекурсивную функцию t10, которая создает массив ar10_res 
// фамилии людей у которых нет информации о возрасте.
let ar10 = {
    "ivanov": {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45,
                parent: {}
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            "lionenko": {}
                        }
                    },
                }
            }
        }
    },
    "kostenko": {
        age: 56,
        parent: {
            "ignatenko": {
                parent: {
                    "sidorenko": {}
                }
            },
            "sniezko": {
                age: 45
            }
        }
    }
};

// let ar10_res = [];

// function t10(k, obj) {

//     if (obj.age === undefined) {
//         ar10_res.push(k);
//     }
//     if (obj.parent !== undefined) {
//         for (let pares in obj.parent) {
//             t10(pares, obj.parent[pares]);
//         }
//     }
// }

// function t10_pure(k, obj) {
//     let arr = [];
//     if (obj.age === undefined) {
//         arr.push(k);
//     }
//     if (obj.parent !== undefined) {
//         for (let pares in obj.parent) {
//             arr.push(...t10_pure(pares, obj.parent[pares]));
//         }
//     }
//     return arr;
// }

document.querySelector('.b-10').addEventListener('click', () => {
    let ar10_res = [];

    function t10(k, obj) {
        if (obj.age === undefined) {
            ar10_res.push(k);
        }
        if (obj.parent !== undefined) {
            for (let pares in obj.parent) {
                t10(pares, obj.parent[pares]);
            }
        }
    }
    for (let key in ar10) {
        t10(key, ar10[key]);
    }

    // for (let key in ar10) {
    //     ar10_res.push(...t10_pure(key, ar10[key]));
    // }
    document.querySelector('.out-10').innerHTML = ar10_res;
});