function getMaxSubSum(arr) {
    console.log(arr.length)
    let maxNum = -Infinity

    for (let start = 0; start < arr.length; start++) {

        for (let end = start; end < arr.length; end++) {
            let sumArr = 0

            for (let k = start; k <= end; k++) {
                sumArr += arr[k]
            }
            if (maxNum < sumArr) {
                maxNum = sumArr
            }
        }  
    }
    return maxNum
    
}

console.log(getMaxSubSum([1, 2, 3, -1, 2, 3, -9, 11, -1, 2, 3, -9, 11, -1, 2, 3, -9, 11, 100, -9, 2, -3, 5, 100, -9, 2, -3, 5, 100, -9, 2, -3, 5 , 100, -9, 2, -3, 5, 2, -1, 2, 3, -9]))

// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }

console.log(getMaxSubSum([2, -1, 2, 3, -9]))
