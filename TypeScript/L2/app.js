var Abcd = /** @class */ (function () {
    function Abcd(_name, age) {
        this.age = age;
    }
    Object.defineProperty(Abcd.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Abcd;
}());
var c1 = new Abcd("priyanshu", 24);
