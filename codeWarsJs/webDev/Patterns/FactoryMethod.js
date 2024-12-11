// паттерны бывают 3 типов:
// структурные, пораждающие и поведенческие
// Factory Method (Фабричный метод) - для создания множества однотипных объектов,
// может состоять из двух классов:
// 1) класса конструктора (может быть несколько)
// 2) класс который вызывает этот конструктор с определенными параметрами

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model
        this.price = price
        this.maxSpeed = maxSpeed
    }
}

class Lada {
    constructor(model, price, maxSpeed) {
        this.model = model
        this.price = price
        this.maxSpeed = maxSpeed
    }
}


class BmwFactory {
    create(type) {
        if (type === 'X5') {
            return new Bmw(type, 105000, 300)
        }
        if (type === 'X6') {
            return new Bmw(type, 110000, 350)
        }
        if (type === 'granta')
            return new Lada(type, 100000, 120)
    }
}

const factory = new BmwFactory()

const x5 = factory.create('X5')
const x6 = factory.create('X6')
const x7 = factory.create('X7')
const granta = factory.create('granta')
console.log(x5);
console.log(x6);
console.log(x7);
console.log(granta);

// есть еще Абстрактная фабрика, 
// которая например фабрика Машина,
// она ссылается на фабрики с подвидами машин (спортивная, семейная, грузовая)
// а эти фабрики уже ссылаюстя на конкретную модель автомобиля