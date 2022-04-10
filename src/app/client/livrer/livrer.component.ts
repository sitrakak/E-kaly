import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommande } from 'src/app/entities/commande/commande.model';
import { CommandeService } from 'src/app/entities/commande/commande.service';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-livrer',
  templateUrl: './livrer.component.html',
  styleUrls: ['./livrer.component.css']
})
export class LivrerComponent implements OnInit {
  commandes: Array<ICommande> = [];
  id_user:string='';
  email:string='';
  nom:string='';
  error: boolean = false;
  constructor(private activatedRoute:ActivatedRoute, private user:UserService, private router:Router,private commande : CommandeService) { }

  ngOnInit(): void {
    $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active');
      $('nav').toggleClass('active');
    });
    let item= JSON.parse(localStorage.getItem("token_client"));
    if (!item) {
      this.router.navigate(['/login']);
    } else {
      if (item["profil"]!="client") {
        this.user.deconnexion("token_client");
        this.router.navigate(['/login']);
      } else {
        this.id_user=item["id_user"];
        this.email=item["email"];
        this.nom=item["nom"];
      }
    }
    this.loadAll();
  }
  private loadAll() {
    this.commande
      .CommandeClient(this.id_user)
      .then((result: Array<ICommande>) => {
        this.commandes = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_client");
  }
}
