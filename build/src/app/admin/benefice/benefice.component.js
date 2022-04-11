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
var BeneficeRestoComponent = /** @class */ (function () {
    function BeneficeRestoComponent(platserv, activatedRoute, user, router, commandeserv) {
        this.platserv = platserv;
        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.commandes = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.quantite = new forms_1.FormControl(forms_1.Validators.required);
        this.createdCommande = new core_1.EventEmitter();
    }
    BeneficeRestoComponent.prototype.ngOnInit = function () {
        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active');
            $('nav').toggleClass('active');
        });
        var item = JSON.parse(localStorage.getItem("token_admin"));
        if (!item) {
            this.router.navigate(['/login']);
        }
        else {
            if (item["profil"] != "admin") {
                this.user.deconnexion("token_admin");
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
    BeneficeRestoComponent.prototype.onsubmit = function (plat) {
    };
    BeneficeRestoComponent.prototype.loadAll = function () {
        var _this = this;
        this.commandeserv
            .beneficeResto()
            .then(function (result) {
            _this.commandes = result;
        });
    };
    BeneficeRestoComponent.prototype.deconnexion = function () {
        this.user.deconnexion("token_admin");
    };
    __decorate([
        core_1.Output()
    ], BeneficeRestoComponent.prototype, "createdCommande", void 0);
    BeneficeRestoComponent = __decorate([
        core_1.Component({
            selector: 'app-benefice',
            templateUrl: './benefice.component.html',
            styleUrls: ['./benefice.component.css']
        })
    ], BeneficeRestoComponent);
    return BeneficeRestoComponent;
}());
exports.BeneficeRestoComponent = BeneficeRestoComponent;
