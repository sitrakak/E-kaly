import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/entities/user/user.service';
import { LoginUser, LUser } from '../entities/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserForm: FormGroup;
  email: string = '';
    mdp: string = '';
    message="";
    user=[] as any;
    error: boolean = false;
  erreur:boolean=false;
    
  constructor(protected UserService: UserService, protected activatedRoute:ActivatedRoute,protected router:Router) { }

  ngOnInit(): void {
    this.initForm();
    let mail=this.activatedRoute.snapshot.params["email"];
    if(mail!=null){
      this.UserService.validercompte(mail);
      this.router.navigate(['/login']);
    }
  }
  onSubmit(){
    const user =new LoginUser(this.UserForm.value['email'],this.UserForm.value['mdp']);
  //  console.log(this.email);
   // console.log(user);
    this.UserService.login(user).then((result: LUser) => {
      if (result === undefined) {
          this.erreur=false;
          this.error = true;
          this.erreur=true;

      } else {
        this.error = false;
        
        if(result["status"]=="NON"){
          this.erreur=false;

          console.log("NONONON");
          this.message=result["message"];
          this.erreur=true;

        }
        else if(result["status"]=="OK"){
          console.log("YES");
          this.message=result["message"];
          console.log(result);
         
          if(result["profil"]=="client")
          {
            localStorage.setItem("token_client",JSON.stringify(result));
           let item = JSON.parse(localStorage.getItem("token_client"));
            this.router.navigateByUrl("/client");
          }
          if(result["profil"]=="resto")
          {
            localStorage.setItem("token_resto",JSON.stringify(result));
            let item = JSON.parse(localStorage.getItem("token_resto"));
            this.router.navigateByUrl("/restaurant");
          }
          if(result["profil"]=="admin")
          {
            localStorage.setItem("token_admin",JSON.stringify(result));
            let item = JSON.parse(localStorage.getItem("token_admin"));
            this.router.navigateByUrl("/admin");
          }

          if(result["profil"]=="livreur")
          {
            localStorage.setItem("token_livreur",JSON.stringify(result));
           let item = JSON.parse(localStorage.getItem("token_livreur"));
            this.router.navigateByUrl("/livreur");
          }
         
          //console.log("ITO"+item["token"]);

        }
        
         // this.createdUser.emit(result);
          //this.refresh();
       
      }
    });
     
  }
  private initForm() {
    this.UserForm = new FormGroup({
      email: new FormControl(this.email, Validators.required),
      mdp: new FormControl(this.mdp, Validators.required)
    });
  }
}
