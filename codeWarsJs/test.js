let num = 2
let res = ''
for (let i = 3; i--;) {
	num **= 2
	if (i !== 0) {
		res += num + ' '
	} else {
		res += num
	}

}
// console.log(res);

data = "asd"
function getNumber(data) {
	return isFinite(data) ? +data : 0
}
// console.log(getNumber(data));

const hero = {
	heroName: 'Герой #1',
	/* ... */
	sayNormal(message) {
		console.log(`${this.heroName}: ${message}`);
	},
	sayLouder(message) {
		console.log(`${this.heroName}: ${message.toUpperCase()}`);
	}
}

function say(message, isLouder) {
	let t = new Object(hero) // посмотреть создает новый объект или копию
	isLouder ? t.sayLouder(message) : t.sayNormal(message);
	// let sayFn = isLouder ? hero.sayLouder : hero.sayNormal;
	// sayFn = sayFn.bind(hero);

	// sayFn(message);
}

say("Привет!", true);

