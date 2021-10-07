import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }
  ngOnInit() { this.bookService.getBooks().then(books => this.books = books); }

}