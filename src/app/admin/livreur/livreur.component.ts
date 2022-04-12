import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { Commande, ICommande } from 'src/app/entities/commande/commande.model';
import { CommandeService } from 'src/app/entities/commande/commande.service';
import { IPlat,Plat } from 'src/app/entities/plat/plat.model';
import { PlatService } from 'src/app/entities/plat/plat.service';
import { IUser, User } from 'src/app/entities/user/user.model';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurAdminComponent implements OnInit {
  livreurs: Array<IUser> = [];
  id_user:string='';
  email:string='';
  nom:string='';
  error: boolean = false;
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
  onsubmit(livreur:User){
    if(confirm("Supprimer ce livreur?")==true){
      this.user.delete(livreur._id);
    }else{}
  }
  private loadAll() {
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
