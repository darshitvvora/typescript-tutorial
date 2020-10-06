
// How to execute
// 1 terminal = tsc interface --watch
// 2 terminal = node interface.js

interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person){
    return `${person.firstName} ${person.lastName}`;
}

let p = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(fullName(p))

// Optional parameter 
interface Form {
    firstName: string;
    lastName?: string;
}

function getFormValues(form: Form){
    return `${form.firstName} ${form.lastName}`;
}

let p1 = {
    firstName: 'John',
}
console.log(getFormValues(p1))


export default Person
// to use this in other file 
// import {Person} from 'interface';
// class Bar {
//    constructor(person:Person) {}
//}//
