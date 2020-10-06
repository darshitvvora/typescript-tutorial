"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
// Run tsc main.ts
// Realtime compiling run command tsc main --watch
// Execute javascript file using node main.js for output
// Variable Declarations
// Always use let or const not var
var sum;
var title = 'Demo';
sum = 30;
// Variable Types - 
//Benefits 
// 1. helps static type checking in IDE
// 2. Intellisense for method as per type
// boolean string number any null undefined unknown
var isDemo = true;
var total = 20;
var name = 'Darshit';
var sentence = "My name is " + name + "\nLets learn typescript";
console.log(sentence);
// Two syntaxes for array declaration
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
// Array of mixed type which is called tuple type
var person1 = [1, 'Adam'];
// enum type
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
// any type
var randomVal = 10;
randomVal = 'Adam';
randomVal = true;
// unknown type
// similar to any type however you cannot access any property of unknown type nor can you call or construct them
// type assertion should be used before accessing method
var myVar = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVar))
    console.log(myVar.name);
// myVar();
myVar.toUpperCase();
// Type Inference
var a;
a = 10;
a = true;
var b = 20;
//b= true;
// Mutli type using union of type
var multiType;
multiType = 20;
multiType = true;
