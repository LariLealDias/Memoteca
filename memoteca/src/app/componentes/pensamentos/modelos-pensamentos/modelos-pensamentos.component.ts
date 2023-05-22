import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelos-pensamentos',
  templateUrl: './modelos-pensamentos.component.html',
  styleUrls: ['./modelos-pensamentos.component.css']
})
export class ModelosPensamentosComponent implements OnInit {
  @Input() pensamento: any;
  constructor() { }

  ngOnInit(): void {
  }

}
