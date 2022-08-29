import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl=environment.apiBaseUrl+"reservations";
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  public addReservation(reservation:Reservation):Observable<Reservation>{
    return this.httpClient.post<Reservation>(`${this.baseUrl}`, reservation);
  }

  public deleteReservation(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
