import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-about',
  template: `
  <ngb-accordion #acc="ngbAccordion" activeIds="ngb-panel-0">
  <ngb-panel title="Sobre el proyecto">
    <ng-template ngbPanelContent>
    <p>
      Proyecto desarrollado en Angular 7 para comprender el funcionamiento del lenguaje.
    </p>
    </ng-template>
  </ngb-panel>
  <ngb-panel title="About">
  <ng-template ngbPanelContent>
  <p>
    Uso del componente ngBoostrap (https://ng-bootstrap.github.io/#/home)
  </p>
  </ng-template>
</ngb-panel>
<ngb-panel title="Contactos">
<ng-template ngbPanelContent>
<p>
  Creacion de formularios, uso de ngFor, ngIf y validaciones. Comunicacion vista modelo mediante ngModel.
</p>
</ng-template>
</ngb-panel>
<ngb-panel title="Libros">
<ng-template ngbPanelContent>
<p>
  Consumo de servicios y subrouting
</p>
</ng-template>
</ngb-panel>
<ngb-panel title="Tareas">
<ng-template ngbPanelContent>
<p>
  Comuncacion entre componentes, uso de ngFor,...
</p>
</ng-template>
</ngb-panel>
</ngb-accordion>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
