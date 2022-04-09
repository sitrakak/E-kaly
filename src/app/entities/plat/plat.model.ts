export interface IPlat {
  _id?: string;
  image: string;
  nom : string;
  prixRevient : number;
  prixVente : number;
  visible : boolean;
  idResto : string;
}

export class Plat implements IPlat {
  constructor(
    public image: string,
    public nom: string,
    public prixRevient : number,
    public prixVente : number,
    public visible : boolean,
    public idResto : string,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.image = image;
    this.nom = nom;
    this.prixRevient =prixRevient;
    this.prixVente =prixVente;
    this.visible = visible;
    this.idResto = idResto;
  }
}