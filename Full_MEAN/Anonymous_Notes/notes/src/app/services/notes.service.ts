import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http: HttpClient) { }
  getNotes() {
    return this._http.get('/api/notes');
  }
  createNote(note) {
    return this._http.post('/api/notes', note);
  }
}
