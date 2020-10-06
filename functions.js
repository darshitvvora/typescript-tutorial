"use strict";
exports.__esModule = true;
// How to execute
// 1 terminal = tsc functions --watch
// 2 terminal = node functions.js
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
// add(5, '10'); this will throw error
// optional parameter use ?
function add1(num1, num2) {
    return num2 ? (num1 + num2) : num1;
}
console.log(add1(5));
// default parameter
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add2(5));
