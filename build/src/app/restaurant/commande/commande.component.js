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
var $ = __importStar(require("jquery"));
var CommandeRestaurantComponent = /** @class */ (function () {
    function CommandeRestaurantComponent(formBuilder, activatedRoute, router, user, commandeserv) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = user;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
    }
    CommandeRestaurantComponent.prototype.ngOnInit = function () {
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
        this.loadAll();
    };
    CommandeRestaurantComponent.prototype.onsubmit = function (commande) {
    };
    CommandeRestaurantComponent.prototype.loadAll = function () {
        var _this = this;
        this.commandeserv
            .CommandeResto(this.id_user)
            .then(function (result) {
            _this.commandes = result;
        });
    };
    CommandeRestaurantComponent.prototype.deconnexion = function () {
        this.user.deconnexion("token_resto");
    };
    CommandeRestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-commande',
            templateUrl: './commande.component.html',
            styleUrls: ['./commande.component.css']
        })
    ], CommandeRestaurantComponent);
    return CommandeRestaurantComponent;
}());
exports.CommandeRestaurantComponent = CommandeRestaurantComponent;
