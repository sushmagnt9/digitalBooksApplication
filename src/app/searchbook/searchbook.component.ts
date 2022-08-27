import { Component, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { BookSearch } from '../models/booksearch';
import { bookService } from '../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  title = 'search books';
  books: Book[]= [];
  book : BookSearch = {
    
title:'',
category:'',
authorName : '',
publisher:'', 
content:''              

 }
  constructor(private bookService : bookService,private router : Router) { }

  ngOnInit(): void {
    
  }
  response : any
  onSubmit():void{
    
        
    
        debugger;
        this.bookService.SearchBooks(this.book)
        .subscribe(
          response => { this.response = response})
          //  this.router.navigate(['/Books']) ;
       }
}
