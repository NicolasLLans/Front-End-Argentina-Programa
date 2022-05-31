import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged=false;
    isLoginFail=false;
    loginUsuario: LoginUsuario;
    nombreUsuario: string; 
    password: string; 
    roles: string[]=[];
    errMsjs: string;

 
  constructor(
    private tokenService:TokenService, 
    private autenticacionService:AutenticacionService, 
    private router:Router
    ){
    }
    
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      
      this.isLogged=true;
      this.isLoginFail=false;
      this.roles=this.tokenService.getAuththorities();
    }
  }

  onLogin():void{
    this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password);
    this.autenticacionService.login(this.loginUsuario).subscribe(
      data=>{
        this.isLogged=true;
        this.isLoginFail=false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuththorities(data.authorities);
        this.roles =data.authorities;
      },
      err=>{
        this.isLogged=false;
        this.isLoginFail=true;
        this.errMsjs=err.error.mensaje;
        console.log(this.errMsjs);
      }
    );
  }
 
 
}
