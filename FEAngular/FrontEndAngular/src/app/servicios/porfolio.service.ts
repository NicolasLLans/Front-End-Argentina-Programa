import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  private apiServerUrl= 'https://serene-basin-54168.herokuapp.com'

  constructor(private http:HttpClient) { }

  public verPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}/personas/ver`);
  }
}
