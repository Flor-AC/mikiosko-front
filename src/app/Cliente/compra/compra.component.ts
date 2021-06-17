import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  MisPedidos() {
    this.router.navigate(['pedidoc']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }

  IrArtesano() {
    this.router.navigate(['artesanias']);
  }
}
