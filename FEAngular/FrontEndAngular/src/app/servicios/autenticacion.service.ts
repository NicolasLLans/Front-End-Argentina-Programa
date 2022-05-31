import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private apiServerUrl = "http://localhost:8080/auth/"
  currentUsersubject: BehaviorSubject<any>
  constructor(private http:HttpClient, ) { 
    console.log("el servicio de auth esta corriendo");
    this.currentUsersubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

  nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.apiServerUrl + 'nuevo',nuevoUsuario)
  }
  
  login(loginUsuario: LoginUsuario):Observable<JwtDto>
  {
    return this.http.post<JwtDto>(this.apiServerUrl+ 'login', loginUsuario);  
  }

}
