import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUser, User } from './user.model';

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

    // Create User
    create(User: User): Promise<IUser> {
        return this.http.post(this.UsersUrl, User)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
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
