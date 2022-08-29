import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
private baseUrl=environment.apiBaseUrl+"utilisateurs";
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(`${this.baseUrl}`, utilisateur);
  }

  public deleteUtilisateur(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
