"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_model_1 = require("../entities/user/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(UserService, activatedRoute, router) {
        this.UserService = UserService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.email = '';
        this.mdp = '';
        this.message = "";
        this.user = [];
        this.error = false;
        this.erreur = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
        var mail = this.activatedRoute.snapshot.params["email"];
        if (mail != null) {
            this.UserService.validercompte(mail);
            this.router.navigate(['/login']);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_model_1.LoginUser(this.UserForm.value['email'], this.UserForm.value['mdp']);
        //  console.log(this.email);
        // console.log(user);
        this.UserService.login(user).then(function (result) {
            if (result === undefined) {
                _this.erreur = false;
                _this.error = true;
                _this.erreur = true;
            }
            else {
                _this.error = false;
                if (result["status"] == "NON") {
                    _this.erreur = false;
                    console.log("NONONON");
                    _this.message = result["message"];
                    _this.erreur = true;
                }
                else if (result["status"] == "OK") {
                    console.log("YES");
                    _this.message = result["message"];
                    console.log(result);
                    if (result["profil"] == "client") {
                        localStorage.setItem("token_client", JSON.stringify(result));
                        var item = JSON.parse(localStorage.getItem("token_client"));
                        _this.router.navigateByUrl("/client");
                    }
                    if (result["profil"] == "resto") {
                        localStorage.setItem("token_resto", JSON.stringify(result));
                        var item = JSON.parse(localStorage.getItem("token_resto"));
                        _this.router.navigateByUrl("/restaurant");
                    }
                    if (result["profil"] == "admin") {
                        localStorage.setItem("token_admin", JSON.stringify(result));
                        var item = JSON.parse(localStorage.getItem("token_admin"));
                        _this.router.navigateByUrl("/admin");
                    }
                    if (result["profil"] == "livreur") {
                        localStorage.setItem("token_livreur", JSON.stringify(result));
                        var item = JSON.parse(localStorage.getItem("token_livreur"));
                        _this.router.navigateByUrl("/livreur");
                    }
                    //console.log("ITO"+item["token"]);
                }
                // this.createdUser.emit(result);
                //this.refresh();
            }
        });
    };
    LoginComponent.prototype.initForm = function () {
        this.UserForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(this.email, forms_1.Validators.required),
            mdp: new forms_1.FormControl(this.mdp, forms_1.Validators.required)
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
