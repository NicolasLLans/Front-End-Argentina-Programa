import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TokenService } from '../servicios/token.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {


  constructor(
    private temlateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef, 
    private tokenService: TokenService 
    ) { }

  ngOnInit():void{

  }  

 @Input()
 set appRole(val: string){ 
  console.log(val= val + this.tokenService.IsAdmin())
  if (this.tokenService.IsAdmin()){
    this.viewContainer.createEmbeddedView(this.temlateRef);
  }
 }   
}
