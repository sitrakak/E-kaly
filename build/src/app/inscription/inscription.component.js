"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_model_1 = require("src/app/entities/user/user.model");
var forms_1 = require("@angular/forms");
var InscriptionComponent = /** @class */ (function () {
    function InscriptionComponent(UserService, formBuilder, router) {
        this.UserService = UserService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.succes = false;
        this.erreur = false;
        this.email = '';
        this.nom = '';
        this.adresse = '';
        this.valide = false;
        this.profil = 'client';
        this.mdp = '';
        this.cmdp = '';
        this.error = false;
        this.createdUser = new core_1.EventEmitter();
    }
    // Init the form when starting the view.
    InscriptionComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    // Manage the submit action and create the new User.
    InscriptionComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_model_1.User(this.UserForm.value['email'], this.UserForm.value['nom'], this.UserForm.value['adresse'], this.UserForm.value['valide'], this.UserForm.value['profil'], this.UserForm.value['mdp'], null);
        if (this.UserForm.value['mdp'] == this.UserForm.value['cmdp']) {
            this.succes = false;
            this.erreur = false;
            this.UserService.mail(this.UserForm.value['email']).then(function (result) {
                _this.mail = result;
            });
            if (!this.mail) {
                this.UserService.create(user).then(function (result) {
                    if (result === undefined) {
                        _this.error = true;
                    }
                    else {
                        _this.error = false;
                        _this.createdUser.emit(result);
                    }
                });
                this.UserService.sendMail(user).then(function (result) {
                    if (result === undefined) {
                        _this.error = true;
                    }
                    else {
                        _this.error = false;
                        _this.createdUser.emit(result);
                    }
                });
                this.succes = true;
            }
            else {
                this.erreur = true;
            }
        }
    };
    // Hide the error message.
    InscriptionComponent.prototype.hideError = function () {
        this.error = false;
    };
    // Init the creation form.
    InscriptionComponent.prototype.initForm = function () {
        this.UserForm = new forms_1.FormGroup({
            nom: new forms_1.FormControl(this.nom, forms_1.Validators.required),
            email: new forms_1.FormControl(this.email, forms_1.Validators.required),
            adresse: new forms_1.FormControl(this.adresse, forms_1.Validators.required),
            valide: new forms_1.FormControl(this.valide, forms_1.Validators.required),
            profil: new forms_1.FormControl(this.profil, forms_1.Validators.required),
            mdp: new forms_1.FormControl(this.mdp, forms_1.Validators.required),
            cmdp: new forms_1.FormControl(this.cmdp, forms_1.Validators.required)
        });
    };
    __decorate([
        core_1.Output()
    ], InscriptionComponent.prototype, "createdUser", void 0);
    InscriptionComponent = __decorate([
        core_1.Component({
            selector: 'app-inscription',
            templateUrl: './inscription.component.html',
            styleUrls: ['./inscription.component.css']
        })
    ], InscriptionComponent);
    return InscriptionComponent;
}());
exports.InscriptionComponent = InscriptionComponent;
