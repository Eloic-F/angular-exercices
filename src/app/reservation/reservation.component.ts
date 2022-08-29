import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations!: any[];
  reservation: Reservation = new Reservation();
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.findAllReservation();
  }
  public findAllReservation() {
    this.reservationService.findAll().subscribe((data) => {
      this.reservations = data;
    });
  }

  public addReservation() {
    this.reservationService.addReservation(this.reservation).subscribe(() => {
      this.findAllReservation(); //Mise à jour liste reservations
      this.reservation = new Reservation();
    });
  }

  public deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.findAllReservation();
    });
  }
}
