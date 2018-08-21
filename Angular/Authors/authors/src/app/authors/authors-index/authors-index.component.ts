import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Author } from '../models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Console } from '@angular/core/src/console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authors-index',
  templateUrl: './authors-index.component.html',
  styleUrls: ['./authors-index.component.css']
})
export class AuthorsIndexComponent implements OnInit {
  authors: Author[] = [];
  constructor(
    private readonly _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    this._http.getAuthors()
    .subscribe(authors => {
      console.log('Got Authors', authors);
      this.authors = authors;
    });
  }
  onView(id) {
    this._router.navigate(['/' + id + '/view']);
  }
  onEdit(id) {
    this._router.navigate(['/' + id + '/edit']);
  }
  onDelete(id) {
    this._http.deleteAuthor(id)
      .subscribe((deletedAuthor) => {
        console.log(deletedAuthor);
        this.getAuthors();
      });
  }
}
