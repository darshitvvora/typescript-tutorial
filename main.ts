export {}
let message = 'Welcome back';
console.log(message);

// Run tsc main.ts
// Realtime compiling run command tsc main --watch
// Execute javascript file using node main.js for output



// Variable Declarations
// Always use let or const not var
let sum;
const title = 'Demo';
sum = 30;


// Variable Types - 
//Benefits 
// 1. helps static type checking in IDE
// 2. Intellisense for method as per type
// boolean string number any null undefined unknown

let isDemo: boolean = true;
let total: number = 20;
let name: string = 'Darshit';
let sentence: string = `My name is ${name}
Lets learn typescript`;
console.log(sentence);
// Two syntaxes for array declaration
let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4];

// Array of mixed type which is called tuple type
let person1: [number, string] = [1,'Adam'];

// enum type

enum color {red = 5, green, blue};
let c: color = color.green
console.log(c)

// any type
let randomVal: any = 10;
randomVal = 'Adam';
randomVal = true;

// unknown type
// similar to any type however you cannot access any property of unknown type nor can you call or construct them
// type assertion should be used before accessing method
let myVar: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
    typeof obj === 'object' &&
    'name' in obj
}
if(hasName(myVar))
    console.log(myVar.name);
// myVar();
(myVar as string).toUpperCase()

// Type Inference
let a;
a=10;
a=true;

let b=20;
//b= true;

// Mutli type using union of type

let multiType: number | boolean;
multiType = 20;
multiType = true;

