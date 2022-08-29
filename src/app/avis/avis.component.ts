import { Component, OnInit } from '@angular/core';
import { Avis } from '../models/avis';
import { AvisService } from '../services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  aviss!: any[];
  avis: Avis = new Avis();
  constructor(private avisService: AvisService) {}

  ngOnInit(): void {
    this.findAllAvis();
  }
  public findAllAvis() {
    this.avisService.findAll().subscribe((data) => {
      this.aviss = data;
    });
  }

  public addAvis() {
    this.avisService.addAvis(this.avis).subscribe(() => {
      this.findAllAvis(); //Mise à jour liste aviss
      this.avis = new Avis();
    });
  }

  public deleteAvis(id: number) {
    this.avisService.deleteAvis(id).subscribe(() => {
      this.findAllAvis();
    });
  }
}
