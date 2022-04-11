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
var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(router, user) {
        this.router = router;
        this.user = user;
        this.id_user = '';
        this.email = '';
        this.nom = '';
    }
    RestaurantComponent.prototype.ngOnInit = function () {
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
                this.id_user = item["id_User"];
                this.email = item["email"];
                this.nom = item["nom"];
            }
        }
    };
    RestaurantComponent.prototype.deconnexion = function () {
        this.user.deconnexion("token_resto");
    };
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant',
            templateUrl: './restaurant.component.html',
            styleUrls: ['./restaurant.component.css']
        })
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;
