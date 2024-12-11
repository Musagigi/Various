// console.log(recycledGarbage[1])
const input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"},
];

function recycle(array){
    const output = [[],[],[],[]]

    for (let key in array){

        if (Object.keys(array[key]).length === 2){
            if (array[key].material === 'paper'){                
                output[0].push(array[key].type);
            } else if (array[key].material === 'glass'){
                output[1].push(array[key].type)
            } else if (array[key].material === 'organic'){
                output[2].push(array[key].type)
            } else if (array[key].material === 'plastic'){
                output[3].push(array[key].type)
            }
        } else if (Object.keys(array[key]).length === 3){
            if (array[key].material === 'paper'){                
                output[0].push(array[key].type);
            } else if (array[key].secondMaterial === 'paper'){
                output[0].push(array[key].type);
            }
            if (array[key].material === 'glass'){
                output[1].push(array[key].type)
            } else if (array[key].secondMaterial === 'glass'){
                output[1].push(array[key].type)
            }
            if (array[key].material === 'organic'){
                output[2].push(array[key].type)
            } else if (array[key].secondMaterial === 'organic'){
                output[2].push(array[key].type)
            }
            if (array[key].material === 'plastic'){
                output[3].push(array[key].type)
            } else if (array[key].secondMaterial === 'plastic'){
                output[3].push(array[key].type)
            }
        }
    }
    
    return output
}

console.log(recycle(input))