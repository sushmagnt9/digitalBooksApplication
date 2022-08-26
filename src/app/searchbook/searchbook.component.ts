import { Component, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { BookSearch } from '../models/booksearch';
import { bookService } from '../service/book.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  title = 'books';
  book : BookSearch = {
    
title:'',
category:'',
authorName : '',
publisher:'', 
content:''              

 }
  constructor(private bookService : bookService) { }

  ngOnInit(): void {
    
  }
  response : any
  onSubmit():void{
    
        
    
        debugger;
        this.bookService.SearchBooks(this.book)
        .subscribe(
          response => { this.response = response});
            
       }
}
