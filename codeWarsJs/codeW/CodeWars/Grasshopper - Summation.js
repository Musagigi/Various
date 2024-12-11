function summation (num = 0){
    let count = 0
    for (let i = 0; i <= num; i++){
        count += i
    }
    return count
}
console.log(summation(4))