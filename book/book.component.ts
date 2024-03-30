import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddNewBook(book:Book){
    this.bookList.push(book);
    console.log(this.bookList);
  }

  bookList:Array<Book>=[];
}


