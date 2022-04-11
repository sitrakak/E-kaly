"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_component_1 = require("./admin/admin/admin.component");
var benefice_component_1 = require("./admin/benefice/benefice.component");
var client_component_1 = require("./client/client/client.component");
var commande_component_1 = require("./client/commande/commande.component");
var livrer_component_1 = require("./client/livrer/livrer.component");
var inscription_component_1 = require("./inscription/inscription.component");
var livreur_component_1 = require("./livreur/livreur.component");
var login_component_1 = require("./login/login.component");
var benefice_component_2 = require("./restaurant/benefice/benefice.component");
var commande_component_2 = require("./restaurant/commande/commande.component");
var restaurant_component_1 = require("./restaurant/liste-plat/restaurant.component");
var new_plat_component_1 = require("./restaurant/new-plat/new-plat.component");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login/:email', component: login_component_1.LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'restaurant', component: restaurant_component_1.RestaurantComponent },
    { path: 'client', component: client_component_1.ClientComponent },
    { path: 'commande/:id', component: commande_component_1.CommandeComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'livreur', component: livreur_component_1.LivreurComponent },
    { path: 'plat/nouveau', component: new_plat_component_1.NewPlatComponent },
    { path: 'inscription', component: inscription_component_1.InscriptionComponent },
    { path: 'commande-en-cours', component: livrer_component_1.LivrerComponent },
    { path: 'restaurant/commande', component: commande_component_2.CommandeRestaurantComponent },
    { path: 'restaurant/benefice', component: benefice_component_2.BeneficeComponent },
    { path: 'admin/benefice', component: benefice_component_1.BeneficeRestoComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
