function countBy(x, n) {
    let z = [];
    // z.push(x)
    for (let i = x; z.length < n; i++){
        if (i % x === 0){
            z.push(i);
        }
    }
    return z;
  }
console.log(countBy(1, 10));