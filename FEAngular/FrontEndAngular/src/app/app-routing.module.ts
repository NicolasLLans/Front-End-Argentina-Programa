import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { GuardGuard as guard} from './servicios/guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'registrarse', component: RegistrarseComponent},
  {path:'porfolio', component: PorfolioComponent, canActivate: [guard], data:{expectedRol:['admin','user']}},
  {path:'**', redirectTo:'login', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
