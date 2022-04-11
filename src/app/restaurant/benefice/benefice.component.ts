import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande, ICommande } from 'src/app/entities/commande/commande.model';
import { CommandeService } from 'src/app/entities/commande/commande.service';
import { IPlat,Plat } from 'src/app/entities/plat/plat.model';
import { PlatService } from 'src/app/entities/plat/plat.service';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-benefice',
  templateUrl: './benefice.component.html',
  styleUrls: ['./benefice.component.css']
})
export class BeneficeComponent implements OnInit {

  commandes: Array<ICommande> = [];
  idResto:string="";
  id_user:string='';
  email:string='';
  nom:string='';
  error: boolean = false;
  quantite = new FormControl(Validators.required);

  @Output() createdCommande = new EventEmitter<ICommande>();
  
  constructor(private platserv:PlatService,private activatedRoute:ActivatedRoute, private user:UserService, private router:Router,private commandeserv:CommandeService) { }

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
        this.nom=item["nom"];
      }
    }
    this.loadAll();
  }
  onsubmit(plat:Plat){
    
  }
  private loadAll() {
    this.commandeserv
      .benefice(this.id_user)
      .then((result: Array<ICommande>) => {
        this.commandes = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_resto");
  }

}
