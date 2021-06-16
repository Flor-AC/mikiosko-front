import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./Login/principal/principal.component";
import {RegistrarCComponent} from "./Cliente/registrar-c/registrar-c.component";
import {IngresarCComponent} from "./Cliente/ingresar-c/ingresar-c.component";
import {HomeComponent} from "./Aretesano/home/home.component";
import {RegistrarAComponent} from "./Aretesano/registrar-a/registrar-a.component";
import {IngresarComponent} from "./Aretesano/ingresar/ingresar.component";
import {CompraComponent} from "./Cliente/compra/compra.component";

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarA', component: RegistrarAComponent},
  {path: 'registrarC', component: RegistrarCComponent},
  {path: 'ingresarC', component: IngresarCComponent},
  {path: 'compra', component: CompraComponent},
  {path: '', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
