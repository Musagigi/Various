function strongNumber(n){
    sumJ = 1;
    sumStrong = 0;
    index = 0;
    for (let i = 1; i <= n.length; i++){
        for(let j = 1; j <= n[index]; j++){
            sumJ *= j;
        }
        sumStrong += sumJ;
        // console.log(sumStrong)
        sumJ = 1;
        index++
    }
    return sumStrong
}
// strongNumber('145')
console.log(strongNumber('145'))
console.log(typeof(strongNumber))

//Решение для Ката, приходит число
function strong(n) {
    n += ''; //делаем строку
    sumJ = 1;
    sumStrong = 0;
    index = 0;
    for (let i = 1; i <= n.length; i++){
        for(let j = 1; j <= n[index]; j++){
            sumJ *= j;
        }
        sumStrong += sumJ;
        sumJ = 1;
        index++
    }
  return +n === sumStrong ? "STRONG!!!!" : "Not Strong !!" ;
}
console.log(strong(145))