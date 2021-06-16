import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar-c',
  templateUrl: './ingresar-c.component.html',
  styleUrls: ['./ingresar-c.component.css']
})
export class IngresarCComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Subir() {
    this.router.navigate(['compra']);
  }

  Registrar() {
    this.router.navigate(['registrarC']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }
}
