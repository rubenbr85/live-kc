import { Book } from './../../models/books.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'kc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  oBook: Book;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private catalogo: CatalogoService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.oBook = this.catalogo.getBook(id);
    } else {
      this.oBook = {id: 0, title: '', autor: '',  description: ''};
    }
  }

  gotoBooks() {
    this.router.navigateByUrl('/libros');
  }

}
