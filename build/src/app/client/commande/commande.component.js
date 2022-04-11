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
var commande_model_1 = require("src/app/entities/commande/commande.model");
var CommandeComponent = /** @class */ (function () {
    function CommandeComponent(platserv, activatedRoute, user, router, commandeserv) {
        this.platserv = platserv;
        this.activatedRoute = activatedRoute;
        this.user = user;
        this.router = router;
        this.commandeserv = commandeserv;
        this.plats = [];
        this.idResto = "";
        this.id_user = '';
        this.email = '';
        this.nom = '';
        this.error = false;
        this.quantite = new forms_1.FormControl(forms_1.Validators.required);
        this.createdCommande = new core_1.EventEmitter();
    }
    CommandeComponent.prototype.ngOnInit = function () {
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
    CommandeComponent.prototype.onsubmit = function (plat) {
        var _this = this;
        var commande = new commande_model_1.Commande(this.id_user, this.email, plat._id, plat.idResto, plat.nom, this.quantite.value, plat.prixVente, plat.prixRevient, false, null, null);
        if (this.quantite.value > 0) {
            if (confirm("Voulez vous vraiment commander " + this.quantite.value + " " + plat.nom + "?") == true) {
                this.commandeserv.Commander(commande).then(function (result) {
                    if (result === undefined) {
                        _this.error = true;
                    }
                    else {
                        _this.error = false;
                        _this.createdCommande.emit(result);
                    }
                });
            }
            else { }
        }
    };
    CommandeComponent.prototype.loadAll = function () {
        var _this = this;
        this.idResto = this.activatedRoute.snapshot.params["id"];
        this.platserv
            .plat(this.idResto)
            .then(function (result) {
            _this.plats = result;
        });
    };
    CommandeComponent.prototype.deconnexion = function () {
        this.user.deconnexion("token_client");
    };
    __decorate([
        core_1.Output()
    ], CommandeComponent.prototype, "createdCommande", void 0);
    CommandeComponent = __decorate([
        core_1.Component({
            selector: 'app-commande',
            templateUrl: './commande.component.html',
            styleUrls: ['./commande.component.css']
        })
    ], CommandeComponent);
    return CommandeComponent;
}());
exports.CommandeComponent = CommandeComponent;
