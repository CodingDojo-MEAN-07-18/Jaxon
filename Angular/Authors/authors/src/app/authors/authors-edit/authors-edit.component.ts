import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Author } from '../models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Console } from '@angular/core/src/console';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.css']
})
export class AuthorsEditComponent implements OnInit {
  author;
  id: number;
  constructor(private readonly _http: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this._http.editAuthor(this.id)
        .subscribe((author) => {
          this.author = author;
      });
}
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this._http.saveAuthor(this.id, this.author)
      .subscribe(author => {
        this.author = new Author();
        this._router.navigate(['']);
      });
  }
}
