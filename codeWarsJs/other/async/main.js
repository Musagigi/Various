// const promise = new Promise(function (resolve, reject) {
// const data = getData() // делаем асинхронную операцию: запрос в БД, API, etc.
// resolve(data) // переводим промис в состояние fulfilled. Результатом выполнения будет объект data
// })
// 
// const errorPromise = new Promise(function (resolve, reject) {
// reject(new Error('ошибка')) // переводим промис в состояние rejected. Результатом выполнения будет объект Error
// })


function loadImage(src) {
	return new Promise((resolve, reject) => {
		let img = document.createElement('img')
		img.src = src

		img.onload = () => {
			resolve(img)
		}

		img.onerror = error => {
			reject(error);
		}
	})
}

loadImage('./i.webp')
	.then((img) => {
		document.body.append(img)
	})
	.catch((error) => {
		console.log(error);
	})
