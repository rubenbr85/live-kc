import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GbooksService {

  aLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
   }

  getLibros(clave: string) {
    this.aLibros = [];

    if (clave.length > 0) {
      const URL = this.urlBase + clave;
      this.aLibros = [];

      return this.http.get(URL)
        .pipe(
          map(response => this.extractTitles(response))
        );
    }
  }

  private extractTitles(response: any) {
    return response.items.map(book => book.volumeInfo.title);
  }
}
