"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var product_list_component_1 = require("./product/product-list/product-list.component");
var product_create_component_1 = require("./product/product-create/product-create.component");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var restaurant_component_1 = require("./restaurant/liste-plat/restaurant.component");
var client_component_1 = require("./client/client/client.component");
var inscription_component_1 = require("./inscription/inscription.component");
var new_plat_component_1 = require("./restaurant/new-plat/new-plat.component");
var admin_component_1 = require("./admin/admin/admin.component");
var livreur_component_1 = require("./livreur/livreur.component");
var commande_component_1 = require("./client/commande/commande.component");
var commande_component_2 = require("./restaurant/commande/commande.component");
var livrer_component_1 = require("./client/livrer/livrer.component");
var benefice_component_1 = require("./restaurant/benefice/benefice.component");
var benefice_component_2 = require("./admin/benefice/benefice.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_create_component_1.ProductCreateComponent,
                login_component_1.LoginComponent,
                restaurant_component_1.RestaurantComponent,
                client_component_1.ClientComponent,
                inscription_component_1.InscriptionComponent,
                new_plat_component_1.NewPlatComponent,
                admin_component_1.AdminComponent,
                livreur_component_1.LivreurComponent,
                commande_component_1.CommandeComponent,
                commande_component_2.CommandeRestaurantComponent,
                livrer_component_1.LivrerComponent,
                benefice_component_1.BeneficeComponent,
                benefice_component_2.BeneficeRestoComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
