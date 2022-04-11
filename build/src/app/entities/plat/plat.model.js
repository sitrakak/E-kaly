"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plat = /** @class */ (function () {
    function Plat(image, nom, prixRevient, prixVente, visible, idResto, _id) {
        this.image = image;
        this.nom = nom;
        this.prixRevient = prixRevient;
        this.prixVente = prixVente;
        this.visible = visible;
        this.idResto = idResto;
        this._id = _id;
        this._id = _id ? _id : null;
        this.image = image;
        this.nom = nom;
        this.prixRevient = prixRevient;
        this.prixVente = prixVente;
        this.visible = visible;
        this.idResto = idResto;
    }
    return Plat;
}());
exports.Plat = Plat;
