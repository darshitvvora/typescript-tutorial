"use strict";
// How to execute
// 1 terminal = tsc interface --watch
// 2 terminal = node interface.js
exports.__esModule = true;
function fullName(person) {
    return person.firstName + " " + person.lastName;
}
var p = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(fullName(p));
function getFormValues(form) {
    return form.firstName + " " + form.lastName;
}
var p1 = {
    firstName: 'John'
};
console.log(getFormValues(p1));
// to use this in other file 
// import {Person} from 'interface';
// class Bar {
//    constructor(person:Person) {}
//}//
