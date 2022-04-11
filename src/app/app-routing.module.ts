import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { BeneficeRestoComponent } from './admin/benefice/benefice.component';
import { ClientComponent } from './client/client/client.component';
import { CommandeComponent } from './client/commande/commande.component';
import { LivrerComponent } from './client/livrer/livrer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LivreurComponent } from './livreur/livreur.component';
import { LoginComponent } from './login/login.component';
import { BeneficeComponent } from './restaurant/benefice/benefice.component';
import { CommandeRestaurantComponent } from './restaurant/commande/commande.component';
import { RestaurantComponent } from './restaurant/liste-plat/restaurant.component';
import { NewPlatComponent } from './restaurant/new-plat/new-plat.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login/:email',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path:'client',component:ClientComponent},
  {path:'commande/:id',component:CommandeComponent},
  {path:'admin',component:AdminComponent},
  {path:'livreur',component:LivreurComponent},
  {path:'plat/nouveau',component:NewPlatComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'commande-en-cours',component:LivrerComponent},
  {path:'restaurant/commande',component:CommandeRestaurantComponent},
  {path:'restaurant/benefice',component:BeneficeComponent},
  {path:'admin/benefice',component:BeneficeRestoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
