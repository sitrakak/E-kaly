import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { IPlat,Plat } from 'src/app/entities/plat/plat.model';
import { PlatService } from 'src/app/entities/plat/plat.service';
import { UserService } from 'src/app/entities/user/user.service';
@Component({
  selector: 'app-new-plat',
  templateUrl: './new-plat.component.html',
  styleUrls: ['./new-plat.component.css']
})
export class NewPlatComponent implements OnInit {
  id_user:string='';
  email:string='';
  PlatForm: FormGroup;
  nom : string= '';
  prixVente : string= '';
  prixRevient : string= '';
  visible : string= '';
  error: boolean = false;

  @Output() createdPlat = new EventEmitter<IPlat>();

  constructor(protected PlatService: PlatService, protected formBuilder: FormBuilder, private router: Router, private user:UserService) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
    $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');
    });
    let item= JSON.parse(localStorage.getItem("token_client"));
    if (!item) {
      this.router.navigate(['/login']);
    } else {
      if (item["profil"]!="resto") {
        this.user.deconnexion("token_resto");
        this.router.navigate(['/login']);
      } else {
        this.id_user=item["id_user"];
        this.email=item["email"];
      }
    }
  }

  // Manage the submit action and create the new Plat.
  onSubmit() {
    const plat = new Plat(null,this.PlatForm.value['nom'], this.PlatForm.value['prixRevient'],this.PlatForm.value['prixVente'], this.PlatForm.value['visible'], this.id_user, null);
      this.PlatService.create(plat).then((result: IPlat) => {
        if (result === undefined) {
          this.error = true;
        } else {
          this.error = false;
          this.createdPlat.emit(result);
        }
      });
        //this.router.navigate(['/restaurant']);
    
  }

  // Hide the error message.
  hideError() {
    this.error = false;
  }

  deconnexion(){
    this.user.deconnexion("token_resto");
  }
  // Init the creation form.
  private initForm() {
    this.PlatForm = new FormGroup({
      nom: new FormControl(this.nom, Validators.required),
      prixRevient: new FormControl(this.prixRevient, Validators.required),
      prixVente: new FormControl(this.prixVente, Validators.required),
      visible: new FormControl(this.visible, Validators.required)
    });
  }

}
