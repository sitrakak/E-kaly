import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlat } from 'src/app/entities/plat/plat.model';
import { PlatService } from 'src/app/entities/plat/plat.service';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  plats: Array<IPlat> = [];
  idResto:string="";
  id_user:string='';
  email:string='';
  nom:string='';
  constructor(private plat:PlatService,private activatedRoute:ActivatedRoute, private user:UserService, private router:Router) { }

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
    this.idResto=this.activatedRoute.snapshot.params["id"];
    this.plat
      .getPlatResto(this.idResto)
      .then((result: Array<IPlat>) => {
        this.plats = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_client");
  }
}
