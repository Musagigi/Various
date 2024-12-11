/* числовые ключи преобразуются в строку
в свойства объекта, можно пихать еще один объект, также,
создавать функции */

 const player = {
    name: 'Scorpion',
    hp: 100,
    nameName: true,
    100: 'stroka',
    $: true,
    _: true,
    '1name что-то длинное': true,
    attack: function(){
      console.log('Fight...');
    },
 };

 console.log(player.hp);
 console.log(player['1name что-то длинное']);
 console.log(player[100]);
 console.log(player['100']);
 const call = player.name;
 console.log(call);

 const count = 100;
 console.log(player[count]);

 player.weapon = 'Kunai';
 console.log(player);

 player.hp = player.hp - 20;
 console.log(player.hp);
 delete player["1name что-то длинное"];
 console.log(player);
 player.attack();