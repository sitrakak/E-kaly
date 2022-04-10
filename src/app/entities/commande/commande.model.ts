export interface ICommande {
  _id?: string;
  idClient : string;
  idPlat : string;
  nom :string;
  quantite : number;
  prixUnitaire : number;
  livrer: boolean;
  livreur: string;
  date : Date;
}

export class Commande implements ICommande {
  constructor(
    public idClient : string,
    public idPlat : string,
    public nom :string,
    public quantite : number,
    public prixUnitaire : number,
    public livrer: boolean,
    public livreur: string,
    public date : Date,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.idClient = idClient;
    this.idPlat = idPlat;
    this.nom = nom;
    this.quantite =quantite;
    this.prixUnitaire =prixUnitaire;
    this.livrer =livrer;
    this.livreur =livreur;
    this.date =date;
  }
}