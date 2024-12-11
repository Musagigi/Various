/* Создаем элементы при помощи createElement и присваиваем их переменным, 
так получаются теги, к которым мы можем обращаться при помощи переменных
При помощи appendCgild мы засовываем одни переменные в другие
При помощи classList.add() создаем класс в указанной переменной к которой присвоен тег */

const $player1 = document.createElement('div'); //создали тег div с переменной player1
// $player1.innerText = 'Scorpion'; //в тег div засунули текст
$player1.classList.add('player1'); //добавляем класс нашему тегу div с именем player1

const $p = document.createElement('p'); //создаем тег p
$p.innerText = 'Scorpion'; //добавляем текст в тег p
$player1.appendChild($p); //добавляем тег p с текстом в тег div с классом player1

const $img = document.createElement('img'); //создаем тег img
$img.src = 'https://www.fightersgeneration.com/characters3/scorpion-mk3-fix2.gif'; //добавляем туда фотом
$player1.appendChild($img); //добавляем тег img в тег div с классом player1

const $root = document.querySelector('.root'); //обращаемся к указанному в скобках селектору при помощи querySelector
$root.appendChild($player1) //теперь тег div player1 помещаем в div с классом root