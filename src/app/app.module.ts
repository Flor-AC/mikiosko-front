import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Login/principal/principal.component';
import { RegistrarComponent } from './Login/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
