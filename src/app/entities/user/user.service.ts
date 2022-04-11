import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUser, LoginUser, User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private UsersUrl = '/api/user';

    constructor(private http: Http) { }

    // Get Users
    get(): Promise<Array<IUser>> {
        return this.http.get(this.UsersUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    //get resto
    resto(): Promise<Array<IUser>> {
        return this.http.get(`${this.UsersUrl}/resto`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    //get livreur
    livreur(): Promise<Array<IUser>> {
        return this.http.get(`${this.UsersUrl}/livreur`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Create User
    create(User: User): Promise<IUser> {
        return this.http.post(this.UsersUrl, User)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Login
    login(User: LoginUser): Promise<any> {
        return this.http.post(`${this.UsersUrl}/login`, User)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Logout
    delete_token(id: string): Promise<any>  {
        return this.http.delete(`${this.UsersUrl}/token/${id}`)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
    }
    deconnexion(token: string) {
        let item= JSON.parse(localStorage.getItem(token));
        let id_user=item["id_user"];
        this.delete_token(id_user);
        localStorage.removeItem(token);
        window.location.reload();
    }

    // Delete a User
    delete(id: string): Promise<any> {
        return this.http.delete(`${this.UsersUrl}/${id}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    //send Mail
    validercompte(email: string): Promise<any> {
        return this.http.get(`${this.UsersUrl}/valider/${email}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }
    //mail existant
    mail(email: string): Promise<IUser> {
        return this.http.get(`${this.UsersUrl}/${email}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    //Resto by id
    restoById(id: string): Promise<IUser> {
        return this.http.get(`${this.UsersUrl}/resto/${id}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    //send Mail
    sendMail(User: User): Promise<IUser> {
        return this.http.post(`${this.UsersUrl}/sendmail`, User)
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
