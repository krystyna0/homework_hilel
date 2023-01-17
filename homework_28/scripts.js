
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");


//проблема була у тому, що метод push використовуєтся на масиві, 
// а map.keys повертає не масив, тому ми мусили зробити з нього обʼєкт подібний до масиву,
//щоб скористатись методом push