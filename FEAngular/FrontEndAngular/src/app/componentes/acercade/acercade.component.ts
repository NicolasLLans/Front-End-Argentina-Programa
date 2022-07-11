import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/models/acercaDe';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { TokenService } from 'src/app/servicios/token.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  
  public acercaDe:AcercaDe[]=[]
  public formVisibility = false
  public editAcercaDe:AcercaDe | undefined

  constructor(private acercaDeService:AcercaDeService, private tokenService:TokenService) { }
 

  ngOnInit(): void {
    this.obtenerAcercaDe();
  }

  //Muestra el texto de AcarcaDe

  public obtenerAcercaDe():void{
    this.acercaDeService.obtenerAcercaDe().subscribe({
      next:(Response:AcercaDe[]) =>{
      this.acercaDe=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    });
  }

  //guarda los cambios del texto de AcarcaDe
  
  onSubmit(acercaDe:AcercaDe):void {
      this.formVisibility=false; //Cierra El Formulario
      this.editAcercaDe=acercaDe;
      document.getElementById('texto')?.click();
      this.acercaDeService.editarAcercaDe(acercaDe).subscribe({
        next: (response:AcercaDe) => {
          console.log(response);
          this.obtenerAcercaDe()
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message)
        }
      })
  }

  //boton de edicion de AcercaDe (Abre el formulario)
  editarTexto(){
    console.log("funciona")
  if(this.tokenService.IsAdmin()){
    this.formVisibility=true;
  }else{
    this.formVisibility=false;
    return alert("Sólo el administrador puede editar");
  }
  }

    
}