import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Home() {
    this.router.navigate(['home']);
  }

  Productos() {
    this.router.navigate(['producto']);
  }

  Principal() {
    this.router.navigate(['principal']);
  }
}
