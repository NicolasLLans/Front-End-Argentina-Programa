import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { GuardGuard} from './servicios/guard.guard';
import { LoginGuard } from './servicios/login.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path:'registrarse', component: RegistrarseComponent, canActivate: [LoginGuard]},
  {path:'porfolio', component: PorfolioComponent, canActivate: [GuardGuard], data:{expectedRol:['admin','user']}},
  {path:'**', redirectTo:'login', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
