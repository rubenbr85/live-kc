import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-control-tareas',
  templateUrl: './control-tareas.component.html',
  styleUrls: ['./control-tareas.component.css']
})
export class ControlTareasComponent implements OnInit {

  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTareas(tarea) {
    this.aTareas.push(tarea);
  }

  deleteTareas(i) {
    console.log('Eliminar item: ' + i);
    this.aTareas.splice(i, 1);
    console.dir(this.aTareas);
  }

}
