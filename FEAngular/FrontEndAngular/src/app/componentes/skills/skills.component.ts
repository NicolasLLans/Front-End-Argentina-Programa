import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills:Skills[]=[];
  public editarSkills:Skills | undefined;
  public deleteSkills:Skills | undefined;

  constructor(private skillsService:SkillsService, private tokenService:TokenService) { }

  ngOnInit( ): void {
    this.obtenerSkills();
  }

  public obtenerSkills():void{
    this.skillsService.obtenerSkills().subscribe({
      next:(Response:Skills[]) =>{
      this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    });
  }

  public onOpenModal(mode:String, skills?: Skills):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    if(!this.tokenService.IsAdmin()){
      alert("Sólo los administradores pueden editar")
    }else{
      button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addSkillsModal');
    }else if(mode==='delete'){
      this.deleteSkills=skills;
      button.setAttribute('data-target','#deleteSkillsModal');
    }else if(mode==='edit'){
      this.editarSkills=skills;
      button.setAttribute('data-target','#editSkillsModal');
    }
    container?.appendChild(button); 
    button.click();
    }
    
    console.log("llama a la funcion");
  }

  public onAddSkills(addForm: NgForm):void{
    document.getElementById('add-skills-form')?.click();
    this.skillsService.addSkills(addForm.value).subscribe({
      next: (response:Skills) =>{
        console.log(response);
        this.obtenerSkills();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
        addForm.reset();
      }
    })
  }

  public onUpdateSkills(skills: Skills){
    this.editarSkills=skills;
    document.getElementById('add-skills-form')?.click();
    this.skillsService.editarSkills(skills).subscribe({
      next: (response:Skills) =>{
        console.log(response);
        this.obtenerSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

  public onDeleteSkills(idSkill:number):void{
    this.skillsService.borrarSkills(idSkill).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.obtenerSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

}
