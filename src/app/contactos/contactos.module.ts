import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormVdComponent } from './form-vd/form-vd.component';

@NgModule({
  declarations: [ContactosComponent, FormVdComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule { }
