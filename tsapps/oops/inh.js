var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(a, b) {
        this.a = a;
        this.b = b;
    }
    Base.prototype.getLength = function () {
        return (this.a + " " + this.b).length;
    };
    Base.prototype.concatinate = function () {
        return this.a + " " + this.b;
    };
    return Base;
}());
var Derive = /** @class */ (function (_super) {
    __extends(Derive, _super);
    function Derive(s1, s2) {
        var _this = _super.call(this, s1, s2) || this;
        _this.s1 = s1;
        _this.s2 = s2;
        return _this;
    }
    Derive.prototype.concatinate = function () {
        return "My Name is " + this.s1 + " " + this.s2;
    };
    return Derive;
}(Base));
var d = new Derive('Mahesh', 'Sabnis');
console.log(d.concatinate());
console.log(d.getLength());
var b = new Derive('James', 'Bond');
console.log(b.concatinate());
console.log(b.getLength());
