function getCount(str) {
    a = 'aeiou'
    count = 0

    for (let i = str.length; i--;){

        if (a.includes(str[i])){
            count++
        }
    }
    return count;
  }

console.log(getCount('aeiouwerw'))