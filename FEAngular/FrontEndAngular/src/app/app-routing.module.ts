import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'registrarse', component: RegistrarseComponent},
  {path:'porfolio', component: PorfolioComponent},
  {path:'**', redirectTo:'login', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
