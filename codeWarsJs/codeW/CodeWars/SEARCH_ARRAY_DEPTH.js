const myArr = [[[[[[]]]]]];
const myArrTwo = [1, 2, [3, [1, 3, [5, 6, [9, [4, 5,[7, 1, [3]]]]]]], [4, [5, [8, 9]], [1, 2]]];

const getAmountArr = (arr) => {
    let maxDepth = 1

    for (let el of arr) {

        if (Array.isArray(el)) {
            // console.log(el);
            const resAmountArr = getAmountArr(el) + 1;
            if (resAmountArr > maxDepth) maxDepth = resAmountArr;
        }
    }
    return maxDepth;
}

const res = getAmountArr(myArr)
console.log(res)