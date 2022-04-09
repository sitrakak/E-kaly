import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { IPlat,Plat } from 'src/app/entities/plat/plat.model';
import { PlatService } from 'src/app/entities/plat/plat.service';
@Component({
  selector: 'app-new-plat',
  templateUrl: './new-plat.component.html',
  styleUrls: ['./new-plat.component.css']
})
export class NewPlatComponent implements OnInit {

  PlatForm: FormGroup;
  nom : string= '';
  prixVente : string= '';
  prixRevient : string= '';
  visible : string= '';
  idResto : string= '';
  error: boolean = false;

  @Output() createdPlat = new EventEmitter<IPlat>();

  constructor(protected PlatService: PlatService, protected formBuilder: FormBuilder, private router: Router) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
    $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');
    });
  }

  // Manage the submit action and create the new Plat.
  onSubmit() {
    const plat = new Plat(null,this.PlatForm.value['nom'], this.PlatForm.value['prixRevient'],this.PlatForm.value['prixVente'], this.PlatForm.value['visible'], this.PlatForm.value['idResto'], null);
      this.PlatService.create(plat).then((result: IPlat) => {
        if (result === undefined) {
          this.error = true;
        } else {
          this.error = false;
          this.createdPlat.emit(result);
        }
      });
        //this.router.navigate(['/login']);
    
  }

  // Hide the error message.
  hideError() {
    this.error = false;
  }

  // Init the creation form.
  private initForm() {
    this.PlatForm = new FormGroup({
      nom: new FormControl(this.nom, Validators.required),
      prixRevient: new FormControl(this.prixRevient, Validators.required),
      prixVente: new FormControl(this.prixVente, Validators.required),
      visible: new FormControl(this.visible, Validators.required),
      idResto: new FormControl(this.idResto, Validators.required)
    });
  }

}
