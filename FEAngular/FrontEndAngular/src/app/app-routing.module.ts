import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'porfolio',component:PorfolioComponent, canActivate:[GuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
