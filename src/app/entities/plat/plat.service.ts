import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPlat, Plat } from './plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  private PlatsUrl = '/api/plat';

  constructor(private http: Http) { }

  // Get Plats by idResto
  get(id:string): Promise<Array<IPlat>> {
      return this.http.get(`${this.PlatsUrl}/${id}`)
          .toPromise()
          .then(response => response.json())
          .catch(this.error);
  }

  // Create Plat
  create(Plat: Plat): Promise<IPlat> {
      return this.http.post(this.PlatsUrl, Plat)
          .toPromise()
          .then(response => response.json())
          .catch(this.error);
  }

  // Delete a Plat
  delete(id: string): Promise<any> {
      return this.http.delete(`${this.PlatsUrl}/${id}`)
          .toPromise()
          .then(response => response.json())
          .catch(this.error);
  }

  //send Mail
  sendMail(Plat: Plat): Promise<IPlat> {
      return this.http.post(`${this.PlatsUrl}/sendmail`, Plat)
          .toPromise()
          .then(response => response.json())
          .catch(this.error);
  }

  // Error handling
  private error(error: any) {
      let message = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(message);
  }
}
