import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Subir() {
    this.router.navigate(['home']);
  }

  Registrar() {
    this.router.navigate(['registrarA']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }
}
