let arr = ['Ivan', 'Ivanov']
let [firstName, lastName] = arr
console.log(firstName, lastName)

let [firsName, lasName] = 'Petr Petrov'.split(' ')
console.log(firsName, lasName)

let [name1, , title] = ['Julius', 'Caesar', 'Consul'] //пропускаем 2 элемент, с помощью Запятой
console.log(name1, title)

let [a, b, c] = 'abc'
// let [one, two, three] = '123' Таким образом тип Стркоа
let [one, two, three] = new Set([1, 2, 3]) //таким образом тип Число
console.log(one, two, three,'\n')

let user = {};
[user.name, user.age] = 'Ivan2 Ivanov2'.split(' ');
console.log(user);

for (let [key, value] of Object.entries(user)) {
    //метод возвращает массив собственных перечисляемых свойств указанного объекта
    console.log(key, value) 
};

//обмен переменными
let variable1 = 'Petr';
let variable2 = 'Jane';
[variable1, variable2] = [variable2, variable1];
console.log(variable1, variable2,'\n'); //поменяли местами

//первые 2 присваиваются, остальные элементы игнорируются
let [nameOne, nameTwo] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(nameOne, nameTwo);
//есои хотим получить первые значения, но и собрать другие, используем Рест оператор '...'
let [nameOneO, nameTwoT, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(nameOneO)
console.log(rest)
console.log(rest[1],'\n')

// значения по умолчанию, могут находится выражения и функции
let [names = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(names);    // Julius (из массива)
console.log(surname, '\n'); // Anonymous (значение по умолчанию)


//Деструктуризация ОБЪЕКТА
let options = {
    title1: "Menu",
    width: 100,
    height: 200,
    title2: 'Menu2'
};
//св-ва присваиваются соответ. переменным
let {title1, width, height} = options;
console.log(title1, width);
console.log(height);
//если хотим присвоить св-во объекта переменной с другим названием
// Двоеточие показывает «что : куда идёт»
let {width: w, height: h, title2} = options;
console.log(w, h);
console.log(title2, '\n');
// width -> w
// height -> h
// title2 -> title2

//Также можем устанавливать св-во по умолчанию
let expr = 'подставлять выражение';
let options2 = {
    title3: "Menu"
};
let {width2 = 100, height2 = expr, title3} = options2;
console.log(title3);  // Menu
console.log(width2);  // 100
console.log(height2,'\n'); // 200

//так же из всех св-ств можем вытаскивать только один, и также использовать Рест оператор
//если не хотим использовать let как в примерах выше, нужны ()
//({title, width, height} = {title: "Menu", width: 200, height: 100});

//Деструктуризация для вложенны объектов
let options4 = {
    size4: {
        width4: 100,
        height4: 200,
    },
    items4: ["Cake", "Donut"],
    extra4: true,
};

// деструктуризация разбита на несколько строк для ясности
let {
    size4: { // положим size сюда
        width4,
        height4,
    },
    items4: [item1, item2], // добавим элементы к items
    title4 = "Menu", // отсутствует в объекте (используется значение по умолчанию)
} = options4;
console.log(title4);  // Menu
console.log(width4);  // 100
console.log(height4); // 200
console.log(item1);  // Cake
console.log(item2,'\n');  // Donut


//Деструктуризация для функций
// мы передаём объект в функцию
let options5 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};
  
// ...и она немедленно извлекает свойства в переменные
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// title, items – взято из options5,
// width, height – используются значения по умолчанию
console.log( `${title} ${width} ${height}` ); // My Menu 200 100
console.log( items ); // Item1, Item2
}
showMenu(options5);
showMenu({}); //все значения - по умолчанию