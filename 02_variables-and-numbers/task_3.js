let n = 0; 
let m = 100;
// let n = 2; 
// let m = 5;
// let n = 100; 
// let m = −5;
// let n = -3; 
// let m = −10;
// Поиск случайного числа

const random = (max) => Math.floor(Math.random() * (max - 1));

let min = Math.min(n, m);
min = min + !(min % 2);
let max = Math.max(n, m);
max = max - !(max % 2);

let result = min + random((max - min) / 2) * 2;

console.log(result);

