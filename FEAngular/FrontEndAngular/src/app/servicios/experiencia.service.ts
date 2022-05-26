import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl=environment.apiBaseUrl
  
  constructor(private http:HttpClient) { }

  public obtenerExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/all`);
  }

  public crearExperiencia(experiencias: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/add`,experiencias);
  }
  public editarExperiencia(experiencias: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/update`,experiencias);
  }
  public borrarExperiencia(experienciasId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/delete/${experienciasId}`);
  }


}
