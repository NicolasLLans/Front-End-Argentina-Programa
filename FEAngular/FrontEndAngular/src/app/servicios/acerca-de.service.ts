import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../models/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private apiServerUrl= 'https://serene-basin-54168.herokuapp.com'  
  
  constructor(private http:HttpClient) { }

  public obtenerAcercaDe():Observable<AcercaDe[]>{
    return this.http.get<AcercaDe[]>(`${this.apiServerUrl}/about/all`);
  }

  public editarAcercaDe(acercaDe: AcercaDe):Observable<AcercaDe>{
    return this.http.put<AcercaDe>(`${this.apiServerUrl}/about/update`,acercaDe);
  }

 
}
