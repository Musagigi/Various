let ar102 = {
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
                        },
                    },
                },
            },
        },
    },
};
// console.log(ar102.ivanov.parent)
if (ar102.ivanov.parent !== undefined) {
    // console.log(ar102.ivanov.parent)
    for(let pares in ar102.ivanov.parent) {
        console.log(pares, ar102.ivanov.parent[pares])
    }
}