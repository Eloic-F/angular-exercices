import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  users!: any[];
  utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    this.findAllUtilisateur();
  }
  public findAllUtilisateur() {
    this.utilisateurService.findAll().subscribe((data) => {
      this.users = data;
    });
  }

  public addUtilisateur() {
    this.utilisateurService.addUtilisateur(this.utilisateur).subscribe(() => {
      this.findAllUtilisateur(); //Mise à jour liste utilisateurs
      this.utilisateur = new Utilisateur();
    });
  }

  public deleteUtilisateur(id: number) {
    this.utilisateurService.deleteUtilisateur(id).subscribe(() => {
      this.findAllUtilisateur();
    });
  }
}
