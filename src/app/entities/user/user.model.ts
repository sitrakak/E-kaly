export interface IUser {
  _id?: string;
  email: string;
  nom : string;
  valide : boolean;
  profil : string;
  mdp : string;
}

export class User implements IUser {
  constructor(
    public email: string,
    public nom: string,
    public valide : boolean,
    public profil : string,
    public mdp : string,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.email = email;
    this.nom = nom;
    this.valide =valide;
    this.profil =profil;
    this.mdp = mdp;
  }
}