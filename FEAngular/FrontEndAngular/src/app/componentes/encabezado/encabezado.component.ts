import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  public personas:Persona[]=[];
  formVisibility:boolean = false
  public editPersona:Persona | undefined

  constructor(private personaService:PersonaService ) { }

  ngOnInit(): void {
    this.verPersona();
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

  onSubmit(persona:Persona):void {
    this.formVisibility=false; //Cierra El Formulario
    this.editPersona=persona;
    document.getElementById('imagen')?.click();
    this.personaService.actualizar(persona).subscribe({
      next: (response:Persona) => {
        console.log(response);
        this.verPersona()
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
}

//boton de edicion de AcercaDe (Abre el formulario)
editarTexto(){
  console.log("funciona")
  this.formVisibility=true;
}

}
