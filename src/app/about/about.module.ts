import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule, NgbModule
  ]
})
export class AboutModule { }
