"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_model_1 = require("src/app/entities/product/product.model");
var forms_1 = require("@angular/forms");
var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(productService, formBuilder) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.name = '';
        this.brand = '';
        this.error = false;
        this.createdProduct = new core_1.EventEmitter();
    }
    // Init the form when starting the view.
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    // Manage the submit action and create the new product.
    ProductCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var product = new product_model_1.Product(this.productForm.value['name'], this.productForm.value['brand'], null);
        this.productService.create(product).then(function (result) {
            if (result === undefined) {
                _this.error = true;
            }
            else {
                _this.error = false;
                _this.createdProduct.emit(result);
            }
        });
    };
    // Hide the error message.
    ProductCreateComponent.prototype.hideError = function () {
        this.error = false;
    };
    // Init the creation form.
    ProductCreateComponent.prototype.initForm = function () {
        this.productForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.name, forms_1.Validators.required),
            brand: new forms_1.FormControl(this.brand, forms_1.Validators.required)
        });
    };
    __decorate([
        core_1.Output()
    ], ProductCreateComponent.prototype, "createdProduct", void 0);
    ProductCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-product-create',
            templateUrl: './product-create.component.html',
            styleUrls: ['./product-create.component.css']
        })
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());
exports.ProductCreateComponent = ProductCreateComponent;
