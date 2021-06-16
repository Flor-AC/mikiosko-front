import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar-c',
  templateUrl: './registrar-c.component.html',
  styleUrls: ['./registrar-c.component.css']
})
export class RegistrarCComponent implements OnInit {

  mostraralert: boolean;

  constructor(private router: Router) {this.mostraralert = false;}

  ngOnInit(): void {
  }

  Registrar() {
    this.mostraralert = true;
  }

  Ingresar() {
    this.router.navigate(['ingresarC']);
  }
}
