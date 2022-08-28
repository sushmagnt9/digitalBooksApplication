import { Component, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { bookService } from '../service/book.service';

@Component({
  selector: 'app-createbooks',
  templateUrl: './createbooks.component.html',
  styleUrls: ['./createbooks.component.css']
})
export class CreatebooksComponent implements OnInit {
  books:Book[] = [];
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
    
  constructor(private bookService:bookService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
      debugger;
       this.bookService.CreateBook(this.book)
       .subscribe(
         response => {
          console.log(response);
        }
      );
     
 }

  }
  


