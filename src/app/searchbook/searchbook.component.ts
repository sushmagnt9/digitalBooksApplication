import { Component, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { bookService } from '../service/book.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  title = 'books';
  book : Book = {
    bookId:0,
    logo:'',
title:'',
category:'',
price: '',
authorName : '',
publisher:'',               
publishedDate:new Date(),                 
content:'',           
active:true,
 }
  constructor(private bookService : bookService) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
      
        this.bookService.SearchBooks(this.book)
        .subscribe(
          response => {
            console.log(response);
           }
         );
       }
}
