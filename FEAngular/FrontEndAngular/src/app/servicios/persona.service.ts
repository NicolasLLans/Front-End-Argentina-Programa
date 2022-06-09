import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiServerUrl= 'https://serene-basin-54168.herokuapp.com/auth'

  constructor(private http:HttpClient) { }

  public verPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}/personas/ver`);
  }
  public actualizar(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/actualizar`,persona);
  }
  public deletePersona(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
}
