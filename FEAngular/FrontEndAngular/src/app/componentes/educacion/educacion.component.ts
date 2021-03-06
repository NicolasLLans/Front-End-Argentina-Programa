import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[]=[];
  public editarEducacion:Educacion | undefined;
  public deleteEducacion:Educacion | undefined;


  constructor(private educacionService:EducacionService, private tokenService:TokenService ) { }

  ngOnInit(): void {
    this.obtenerEducacion();
  }

  public obtenerEducacion():void{
    this.educacionService.obtenerEducacion().subscribe({
      next:(Response:Educacion[]) =>{
      this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    });
  }

    public onOpenModal(mode:String, educacion?: Educacion):void{
      const container=document.getElementById('main-container');
      const button=document.createElement('button');
      if(!this.tokenService.IsAdmin()){
        alert("Sólo los administradores pueden editar")
      }else{
      button.style.display='none';
      button.setAttribute('data-toggle','modal');
      if(mode==='add'){
        button.setAttribute('data-target','#addEducacionModal');
      }else if(mode==='delete'){
        this.deleteEducacion=educacion;
        button.setAttribute('data-target','#deleteEducacionModal');
      }else if(mode==='edit'){
        this.editarEducacion=educacion;
        button.setAttribute('data-target','#editEducacionModal');
      }
      container?.appendChild(button); 
      button.click();
    }
      console.log("llama a la funcion");
    }

    public onAddEducacion(addForm: NgForm):void{
      document.getElementById('add-educacion-form')?.click();
      this.educacionService.addEducacion(addForm.value).subscribe({
        next: (response:Educacion) =>{
          console.log(response);
          this.obtenerEducacion();
          addForm.reset();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message)
          addForm.reset();
        }
      })
    }

    public onUpdateEducacion(educacion: Educacion){
      this.editarEducacion=educacion;
      document.getElementById('add-educacion-form')?.click();
      this.educacionService.updateEducacion(educacion).subscribe({
        next: (response:Educacion) =>{
          console.log(response);
          this.obtenerEducacion();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message)
        }
      })
    }

    public onDeleteEducacion(idEdu:number):void{
      this.educacionService.deleteEducacion(idEdu).subscribe({
        next: (response:void) =>{
          console.log(response);
          this.obtenerEducacion();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message)
        }
      })
    }

}
