// Старый синтаксис, с помощью Функций Конструкторов
function Book2(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages

	// для создания метода нужно явно прописыать this и function
	// используя class это можно откинуть, написав просто getInfo() {...}
	this.getInfo = function () {
		return `Книга ${this.title}, автор - ${this.author}`
	}
}
let q = new Book2('t', 'ttt', 22)
// Старый синтаксис, с помощью Функций Конструкторов

class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages
	}
	getInfo() {
		return `Book: ${this.title}, author: ${this.author}`
	}
}

let book1 = new Book('bok1', 'aut1', 200)
let book2 = new Book('bok2', 'aut2', 210)
// console.log(book2.getInfo());


// Статические свойства и методы
// Статические свойства и методы предполагают инициализацию свойств и методов в рамках создаваемого класса. Они позволяют создать единые для всех объектов класса свойства и методы. Как правило, присваиваются классу, а не объектам, которые в него входят.

// Самым простым примером использования таких свойств и методов является класс Math. При этом мы ни разу не создавали экземпляр этого класса, но постоянно используем его методы — например, Math.round(3.333).
class Pet {
	// Важно! 
	// Мы не сможем обратиться к статическим методам и свойствам через экземпляр класса.
	static user = 'человек'
	static message(user) {
		return `домашнее животное принадлежит пользователю ${user || Pet.user}`;
	}
	// Резюме: статические методы и свойства используются только в рамках задаваемого класса и не относятся ни к одному объекту, который будет являться его экземпляром.
};
// console.log(Pet.user);
// console.log(Pet.message('myUser'));


// 4. Как описать тип нашего объекта, как его формализовать, используем - class
class User {
	name;
	age;

	constructor(name, age = 0) {
		this.name = name
		this.age = age
	}

	showUserInfo() {
		console.log(`Name: ${this.name}, age: ${this.age}`);
	}
}
// объекты созданные при помощи класса, называются экземплярами класса, 
// по англ-кому - instance 
const jo = new User('jo')
const bo = new User('bo', 70)
// оператор instanceof проверят, что некий Объект является экземпляром Класса
function foo(obj) {
	if (obj instanceof User) {
		obj.showUserInfo()
	}
}
// foo(jo)

// 4.1 Наследование от класса, extends - расширять
class Admin extends User {
	role;

	constructor(name, age, role) {
		// у конструктора который наследуется, ОБЯЗАТЕЛЬНО должна вызываться
		// Родительская реализация
		super(name, age = 12);
		this.role = role;
	}

	showUserInfo() {
		// чтобы унаследовать внутри своего метода с ТАКИМ ЖЕ ИМЕНЕМ, метод родителя
		// нужно ключевое слово 'super'
		console.log('i am a admin');
		super.showUserInfo()
	}

	deleteUser(id) {
		//...
	}
}
const pet = new Admin('pet', 0, 'admin')
// console.log(pet);
// pet.showUserInfo();


class Foo {
	#bla = 1;
}
// console.log(new Foo.#bla);


// 1) Оператор extends говорит, что все свойства и методы мы будем наследовать у родительского класса
// 2) Когда мы работаем с конструктором нового класса, у нас появляется функция super() — вызов родительского конструктора, в который мы передаем свойства родительского конструктора. Если мы не вызовем super-конструктор, наш класс не заработает! И, самое главное, — вызывать родительский конструктор надо строго до объявления свойств дочернего класса.
// 3) Если нужно поменять метод, созданный в родительском классе, его нужно просто описать в дочернем классе (перезаписать). Таким же образом мы можем перезаписать свойства дочернего класса, задав их после super-конструктора.


class Rectangle {
	constructor(width, height) {
		this.width = width
		this.height = height
		this.figureName = 'прямоугольник'
	}

	getPerimetr() {
		return (this.width * 2) + (this.height * 2)
	}

	getArea() {
		return (this.width * this.height)
	}

	getInfo() {
		return `Figure: ${this.figureName} ${this.width}x${this.height} Perimetr: ${this.getPerimetr()}, Area: ${this.getArea()}`
	}
}

// console.log(new Rectangle(2, 8).getInfo());

class Square extends Rectangle {
	constructor(side) {
		super(side, side)
		this.figureName = 'квадрат'
	}
}

let sq = new Square(5)
// console.log(sq.getInfo());


let namee = 'pizza'
let tel = '89371909090'

class Delivery {

	constructor(namee, tel) {
		this.namee = namee
		this.tel = tel
		this.validPhone = this.tel[0] === '+' ? true : false
	}
}

let f = new Delivery(namee, tel)
// console.log(f);

class Permission {
	constructor(role) {
		this.role = role
	}
}

class Us extends Permission {
	constructor(role, name) {
		super(role)
		this.name = name
	}
}
let adn = new Us('admin', 'jal')
// console.log(adn);