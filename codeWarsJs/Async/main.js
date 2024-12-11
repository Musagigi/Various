function loadTitle(title, callback) {
	const test = document.querySelector('.test')
	const h1 = document.createElement('h1')
	h1.innerText = title
	h1.onload = () => callback(h1)
	h1.onload()
	test.append(h1)
}

loadTitle('TEST', function (h1) {
	console.log(h1);
	h1.innerText = 'zamena'
})
