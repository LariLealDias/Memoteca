import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I drink coffee',
      autoria: 'Star',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ips elit. Fusce sed finibus exLorem ips elit. Fusce sed finibus exLorem ips elit. Fusce sed finibus exLorem ips elit. Fusce sed finibus exLorem ips elit. Fusce sed finibus exLorem ips elit. Fusce sed finibus exLorem ips elit. Fusce sed finibus ex. Vestibulum lobortis sagittis nisl, eu bibendum enim tincidunt ac. Nullam et nisi vel nulla pellentesque lacinia. Vivamus id gravida est. Nullam finibus varius nisi, et cursus turpis ullamcorper vel. Integer ultricies feugiat purus, vel pulvinar ex efficitur id. Cras convallis, turpis in tempor cursus, lectus ligula lacinia urna, ut ultrices eros enim non tortor. Phasellus fringilla tortor non ultrices iaculis.',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: '',
      autoria: 'Star',
      modelo: 'modelo1'
    },
    {
      conteudo: 'I drink coffee',
      autoria: 'Star',
      modelo: 'modelo2'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
