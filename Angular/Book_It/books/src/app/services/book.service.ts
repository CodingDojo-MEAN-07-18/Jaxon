import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BOOKS } from '../data/book-data';
import { Book } from '../models';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  constructor(private readonly http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    return this.http.get<Book[]>(this.base);
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }
}
