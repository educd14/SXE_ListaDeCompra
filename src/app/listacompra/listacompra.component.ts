import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacompra',
  templateUrl: './listacompra.component.html',
  styleUrls: ['./listacompra.component.css']
})
export class ListacompraComponent implements OnInit {

  productos: any[];

  constructor() {
    const producto1 = {
      nombre: 'Pimientos',
      comprado: false
    };
    const producto2 = {
      nombre: 'Yogures',
      comprado: false
    };

    const producto3 = {
      nombre: 'Agua',
      comprado: false
    };

    const producto4 = {
      nombre: 'Queso',
      comprado: false
    };

    const producto5 = {
      nombre: 'Lechuga',
      comprado: false
    };

    const producto6 = {
      nombre: 'Mermelada',
      comprado: false
    };
    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
    this.productos.push(producto5);
    this.productos.push(producto6);
  }

  onClickComprar(int) {
    this.productos[int].comprado = false;
  }
  onClickComprado(int) {
    this.productos[int].comprado = true;
  }
  ngOnInit(): void {
  }

}
