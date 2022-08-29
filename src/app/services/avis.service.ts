import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Avis } from '../models/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private baseUrl=environment.apiBaseUrl+"avis";
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  public addAvis(avis:Avis):Observable<Avis>{
    return this.httpClient.post<Avis>(`${this.baseUrl}`, avis);
  }

  public deleteAvis(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
