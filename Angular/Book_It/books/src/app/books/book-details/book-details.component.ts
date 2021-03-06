import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models';
import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input()
  book: Book;
  constructor() { }

  ngOnInit() {
  }

}
