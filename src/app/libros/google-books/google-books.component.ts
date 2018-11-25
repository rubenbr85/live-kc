import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kc-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.clave = '';
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    this.aLibros = [];

    if (this.clave.length > 0) {
      const URL = this.urlBase + this.clave;
      this.clave = '';
      this.aLibros = [];

      this.http.get(URL).subscribe(
        (response: any) => {
          response.items.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
          }); }
      );
    }

  }
}
