import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AvisComponent } from './avis/avis.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UtilisateurService } from './services/utilisateur.service';
import { AvisService } from './services/avis.service';
import { ReservationService } from './services/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    AvisComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UtilisateurService,AvisService,ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
