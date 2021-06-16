import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-artesanias',
  templateUrl: './artesanias.component.html',
  styleUrls: ['./artesanias.component.css']
})
export class ArtesaniasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  MisPedidos() {
    this.router.navigate(['pedidoc']);
  }

  Perfil() {
    this.router.navigate(['perfil']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }

  Volver() {
    this.router.navigate(['compra']);
  }
}
