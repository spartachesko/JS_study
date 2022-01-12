let n = 0; 
let m = 100;
// let n = 2; 
// let m = 5;
// let n = 100; 
// let m = −5;
// let n = -3; 
// let m = −10;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function randomOdd(n1, n2) {
    let min = Math.min(n1, n2);
    min = min + !(min % 2);
    let max = Math.max(n1, n2);
    max = max - !(max % 2);
    return min + random(0, (max - min) / 2) * 2;
}
console.log(randomOdd(n, m));