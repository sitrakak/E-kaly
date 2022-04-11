"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CommandeService = /** @class */ (function () {
    function CommandeService(http) {
        this.http = http;
        this.CommandesUrl = '/api/commande';
    }
    //get resto
    CommandeService.prototype.commande = function () {
        return this.http.get(this.CommandesUrl + "/all")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //benefice par plat
    CommandeService.prototype.benefice = function (id) {
        return this.http.get(this.CommandesUrl + "/benefice/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //benefice par resto
    CommandeService.prototype.beneficeResto = function () {
        return this.http.get(this.CommandesUrl + "/beneficeResto")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //Commander
    CommandeService.prototype.Commander = function (commande) {
        return this.http.post(this.CommandesUrl, commande)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Get Commandes by idClient
    CommandeService.prototype.CommandeClient = function (id) {
        return this.http.get(this.CommandesUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Get Commandes by Resto
    CommandeService.prototype.CommandeResto = function (id) {
        return this.http.get("api/restaurant/commande/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Get Commandes a livrer
    CommandeService.prototype.livraison = function (livreur) {
        return this.http.get(this.CommandesUrl + "/livrer/" + livreur)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Livrer
    CommandeService.prototype.livrer = function (id) {
        return this.http.get("api/livrer/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Assigner livreur
    CommandeService.prototype.assigner = function (id, livreur) {
        return this.http.get(this.CommandesUrl + "/assigner/" + id + "/" + livreur)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    CommandeService.prototype.error = function (error) {
        var message = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(message);
    };
    CommandeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CommandeService);
    return CommandeService;
}());
exports.CommandeService = CommandeService;
