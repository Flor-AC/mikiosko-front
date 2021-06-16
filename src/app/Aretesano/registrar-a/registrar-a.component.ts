import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-a',
  templateUrl: './registrar-a.component.html',
  styleUrls: ['./registrar-a.component.css']
})

export class RegistrarAComponent{

  mostraralert: boolean;
  constructor(private router:Router) {this.mostraralert = false;}

  ngOnInit(): void {
  }

  Registrar() {
    this.mostraralert = true;
  }

  Ingresar() {
    this.router.navigate(['ingresar']);
  }
}
