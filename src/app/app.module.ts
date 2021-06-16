import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Login/principal/principal.component';
import { HomeComponent } from './Aretesano/home/home.component';
import { CompraComponent } from './Cliente/compra/compra.component';
import { IngresarCComponent } from './Cliente/ingresar-c/ingresar-c.component';
import { RegistrarCComponent } from './Cliente/registrar-c/registrar-c.component';
import {IngresarComponent} from "./Aretesano/ingresar/ingresar.component";
import {RegistrarAComponent} from "./Aretesano/registrar-a/registrar-a.component";
import { PedidosComponent } from './Artesano/pedidos/pedidos.component';
import { ProductosComponent } from './Artesano/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HomeComponent,
    CompraComponent,
    IngresarComponent,
    IngresarCComponent,
    RegistrarAComponent,
    RegistrarCComponent,
    PedidosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
