import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/loginUsuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  errMsj!: string;
  isLoginFail=false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
  
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        
        this.tokenService.setToken(data.token);
       
      
        this.router.navigate(['/porfolio']);
      },
      err => {
        this.errMsj = err.error.menssage;
      this.isLoginFail=true;
        
      }
    );
  }
  }
