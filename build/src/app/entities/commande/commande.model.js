"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commande = /** @class */ (function () {
    function Commande(idClient, Client, idPlat, idResto, nom, quantite, prixUnitaire, prixRevient, livrer, livreur, date, _id) {
        this.idClient = idClient;
        this.Client = Client;
        this.idPlat = idPlat;
        this.idResto = idResto;
        this.nom = nom;
        this.quantite = quantite;
        this.prixUnitaire = prixUnitaire;
        this.prixRevient = prixRevient;
        this.livrer = livrer;
        this.livreur = livreur;
        this.date = date;
        this._id = _id;
        this._id = _id ? _id : null;
        this.idClient = idClient;
        this.Client = Client;
        this.idPlat = idPlat;
        this.idResto = idResto;
        this.nom = nom;
        this.quantite = quantite;
        this.prixUnitaire = prixUnitaire;
        this.prixRevient = prixRevient;
        this.livrer = livrer;
        this.livreur = livreur;
        this.date = date;
    }
    return Commande;
}());
exports.Commande = Commande;
