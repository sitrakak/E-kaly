import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande, ICommande } from 'src/app/entities/commande/commande.model';
import { CommandeService } from 'src/app/entities/commande/commande.service';
import { IPlat,Plat } from 'src/app/entities/plat/plat.model';
import { PlatService } from 'src/app/entities/plat/plat.service';
import { IUser } from 'src/app/entities/user/user.model';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  commandes: Array<ICommande> = [];
  livreurs: Array<IUser> = [];
  id_user:string='';
  email:string='';
  nom:string='';
  error: boolean = false;
  livreur = new FormControl(Validators.required);

  @Output() createdCommande = new EventEmitter<ICommande>();
  
  constructor(private activatedRoute:ActivatedRoute, private user:UserService, private router:Router,private commandeserv:CommandeService) { }

  ngOnInit(): void {
    $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');
    });
    let item= JSON.parse(localStorage.getItem("token_admin"));
    if (!item) {
      this.router.navigate(['/login']);
    } else {
      if (item["profil"]!="admin") {
        this.user.deconnexion("token_admin");
        this.router.navigate(['/login']);
      } else {
        this.id_user=item["id_user"];
        this.email=item["email"];
        this.nom=item["nom"];
      }
    }
    this.loadAll();
  }
  onsubmit(commande:Commande){
    if(this.livreur.value!=" "){
      if(confirm("Assigner ce livreur pour ce commande")==true){
        this.commandeserv.assigner(commande._id,this.livreur.value);
      }else{}
    }
  }
  private loadAll() {
    this.commandeserv
      .commande()
      .then((result: Array<ICommande>) => {
        this.commandes = result;
      });
    this.user
      .livreur()
      .then((result: Array<IUser>) => {
        this.livreurs = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_admin");
  }

}
