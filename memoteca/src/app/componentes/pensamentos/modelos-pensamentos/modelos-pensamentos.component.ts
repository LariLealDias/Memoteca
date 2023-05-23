import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-modelos-pensamentos',
  templateUrl: './modelos-pensamentos.component.html',
  styleUrls: ['./modelos-pensamentos.component.css']
})
export class ModelosPensamentosComponent implements OnInit {
  @Input() pensamento: Pensamento={
    id:0,
    autoria: '',
    conteudo:'',
    modelo: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  selecionarModelo(modelo: string) {
    this.pensamento.modelo = modelo;
  }

}
