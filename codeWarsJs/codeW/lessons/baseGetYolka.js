function getYolka(number){
	let allYolka = '';
	let strYolka = '';
	let space = '';
	let stars = '*';
	let result = (number - 1) / 2; // получаем начальное кол-во пробелов
	let i = result + 1; // получаем высоту елки

	if (number % 2 !== 0 && number > 1){

		while (i <= number){
			// создаем пробелы
			for (j = 0; j < result; j++){
				space += '+';
			}
			// выводим елку
			strYolka = space +  stars + '\n';
			allYolka += strYolka;
			// создаем звезды
			for (k = number - 2; k < number; k++){
				stars += '*';		
			}
			space = '';
			result -= 1; 
			i++;
		}
	} else {
		return "нужно нечетное число > 1";
	}
return allYolka;
};
console.log(getYolka(7))

// function getYolka(number){
// 	let allStars = '';
// 	let strStars = '';
// 	let space = '';
// 	let stars = '*';
// 	let result = (number - 1) / 2; // получаем начальное кол-во пробелов
// 	let i = result + 1; // получаем высоту елки

// 	if (number % 2 !== 0 && number > 1){

// 		while (i <= number){
// 			// создаем пробелы
// 			for (j = 0; j < result; j++){
// 				space += '+';
// 			}

// 			// выводим елку
// 			console.log(space + stars)

// 			// создаем звезды
// 			for (k = number - 2; k < number; k++){
// 				stars += '*';		
// 			}
// 			space = '';
// 			result -= 1; 
// 			i++;
// 		}

// 		while (i <= number){
// 			rombStars = '';
// 			for (j = 0; j < number - 2; j++){
// 				rombStars += '*'
// 			}
// 			number -= 2;
	
// 			for (k = 0; k < result - 2 ; k++){
// 				rombSpace += '+';
// 			}
// 			console.log(rombSpace + rombStars)
// 			i++;
// 		}

// 	} else {
// 		return "нужно нечетное число > 1";
// 	}
// };
// getYolka(7)