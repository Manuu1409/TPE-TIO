import { Component, OnInit } from '@angular/core';
import { Gaseosa } from './Gaseosas';

@Component({
  selector: 'app-lista-gaseosas',
  templateUrl: './lista-gaseosas.component.html',
  styleUrls: ['./lista-gaseosas.component.scss']
})
export class ListaGaseosasComponent implements OnInit {

  Gaseosas: Gaseosa[] = [
    {
    nombre : "Fanta",
    sabor : "Naranja",
    precio : 85,
    stock : 8,
    
  },
  {
    nombre : "Sprite",
    sabor : "Limon",
    precio : 95,
    stock : 18,
    
  },
  {
    nombre : "SevenUp",
    sabor : "Lima-Limon",
    precio : 70,
    stock : 10,
    
  }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
