import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-libros',
  template: `
    <div class="row">
      <kc-mock-books></kc-mock-books>
    </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
