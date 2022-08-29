import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisComponent } from './avis/avis.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  {
    path: 'utilisateur',
    component : UtilisateurComponent
  },
  {
    path: 'reservation',
    component : ReservationComponent
  },
  {
    path: 'avis',
    component : AvisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
