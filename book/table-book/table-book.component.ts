import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css']
})
export class TableBookComponent implements OnInit {

  @Input('bkLst') bookList:Array<Book>
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.bookList);
  }



}
