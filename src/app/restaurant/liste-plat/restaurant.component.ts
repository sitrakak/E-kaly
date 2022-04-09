import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  id_user:string='';
  email:string='';
  nom:string='';
  constructor(private router:Router,private user:UserService) { }

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
        this.id_user=item["id_User"];
        this.email=item["email"];
        this.nom=item["nom"];
      }
    }
  }

}
