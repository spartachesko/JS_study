// Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
// Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
// Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.

let a = 13.123456789;
let b = 2.123;
let n = 5;

let a = 13.123456789;
let b = 2.123;
let n = 5;

let a = 13.123456789;
let b = 2.123;
let n = 5;

function CalcFraction_a(a,n){
    result_a =  (a - Math.floor(a))*(Math.pow(10,n));
    

    return Math.floor(result_a)
}

function CalcFraction_b(b,n){
    result_b =  (b - Math.floor(b))*(Math.pow(10,n));
    return Math.floor(result_b)
}

let a_fract = CalcFraction_a(a,n);
let b_fract = CalcFraction_b(b,n);

console.log(a_fract);
console.log(b_fract);

console.log('a > b', a_fract > b_fract);
console.log('a < b', a_fract < b_fract);
console.log('a >= b', a_fract >= b_fract);
console.log('a <= b', a_fract <= b_fract);
console.log('a === b', a_fract === b_fract);
console.log('a ≠ b', a_fract !== b_fract);