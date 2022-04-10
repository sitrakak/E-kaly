import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande, ICommande } from '../entities/commande/commande.model';
import { CommandeService } from '../entities/commande/commande.service';
import { UserService } from '../entities/user/user.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  commandes: Array<ICommande> = [];
  idResto:string="";
  id_user:string='';
  email:string='';
  nom:string='';
  error: boolean = false;
  quantite = new FormControl(Validators.required);

  
  constructor(private activatedRoute:ActivatedRoute, private user:UserService, private router:Router,private commandeserv:CommandeService) { }

  ngOnInit(): void {
    $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');
    });
    let item= JSON.parse(localStorage.getItem("token_livreur"));
    if (!item) {
      this.router.navigate(['/login']);
    } else {
      if (item["profil"]!="livreur") {
        this.user.deconnexion("token_livreur");
        this.router.navigate(['/login']);
      } else {
        this.id_user=item["id_user"];
        this.email=item["email"];
        this.nom=item["nom"];
      }
    }
    this.loadAll();
  }
  onsubmit(commande: Commande){
    if(confirm("Livrer cette commande?")==true){
      this.commandeserv.livrer(commande._id);
    }else{}
  }
  private loadAll() {
    this.idResto=this.activatedRoute.snapshot.params["id"];
    this.commandeserv
      .livraison(this.id_user)
      .then((result: Array<ICommande>) => {
        this.commandes = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_livreur");
  }

}
