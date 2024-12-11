input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
function countPositivesSumNegatives(input) {

    let pCount = 0
    let nCount = 0
    let allCount = []
    
    if (input === null || input.length === 0){
        return allCount
    }
    for (let i in input){
        
        if (input[i] > 0 && input[i] !== 0){
            pCount++
        } else if (input[i] < 0){
            nCount += input[i]
        }

    }

    return allCount.concat(pCount, nCount)
}

console.log(countPositivesSumNegatives(input))