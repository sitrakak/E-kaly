import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/entities/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected UserService: UserService, protected activatedRoute:ActivatedRoute,protected router:Router) { }

  ngOnInit(): void {
    let email=this.activatedRoute.snapshot.params["email"];
      this.UserService.validercompte(email);
      this.router.navigate(['/login']);
  }

}
