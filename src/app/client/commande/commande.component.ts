import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande, ICommande } from 'src/app/entities/commande/commande.model';
import { CommandeService } from 'src/app/entities/commande/commande.service';
import { IPlat,Plat } from 'src/app/entities/plat/plat.model';
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
  error: boolean = false;
  quantite = new FormControl(Validators.required);

  @Output() createdCommande = new EventEmitter<ICommande>();
  
  constructor(private platserv:PlatService,private activatedRoute:ActivatedRoute, private user:UserService, private router:Router,private commandeserv:CommandeService) { }

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
  onsubmit(plat:Plat){
    const commande = new Commande(this.id_user, plat._id, plat.nom , this.quantite.value,plat.prixVente, false, null, null);
    if(this.quantite.value>0){
      if(confirm("Voulez vous vraiment commander "+this.quantite.value+" "+plat.nom+"?")==true){
        this.commandeserv.Commander(commande).then((result: ICommande) => {
          if (result === undefined) {
            this.error = true;
          } else {
            this.error = false;
            this.createdCommande.emit(result);
          }
        });
      }else{}
    }
  }
  private loadAll() {
    this.idResto=this.activatedRoute.snapshot.params["id"];
    this.platserv
      .plat(this.idResto)
      .then((result: Array<IPlat>) => {
        this.plats = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_client");
  }
}
