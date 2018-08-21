import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Author } from '../models';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-authors-new',
  templateUrl: './authors-new.component.html',
  styleUrls: ['./authors-new.component.css']
})
export class AuthorsNewComponent implements OnInit {
  author: Author = new Author();
  constructor(
    private readonly _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  @Output()
  addAuthor = new EventEmitter<Author>();
  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this._http.createAuthor(this.author)
      .subscribe(author => {
        this.addAuthor.emit(author);
        this.author = new Author();
        form.reset();
        this._router.navigate(['']);
      });
  }

}
