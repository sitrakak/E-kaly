"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, brand, _id) {
        this.name = name;
        this.brand = brand;
        this._id = _id;
        this._id = _id ? _id : null;
        this.name = name;
        this.brand = brand;
    }
    return Product;
}());
exports.Product = Product;
