// Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
// Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
// Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
// Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
// Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0.


function AreaRectangle(x1,x2,y1,y2){
    let result = (x2-x1)*(y2-y1)
    return Math.abs(result)
};

// let x1 = 2;
// let y1 = 3;
// let x2 = 10;
// let y2 = 5;

// let x1 = 10;
// let y1 = 5;
// let x2 = 2;
// let y2 = 3;

// let x1 = -5;
// let y1 = 8;
// let x2 = 10;
// let y2 = 5;

// let x1 = 5;
// let y1 = 8;
// let x2 = 5;
// let y2 = 5;

let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

console.log(AreaRectangle(x1,x2,y1,y2));