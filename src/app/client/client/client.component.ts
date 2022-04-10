import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/entities/user/user.model';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  resto:Array<IUser> = [];
  id_user:string='';
  email:string='';
  nom:string='';
  constructor(private router:Router, private user:UserService) { }

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
    this.user
      .resto()
      .then((result: Array<IUser>) => {
        this.resto = result;
      });
  }
  deconnexion(){
    this.user.deconnexion("token_client");
  }
}
