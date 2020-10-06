
// How to execute
// 1 terminal = tsc class --watch
// 2 terminal = node class.js

class Emp {
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    greet(){
        console.log(`Good Morning ${this.name}`);
    }
}

let emp1 = new Emp('David');
emp1.greet();


// inheritance
class Manager extends Emp{
    constructor(managerName: string){
        super(managerName);
    }

    delegate(){
        console.log(`${this.name} delegates task`);
    }
}

let m1 = new Manager('Alice');
m1.greet()
m1.delegate()

// access modifiers getter setter
class Car {
    private color: string;
    constructor(private _color?: string){

    }

    get Color(){
        return this._color;
    }

    set Color(color: string){
        this._color = color;
    }
}

const newCar = new Car();
newCar.Color = 'red';
console.log(newCar.Color);