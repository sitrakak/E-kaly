export interface IUser {
  _id?: string;
  email: string;
  nom : string;
  adresse:string;
  valide : boolean;
  profil : string;
  mdp : string;
}

export class User implements IUser {
  constructor(
    public email: string,
    public nom: string,
    public adresse:string,
    public valide : boolean,
    public profil : string,
    public mdp : string,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.email = email;
    this.nom = nom;
    this.adresse = adresse;
    this.valide =valide;
    this.profil =profil;
    this.mdp = mdp;
  }
}

export interface LUser {
  email: string;
  mdp : string;
}

export class LoginUser implements LUser {
  constructor(
    public email: string,
    public mdp : string,
  ) {
    this.email = email;
    this.mdp = mdp;
  }
}