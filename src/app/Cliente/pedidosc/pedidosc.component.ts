import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedidosc',
  templateUrl: './pedidosc.component.html',
  styleUrls: ['./pedidosc.component.css']
})
export class PedidoscComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Volver() {
    this.router.navigate(['compra']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }
}
