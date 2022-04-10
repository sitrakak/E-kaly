export interface ICommande {
  _id?: string;
  idClient : string;
  idPlat : string;
  quantite : number;
  prixUnitaire : number;
  date : Date;
}

export class Commande implements ICommande {
  constructor(
    public idClient : string,
    public idPlat : string,
    public quantite : number,
    public prixUnitaire : number,
    public date : Date,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.idClient = idClient;
    this.idPlat = idPlat;
    this.quantite =quantite;
    this.prixUnitaire =prixUnitaire;
    this.date =date;
  }
}