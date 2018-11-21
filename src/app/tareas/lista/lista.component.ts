
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() aItems;
  @Output() evBorrar: EventEmitter<number>;

  constructor() {
    this.evBorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  btnBorrar(i) {
    this.evBorrar.emit(i);
  }
}
