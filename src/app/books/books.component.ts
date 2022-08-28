import { Component, OnInit } from '@angular/core';
import { Book } from '../models/bookmodel';
import { bookService } from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = 'books';
  ShowFields:Boolean=false;
  Showgrid:Boolean=true;
  books:Book[] = [];
  book : Book = {
    bookId:0,
    logo:'',
    title:'',
    category:'',
    authorName:'',
    price:'',
    publisher:'',
    publishedDate:new Date(),
    active:true,
    content:''
  }

  constructor(private bookService : bookService){
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks()
    .subscribe(
      response => { 
        this.books = response
        this.Showgrid=true;
        this.ShowFields=false;
      }
    );
  }
  onSubmit(book:any){
    this.Showgrid=false;
    this.ShowFields=true;
    this.book = book ;
  }
  updateBook(book: Book){
    console.log(book);
       this.bookService.updateBook(book)
       .subscribe(
         response => {
         
           this.getAllBooks();
         }
       )
     }

  deleteBook(bookId:number){
    this.bookService.deleteBook(bookId)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }

  // onSubmit(){
  //   if(this.books.BookId == 0){
  //     this.bookService.CreateBook(this.books)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //       }
  //     );
  //   }
  //   else{
  //     this.updateBook(this.book);
  //   }    
  // }

   

  // populateForm(book: Book){
  //   this.book = book;

  // }
  
  // updateBook(book: Book){
  //   this.bookService.updateBook(book)
  //   .subscribe(
  //     response => {
  //       this.getAllBooks();
  //     }
  //   )
  // }

}
