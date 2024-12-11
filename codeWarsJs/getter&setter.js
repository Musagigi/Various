// Getter & Setter
let obj = {
	_array: ['Первый', 'Второй', 'Третий'],

	get array() {
		return this._array
	},

	get lastElement() {
		return this._array[this._array.length - 1]
	},
	set setArray(value) {
		// Метод set обязательно должен передавать один аргумент — value в нашем случае.
		return this._array = value;
	}
};
// console.log(obj.array);
// console.log(obj.lastElement);
obj.setArray = [1, 2, 3, 4]; // ошибки не будет, т.к. используем set
// console.log(obj.lastElement);



// Флаги и дескрипторы свойств 
// writable — дескриптор, который задает право на изменение свойства. В противном случае доступно только чтение. Дефолтное значение — true,
// enumerable — дескриптор, который разрешает свойству итерироваться в цикле. Дефолтное значение — true,
// configurable — дескриптор, который разрешает удалять свойства и изменять флаги. Дефолтное значение — true.
let car = {
	model: 'Desla',
	autoParking: true,
	maxSpeed: 100
}

// Важно! 
// Свойство, задаваемое вторым аргументом, описывается строкой.
let desc = Object.getOwnPropertyDescriptor(car, 'model');
// console.log(desc);
Object.defineProperty(car, 'model', { value: 'Mopel', writable: false });
car.model = 'test'
// console.log(car);