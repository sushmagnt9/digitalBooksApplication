import { Component, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { bookService } from '../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletebooks',
  templateUrl: './deletebooks.component.html',
  styleUrls: ['./deletebooks.component.css']
})
export class DeletebooksComponent implements OnInit {
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
active:true
}
  constructor(private bookService : bookService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteBook(bookId:number):void{
    this.bookService.deleteBook(bookId)
    .subscribe(
      response => {
       console.log(response);
     }
   );
}
}