import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  @Output('addBook') book = new EventEmitter<Book>();
  @Input('bkLst') bookList:Array<Book>;
  constructor() {}

  @ViewChild('form') fr:NgForm;

  bookName_v: string='';
  author_v: string='';
  pageCount_v: number=0;
  price_v: number=0;
  title_v: string='';

  addNewBook() {
    this.book.emit({
      bookName: this.bookName_v,
      author: this.author_v,
      pageCount:this.pageCount_v,
      price:this.price_v,
      title:this.title_v
    });
  }
  check():boolean{
    if(this.bookList.length>=6){
      return false;
    }else{

      return true;
    }
  }

  ngOnInit(): void {

  }

  onSubmit(form:NgForm){
    console.log(this.fr);
  }
}
