export {}

// How to execute
// 1 terminal = tsc functions --watch
// 2 terminal = node functions.js


function add(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(add(5, 10));
// add(5, '10'); this will throw error

// optional parameter use ?
function add1(num1: number, num2?: number): number{
    return num2? (num1 + num2): num1;
}

console.log(add1(5));

// default parameter
function add2(num1: number, num2: number = 10): number{
    return num1 + num2;
}

console.log(add2(5));