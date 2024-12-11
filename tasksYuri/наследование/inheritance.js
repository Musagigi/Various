// Класс, наследование, цепочка прототипов
// function F() {
//     //?
// }
  
// const x = {}
  
// F.prototype =  x; //что тут происходит? зачем?
  
// const a = new F();
  
// console.log(a.__proto__ === x) // true

'------------------------------------2'
// class Dog {
//    constructor(name) {
//      this.name = name;
//    }
// }
  
// Dog.prototype.bark = function() {
//    console.log(`Woof I am ${this.name}`);
// };
  
// const pet = new Dog('Mara');
 
// pet.bark(); // Woof I am Mara
  
// delete Dog.prototype.bark;
  
// pet.bark(); // TypeError: pet.bark is not a function

'------------------------------------3'
// class A {
//     constructor() {
//     }

//     // В данном случае, стрелочная функция в качестве классового поля 
//     // определяется в контексте класса A, поэтому this внутри стрелочной функции 
//     // будет указывать на экземпляр класса A.
//     arrFunc = () => {
//         console.log('!!!', this === i) // !!! true
//     }

//     // test = function() {
//     //     console.log(this);
//     // }

//     defaultFunc() {
//         console.log(this, i)
//     }
// }

// var i = new A();
// i.arrFunc();
// i.defaultFunc()
// собственно поэтому тут arrFunc является собственным полем i
// console.log(i.hasOwnProperty('arrFunc')); // true 


'------------------------------------4'
// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
// };
  
// const name = 'Lydia';
  
// console.log(name.giveLydiaPizza()) //Just give Lydia pizza already!

'------------------------------------5'
// const a = {x: 1};

// console.log(a.__proto__ === Object.prototype)              // true
// console.log(a.hasOwnProperty('x'))                         // true

// console.log(a.hasOwnProperty('__proto__'))                 // false
// console.log(a.__proto__.hasOwnProperty('__proto__'))       // true


// function X() {}
// const x = new X();

// console.log(x.__proto__.constructor === X);                // true

'------------------------------------6'
// С чем нужно сравнить чтоб было true
// class User {
//     constructor(name){
//         this.name = name
//     }
// }

// const user = new User('Max');

// console.log(user.name.__proto__ === String.prototype);

'------------------------------------7'
// class User {
//     static x = 10
    
//     x = 30
//     xy = 20
    
//     someMethod = () => {
//       const x = 30
//       console.log(this.x);
//       console.log(this.xy)
//     }
    
//     do() {
//       const x = 40
        
//       setTimeout(this.someMethod, 0)
//     }
// }

// const x = 50
// const user = new User()
// user.do()

'------------------------------------8'
// class MyClass extends Object {
//     constructor() {
//        super() //что тут? тут род. конструктор вызывается
//     }

//    #prop = 1; //что тут? тут приватное св-во, не наслед и не достпуны извне
// } 

// MyClass.method = function() { //что тут? тут мы добавляем статический метод
//   console.log('testStaticMethod');
// }

// const x = new MyClass();
// console.log(x.#prop) //что тут? тут ошибка, приватные поля не доступны

'------------------------------------9'
// class MyClass {
//     b = 5

//     constructor(a, b) {
//         this.a = a;
//     }
// }

// class Class extends MyClass {
//     constructor(a, b, c) {
//         super(a, b);
//         this.c = c;
//     }

//     logABC() {
//         console.log(typeof this.a) // 1 string
//         console.log(typeof this.b) // 5 number поля наслед, b=5, потому что в конструкторе его нет
//         console.log(typeof this.c) // 3 string
//     }
// }

// const o = new Class('1', "2", "3");
// o.logABC()

'------------------------------------10'
// Создание объекта
// delete, hasOwnProperty, setPrototypeOf, in, instanceof
// function Sub() {
//     this.grad = "Moscow";
// }

// function Person() {
//     this.name = "John";
//     this.age = 25;
//     this.city = "New York";
// }

// let sub = new Sub();
// let person = new Person();
// Object.setPrototypeOf(person, sub);

// // // Удаление свойства из объекта
// delete person.city;
// delete person.grad;
// console.log('person.city', person.city)  // undefined
// console.log('person.grad', person.grad)  // 'Moscow'

// // hasOwnProperty содержит ли объект указанное свойство в качестве собственного свойства объекта
// // // Проверка наличия свойства в объекте с помощью hasOwnProperty
// console.log('hasOwnProperty name', person.hasOwnProperty("name"));  // true
// console.log('hasOwnProperty city', person.hasOwnProperty("city"));  // false
// console.log('hasOwnProperty grad', person.hasOwnProperty("grad"));  // false

// // // Проверка существования свойства в объекте с помощью оператора in
// console.log('name in', "name" in person);  // true
// console.log('city in', "city" in person);  // false
// console.log('grad in', "grad" in person);  // true

// // // Проверка принадлежности объекта к определенному классу с помощью instanceof
// console.log('person instanceof Object', person instanceof Object);  // true
// console.log('Person instanceof Object', Person instanceof Object);  // true
// console.log('instanceof Array', person instanceof Array);   // false
// console.log('instanceof Sub', person instanceof Sub);   // true


'------------------------------------11'
// прототипное наследование и работа delete
/*
Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму.
Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").

Объекты-хомяки должны иметь массив food для хранения еды и метод found, 
который добавляет к нему еду.

Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым 
становится и второй тоже.

В чём дело? Как поправить?
*/
// function Hamster() { 
//   this.food = [] // добавить еду каждому экземпляру, а не через прототайп
// }

// // Hamster.prototype.food = [ ]; // пустой "живот"

// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };

// // Создаём двух хомяков и кормим первого
// speedy = new Hamster();
// lazy = new Hamster();

// speedy.found("яблоко");
// speedy.found("орех");

// console.log(speedy.food.length); // 2
// console.log(lazy.food.length);   // 2 (!??) // должно быть 0


'------------------------------------12' 
// // super
// class Foo {
//     constructor() {
//         this.id = 'foo';
//         this.print();
//     }

//     print() {
//         console.log('foo' + this.id);
//     }

//     arrowPrint = () => { 
//         console.log('arrow' + this.id);
//     }
// }

// class Bar extends Foo {
//     constructor() {
//         super();       // barfoo
//         this.id = 'bar';
//         this.print();  // barbar
//         super.print(); // foobar
//         // super.arrowPrint(); // ошибка, у стрелоч фун. нет super!!!
//         this.arrowPrint(); // arrowbar
//     }

//     print() {
//         console.log('bar' + this.id);
//     }
// }

// const p = new Bar();

//1) все стелочные функции классов с любого уровня оказываются в экземпляре
//2) ну собственно потому что присваиваются в поле класса
