"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var $ = __importStar(require("jquery"));
var plat_model_1 = require("src/app/entities/plat/plat.model");
var NewPlatComponent = /** @class */ (function () {
    function NewPlatComponent(PlatService, formBuilder, router, user) {
        this.PlatService = PlatService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = user;
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.prixVente = '';
        this.prixRevient = '';
        this.visible = '';
        this.error = false;
        this.createdPlat = new core_1.EventEmitter();
    }
    // Init the form when starting the view.
    NewPlatComponent.prototype.ngOnInit = function () {
        this.initForm();
        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
        });
        var item = JSON.parse(localStorage.getItem("token_resto"));
        if (!item) {
            this.router.navigate(['/login']);
        }
        else {
            if (item["profil"] != "resto") {
                this.user.deconnexion("token_resto");
                this.router.navigate(['/login']);
            }
            else {
                this.id_user = item["id_user"];
                this.email = item["email"];
            }
        }
    };
    // Manage the submit action and create the new Plat.
    NewPlatComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.PlatForm.value['visible'] == "true") {
            var plat = new plat_model_1.Plat(null, this.PlatForm.value['nom'], this.PlatForm.value['prixRevient'], this.PlatForm.value['prixVente'], true, this.id_user, null);
            this.PlatService.create(plat).then(function (result) {
                if (result === undefined) {
                    _this.error = true;
                }
                else {
                    _this.error = false;
                    _this.createdPlat.emit(result);
                }
            });
        }
        else {
            var plat = new plat_model_1.Plat(null, this.PlatForm.value['nom'], this.PlatForm.value['prixRevient'], this.PlatForm.value['prixVente'], false, this.id_user, null);
            this.PlatService.create(plat).then(function (result) {
                if (result === undefined) {
                    _this.error = true;
                }
                else {
                    _this.error = false;
                    _this.createdPlat.emit(result);
                }
            });
        }
        this.router.navigate(['/restaurant']);
    };
    // Hide the error message.
    NewPlatComponent.prototype.hideError = function () {
        this.error = false;
    };
    NewPlatComponent.prototype.deconnexion = function () {
        this.user.deconnexion("token_resto");
    };
    // Init the creation form.
    NewPlatComponent.prototype.initForm = function () {
        this.PlatForm = new forms_1.FormGroup({
            nom: new forms_1.FormControl(this.nom, forms_1.Validators.required),
            prixRevient: new forms_1.FormControl(this.prixRevient, forms_1.Validators.required),
            prixVente: new forms_1.FormControl(this.prixVente, forms_1.Validators.required),
            visible: new forms_1.FormControl(this.visible, forms_1.Validators.required)
        });
    };
    __decorate([
        core_1.Output()
    ], NewPlatComponent.prototype, "createdPlat", void 0);
    NewPlatComponent = __decorate([
        core_1.Component({
            selector: 'app-new-plat',
            templateUrl: './new-plat.component.html',
            styleUrls: ['./new-plat.component.css']
        })
    ], NewPlatComponent);
    return NewPlatComponent;
}());
exports.NewPlatComponent = NewPlatComponent;
