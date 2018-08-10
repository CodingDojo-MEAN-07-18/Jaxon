import { Component } from '@angular/core';
import { format } from 'util';
import { Book } from './models/book';
import { NgForm } from '../../node_modules/@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  book: Book = new Book();
  books: Book[] = [];
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.books.push(this.book);
    this.book = new Book();
    form.reset();
    console.log('submitting form', this.book);
  }
}
