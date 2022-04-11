"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, nom, adresse, valide, profil, mdp, _id) {
        this.email = email;
        this.nom = nom;
        this.adresse = adresse;
        this.valide = valide;
        this.profil = profil;
        this.mdp = mdp;
        this._id = _id;
        this._id = _id ? _id : null;
        this.email = email;
        this.nom = nom;
        this.adresse = adresse;
        this.valide = valide;
        this.profil = profil;
        this.mdp = mdp;
    }
    return User;
}());
exports.User = User;
var LoginUser = /** @class */ (function () {
    function LoginUser(email, mdp) {
        this.email = email;
        this.mdp = mdp;
        this.email = email;
        this.mdp = mdp;
    }
    return LoginUser;
}());
exports.LoginUser = LoginUser;
