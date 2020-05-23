var MyClass = /** @class */ (function () {
    // private x:number;
    // private y:number;
    // constructor(x:number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }
    // ctor with parameters having access specifier
    function MyClass(x, y) {
        this.x = x;
        this.y = y;
    }
    MyClass.prototype.add = function () {
        return this.x + this.y;
    };
    // the rest parameters to pass variable number of parameters 
    // to the method ... aka 'spread operator'
    MyClass.prototype.calculateSum = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                sum += v;
            });
        }
        return sum;
    };
    return MyClass;
}());
var m1 = new MyClass(10, 20);
console.log(m1.add());
console.log(" 2 numbers " + m1.calculateSum(2, 3));
console.log(" 2 numbers " + m1.calculateSum(2, 3, 4));
console.log(" 3 numbers " + m1.calculateSum(2, 3, 4, 5));
