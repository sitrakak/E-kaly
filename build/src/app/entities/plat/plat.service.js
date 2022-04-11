"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlatService = /** @class */ (function () {
    function PlatService(http) {
        this.http = http;
        this.PlatsUrl = '/api/plat';
    }
    // Get Plats by idResto
    PlatService.prototype.plat = function (id) {
        return this.http.get(this.PlatsUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Create Plat
    PlatService.prototype.create = function (Plat) {
        return this.http.post(this.PlatsUrl, Plat)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Delete a Plat
    PlatService.prototype.delete = function (id) {
        return this.http.delete(this.PlatsUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //send Mail
    PlatService.prototype.sendMail = function (Plat) {
        return this.http.post(this.PlatsUrl + "/sendmail", Plat)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Error handling
    PlatService.prototype.error = function (error) {
        var message = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(message);
    };
    PlatService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PlatService);
    return PlatService;
}());
exports.PlatService = PlatService;
