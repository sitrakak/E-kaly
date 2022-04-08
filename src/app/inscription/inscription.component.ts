import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/entities/user/user.service';
import { IUser, User } from 'src/app/entities/user/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  UserForm: FormGroup;
  email: string = '';
  nom: string = '';
  valide: boolean = false;
  profil: string = 'client';
  mdp : string = '';
  cmdp : string = '';
  error: boolean = false;

  @Output() createdUser = new EventEmitter<IUser>();

  constructor(protected UserService: UserService, protected formBuilder: FormBuilder, private router: Router) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
  }

  // Manage the submit action and create the new User.
  onSubmit() {
    const user = new User(this.UserForm.value['email'], this.UserForm.value['nom'],this.UserForm.value['valide'], this.UserForm.value['profil'], this.UserForm.value['mdp'], null);
    if (this.UserForm.value['mdp']==this.UserForm.value['cmdp']) {
      this.UserService.create(user).then((result: IUser) => {
        if (result === undefined) {
          this.error = true;
        } else {
          this.error = false;
          this.createdUser.emit(result);
        }
      });
      this.UserService.sendMail(user).then((result: IUser) => {
        if (result === undefined) {
          this.error = true;
        } else {
          this.error = false;
          this.createdUser.emit(result);
        }
      });
        //this.router.navigate(['/login']);
    } else {
      
    }
    
  }

  // Hide the error message.
  hideError() {
    this.error = false;
  }

  // Init the creation form.
  private initForm() {
    this.UserForm = new FormGroup({
      nom: new FormControl(this.nom, Validators.required),
      email: new FormControl(this.email, Validators.required),
      valide: new FormControl(this.valide, Validators.required),
      profil: new FormControl(this.profil, Validators.required),
      mdp: new FormControl(this.mdp, Validators.required),
      cmdp: new FormControl(this.mdp, Validators.required)
    });
  }

}
