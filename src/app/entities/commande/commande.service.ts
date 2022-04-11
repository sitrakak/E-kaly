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
  // Get Commandes by idClient
  CommandeClient(id:string): Promise<Array<ICommande>> {
    return this.http.get(`${this.CommandesUrl}/${id}`)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
  }
  // Get Commandes by Resto
  CommandeResto(id:string): Promise<Array<ICommande>> {
    return this.http.get(`api/restaurant/commande/${id}`)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
  }
  // Get Commandes a livrer
  livraison(livreur:string): Promise<Array<ICommande>> {
    return this.http.get(`${this.CommandesUrl}/livrer/${livreur}`)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
  }

  // Livrer
  livrer(id:string): Promise<Array<ICommande>> {
    return this.http.get(`api/livrer/${id}`)
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
