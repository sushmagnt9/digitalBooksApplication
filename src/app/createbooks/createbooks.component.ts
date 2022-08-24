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
  
       this.bookService.CreateBook(this.book)
       .subscribe(
         response => {
          console.log(response);
        }
      );
     
 }

  }
  // onSubmit(){
  //   if(this.book.bookId===''){
  //     this.bookService.CreateBook(this.book)
  //     .subscribe(
  //       response => {
  //         this.CreateBook();
  //         this.book = {
  //          bookId:'',
  //          logo:'',
  //          title:'',
  //          category:'',
  //          price:'',
  //          authorId:'',
  //          publisher:'',
  //          publishesDate:'',
  //          content:'',
  //          active:'',
  //          createdDate:'',
  //          modifiedDate:''
  //         };
  //       }
  //     );
  //   }
  //   else{
  //     this.updateBook(this.book);
  //   }    
  // }


