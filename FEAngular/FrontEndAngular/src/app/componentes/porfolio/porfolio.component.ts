import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  private apiServerUrl= 'https://serene-basin-54168.herokuapp.com/'
  public personas:Persona[]=[];
  isAdmin = false;

  constructor(private http:HttpClient, private personaService:PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.verPersona();
    this.isAdmin=this.tokenService.IsAdmin();
  }

  public verPersona():void{
    this.personaService.verPersona().subscribe({
      next:(Response:Persona[]) =>{
      this.personas=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    }); 
  }
}
