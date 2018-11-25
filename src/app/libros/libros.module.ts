import { GbooksService } from './../services/gbooks.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { MbooksService } from '../services/mbooks.service';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { GoogleByServiceComponent } from './google-by-service/google-by-service.component';

@NgModule({
  declarations: [LibrosComponent, MockBooksComponent, GoogleBooksComponent, GoogleByServiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ],
  providers: [MbooksService, GbooksService]
})
export class LibrosModule { }
