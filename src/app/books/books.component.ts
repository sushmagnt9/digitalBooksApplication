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
  books:Book[] = [];
  // book : Book = {
  //   BookId:0,
  //   Logo:'',
  //   Title:'',
  //   UserId: null,
  //   Category:'',
  //   AuthorName:'',
  //   Price:'',
  //   Publisher:'',
  //   PublishedDate:new Date(),
  //   Active:true,
  //   Content:''
  // }

  constructor(private bookService : bookService){
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks()
    .subscribe(
      response => { this.books = response}
    );
  }
  onSubmit(book:any){
    this.books = book ;
  }
  updateBook(book: Book){
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
