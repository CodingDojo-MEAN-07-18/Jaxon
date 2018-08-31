import { Component, OnInit } from '@angular/core';
import { Book } from '../../models';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;
  constructor(private readonly bookService: BookService) {
    console.log(bookService);
  }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }
  onSelect(book: Book) {
    console.log('Selecting');
    this.selectedBook = this.selectedBook === book ? null : book;
  }
  createBook(event: Book) {
    this.books.push(event);
  }
  onDelete(id) {
    this.bookService.deleteBook(id)
      .subscribe(deletedBook => {
        console.log(deletedBook);
        this.books = this.books.filter(book => book.id !== deletedBook.id);
      });
  }
  onEvent(event: Event) {
    console.log('Eventing');
    event.stopPropagation();
  }
}
