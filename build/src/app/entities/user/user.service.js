"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.UsersUrl = '/api/user';
    }
    // Get Users
    UserService.prototype.get = function () {
        return this.http.get(this.UsersUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //get resto
    UserService.prototype.resto = function () {
        return this.http.get(this.UsersUrl + "/resto")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //get livreur
    UserService.prototype.livreur = function () {
        return this.http.get(this.UsersUrl + "/livreur")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Create User
    UserService.prototype.create = function (User) {
        return this.http.post(this.UsersUrl, User)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Login
    UserService.prototype.login = function (User) {
        return this.http.post(this.UsersUrl + "/login", User)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Logout
    UserService.prototype.delete_token = function (id) {
        return this.http.delete(this.UsersUrl + "/token/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    UserService.prototype.deconnexion = function (token) {
        var item = JSON.parse(localStorage.getItem(token));
        var id_user = item["id_user"];
        this.delete_token(id_user);
        localStorage.removeItem(token);
        window.location.reload();
    };
    // Delete a User
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.UsersUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //send Mail
    UserService.prototype.validercompte = function (email) {
        return this.http.get(this.UsersUrl + "/valider/" + email)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //mail existant
    UserService.prototype.mail = function (email) {
        return this.http.get(this.UsersUrl + "/" + email)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //Resto by id
    UserService.prototype.restoById = function (id) {
        return this.http.get(this.UsersUrl + "/resto/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    //send Mail
    UserService.prototype.sendMail = function (User) {
        return this.http.post(this.UsersUrl + "/sendmail", User)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.error);
    };
    // Error handling
    UserService.prototype.error = function (error) {
        var message = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(message);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
