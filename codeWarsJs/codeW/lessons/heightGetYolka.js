function yolka(number){
    let stars = '*'
    let fullYolka = ''
    let iWhile = 1
    let heigth = number

    while (iWhile <= heigth){
        let strYolka = ''

        for(let i = 1; i < number; i++){
            strYolka += ' '
        }

        strYolka += stars
        fullYolka += strYolka  + '\n'

        for(let j = 0; j < 2; j++){
            stars += '*'
        }
        number--
        iWhile++
    }
    return fullYolka
}
console.log(yolka(11))
// высота - 1 будет равна кол-во пробелов у верхней звезды
// 1 7 - 1 6 - 1 5 - 1 4
// ++++++*
// +++++***
// ++++*****
// +++*******
// ++*********
// +***********
// *************