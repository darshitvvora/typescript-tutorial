// How to execute
// 1 terminal = tsc class --watch
// 2 terminal = node class.js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Emp = /** @class */ (function () {
    function Emp(name) {
        this.name = name;
    }
    Emp.prototype.greet = function () {
        console.log("Good Morning " + this.name);
    };
    return Emp;
}());
var emp1 = new Emp('David');
emp1.greet();
// inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegate = function () {
        console.log(this.name + " delegates task");
    };
    return Manager;
}(Emp));
var m1 = new Manager('Alice');
m1.greet();
m1.delegate();
// access modifiers getter setter
var Car = /** @class */ (function () {
    function Car(_color) {
        this._color = _color;
    }
    Object.defineProperty(Car.prototype, "Color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var newCar = new Car();
newCar.Color = 'red';
console.log(newCar.Color);
