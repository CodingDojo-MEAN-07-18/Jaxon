import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author, Quote } from './authors/models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this._http.get<Author[]>('/api/authors');
  }
  createAuthor(author): Observable<Author> {
    return this._http.post<Author>('/api/authors', author);
  }
  viewAuthor(id: number): Observable<Author> {
    return this._http.get<Author>('/author/' + id);
  }
  editAuthor(id: number): Observable<Author> {
    return this._http.get<Author>('/api/' + id + '/edit');
  }
  saveAuthor(id: number, author: Author): Observable<Author> {
    return this._http.put<Author>('/api/' + id + '/edit', author);
  }
  deleteAuthor(id: number): Observable<Author> {
    return this._http.delete<Author>('/api/' + id + '/delete');
  }
  getQuotes(id: number): Observable<Author> {
    return this._http.get<Author>('/api/' + id + '/view');
  }
}


