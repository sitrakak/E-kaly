import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICommande, Commande } from './commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private CommandesUrl = '/api/commande';

  constructor(private http: Http) { }
  //Commander
  Commander(commande: Commande): Promise<ICommande> {
    return this.http.post(this.CommandesUrl, commande)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
  }
  private error(error: any) {
      let message = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(message);
  }
}
