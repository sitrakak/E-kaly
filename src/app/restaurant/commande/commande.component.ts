import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Commande, ICommande } from 'src/app/entities/commande/commande.model';
import { CommandeService } from 'src/app/entities/commande/commande.service';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeRestaurantComponent implements OnInit {
  commandes: Array<ICommande> = [];
  idResto:string="";
  id_user:string='';
  email:string='';
  constructor( protected formBuilder: FormBuilder,private activatedRoute:ActivatedRoute, private router: Router, private user:UserService, private commandeserv:CommandeService) { }

  ngOnInit(): void {
    $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');
    });
    let item= JSON.parse(localStorage.getItem("token_resto"));
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
    this.loadAll();
  }
  onsubmit(commande:Commande){

  }
  private loadAll() {
    this.commandeserv
      .CommandeResto(this.id_user)
      .then((result: Array<ICommande>) => {
        this.commandes = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_resto");
  }
}
