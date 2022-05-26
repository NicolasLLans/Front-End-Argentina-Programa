import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../models/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private apiServerUrl=environment.apiBaseUrl
  
  
  constructor(private http:HttpClient) { }

  public obtenerAcercaDe():Observable<AcercaDe[]>{
    return this.http.get<AcercaDe[]>(`${this.apiServerUrl}/about/all`);
  }

  public editarAcercaDe(acercaDe: AcercaDe):Observable<AcercaDe>{
    return this.http.put<AcercaDe>(`${this.apiServerUrl}/about/update`,acercaDe);
  }

 
}
