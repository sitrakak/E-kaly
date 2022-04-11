"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = '/api/products';
    }
    // Get products
    ProductService.prototype.get = function () {
        return this.http.get(this.productsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Create product
    ProductService.prototype.create = function (product) {
        return this.http.post(this.productsUrl, product)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Delete a product
    ProductService.prototype.delete = function (id) {
        return this.http.delete(this.productsUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Error handling
    ProductService.prototype.error = function (error) {
        var message = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(message);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
