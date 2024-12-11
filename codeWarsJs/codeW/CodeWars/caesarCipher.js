/**
 *
 * @param {number} key - ключ (сдвиг)
 * @param {string} text - исходный текст
 *
 */
 function caesar(key, text) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    // ваш код
    alphabet = alphabet.split("");
    text = text.toUpperCase().split("");
    key = key % 100;
    
  
    for (let el of text) {
      // в цикле перебираем каждый символ
      let nowIndexKey = alphabet.indexOf(el) + key;
      
      if (alphabet.includes(el)) {
        // result.push(alphabet[nowIndexKey]); // баг ""
        if (nowIndexKey >= 26) {
          result += alphabet[nowIndexKey - 26];
        } else if (nowIndexKey < 0) {
          result += alphabet[nowIndexKey + 26];
        }
      } else {
        result += el;
      }
    }
  
    return result;
  }
  // Условия
  // буквы нижнего регистра переводятся в верхний
  // цифры пробелы и пунктуация игнорируются
  // ДОПОЛНИТЕЛЬНО:
  // ключ может быть больше 26 и меньше -26
  // написать взлом шифра цезаря)
  // зашифровали
  let encrypted = caesar(127, "Hello, 123 World");
  console.log(encrypted);
  
  // расшифровали
  let decrypted = caesar(-127, encrypted);
  console.log(decrypted);
  