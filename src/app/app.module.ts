import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Compiler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/liste-plat/restaurant.component';
import { ClientComponent } from './client/client/client.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewPlatComponent } from './restaurant/new-plat/new-plat.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LivreurComponent } from './livreur/livreur/livreur.component';
import { CommandeComponent } from './client/commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    LoginComponent,
    RestaurantComponent,
    ClientComponent,
    InscriptionComponent,
    NewPlatComponent,
    AdminComponent,
    LivreurComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
