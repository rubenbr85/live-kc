import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { MbooksService } from '../services/mbooks.service';

@NgModule({
  declarations: [LibrosComponent, MockBooksComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ],
  providers: [MbooksService]
})
export class LibrosModule { }
