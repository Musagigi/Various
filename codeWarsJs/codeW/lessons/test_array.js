const message = ['hello', true, 2021];
console.log(message);
console.log(message[0]);
console.log(message[100]);

message.push('world');  // push добавляет эллемент
console.log(message);

const str = message[0] + ' ' + message[3];
console.log(str);