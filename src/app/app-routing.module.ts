import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarComponent} from "./Login/registrar/registrar.component";
import {PrincipalComponent} from "./Login/principal/principal.component";

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'ingresar', component: PrincipalComponent},
  {path: '', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
