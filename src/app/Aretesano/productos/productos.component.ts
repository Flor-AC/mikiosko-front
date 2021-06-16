import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  mostraralert: boolean;

  constructor(private router: Router) {this.mostraralert = false;}

  ngOnInit(): void {
  }

  Home() {
    this.router.navigate(['home']);
  }

  Pedidos() {
    this.router.navigate(['pedido']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }

  Subir() {
    this.mostraralert = true;
  }
}
