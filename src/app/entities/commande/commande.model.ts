export interface ICommande {
  _id?: string;
  idClient : string;
  Client : string;
  idPlat : string;
  idResto : string;
  nom :string;
  quantite : number;
  prixUnitaire : number;
  prixRevient : number;
  livrer: boolean;
  livreur: string;
  date : Date;
}

export class Commande implements ICommande {
  constructor(
    public idClient : string,
    public Client : string,
    public idPlat : string,
    public idResto : string,
    public nom :string,
    public quantite : number,
    public prixUnitaire : number,
    public prixRevient : number,
    public livrer: boolean,
    public livreur: string,
    public date : Date,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.idClient = idClient;
    this.Client = Client;
    this.idPlat = idPlat;
    this.idResto = idResto;
    this.nom = nom;
    this.quantite =quantite;
    this.prixUnitaire =prixUnitaire;
    this.prixRevient =prixRevient;
    this.livrer =livrer;
    this.livreur =livreur;
    this.date =date;
  }
}