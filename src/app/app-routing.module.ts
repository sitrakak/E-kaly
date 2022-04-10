import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ClientComponent } from './client/client/client.component';
import { CommandeComponent } from './client/commande/commande.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/liste-plat/restaurant.component';
import { NewPlatComponent } from './restaurant/new-plat/new-plat.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'login/:email',component:LoginComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path:'client',component:ClientComponent},
  {path:'commande/:id',component:CommandeComponent},
  {path:'admin',component:AdminComponent},
  {path:'plat/nouveau',component:NewPlatComponent},
  {path:'inscription',component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
