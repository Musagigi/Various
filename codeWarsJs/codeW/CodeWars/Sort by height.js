function sort_arr(array) {

    let pArray = []
    let newArray = []
    
    for (let z = array.length; z--;) {

        if (array[z] !== -1) {
            pArray.push(array[z])
        }
    }
    pArray.sort((a, b) => a - b)
    // console.log(pArray)

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === -1) {
            newArray.push(array[i])
            
        } else if (array[i] !== -1) {

            for (let j = 0; j < pArray.length; j++){

                if (pArray[j]) {
                    newArray.push(pArray[j])
                    delete pArray[j]
                    break
                }
            }
        }
    }
    return newArray
}

console.log(sort_arr([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(sort_arr([11, 16, 2, 2, 4, 9]))