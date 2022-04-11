"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClientComponent = /** @class */ (function () {
    function ClientComponent(router, user) {
        this.router = router;
        this.user = user;
        this.resto = [];
        this.id_user = '';
        this.email = '';
        this.nom = '';
    }
    ClientComponent.prototype.ngOnInit = function () {
        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
        });
        var item = JSON.parse(localStorage.getItem("token_client"));
        if (!item) {
            this.router.navigate(['/login']);
        }
        else {
            if (item["profil"] != "client") {
                this.user.deconnexion("token_client");
                this.router.navigate(['/login']);
            }
            else {
                this.id_user = item["id_user"];
                this.email = item["email"];
                this.nom = item["nom"];
            }
        }
        this.loadAll();
    };
    ClientComponent.prototype.loadAll = function () {
        var _this = this;
        this.user
            .resto()
            .then(function (result) {
            _this.resto = result;
        });
    };
    ClientComponent.prototype.deconnexion = function () {
        this.user.deconnexion("token_client");
    };
    ClientComponent = __decorate([
        core_1.Component({
            selector: 'app-client',
            templateUrl: './client.component.html',
            styleUrls: ['./client.component.css']
        })
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;
