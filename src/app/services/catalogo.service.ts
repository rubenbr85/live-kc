import { BOOKS } from './../models/books.data';
import { Book } from './../models/books.model';
import { Injectable } from '@angular/core';

@Injectable()

export class CatalogoService {

  private aBooks: Array<Book>;

  constructor() {
    this.aBooks = BOOKS;
  }

  getBooks() {
    return this.aBooks;
  }

  getBook(id: number | string) {
    return this.aBooks.find(book => book.id === +id);
  }
}
