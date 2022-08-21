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
  book : Book = {
    id:0,
    logo:'',
    BookTitle:'',
    Category:'',
    Price:'',
    Publisher:'',
    PublishedDate:'',
    Active:'',
    Content:''
  }

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

  onSubmit(){
    if(this.book.id == 0){
      this.bookService.CreateBook(this.book)
      .subscribe(
        response => {
          this.getAllBooks();
          this.book = {
            id:0,
            logo:'',
            BookTitle:'',
            Price:'',
            Category:'',
            Publisher:'',
            PublishedDate:'',
            Content:'',
            Active:''
          };
        }
      );
    }
    else{
      this.updateBook(this.book);
    }    
  }

  deleteBook(id:string){
    this.bookService.deleteBook(id)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }

  populateForm(book: Book){
    this.book = book;

  }
  
  updateBook(book: Book){
    this.bookService.updateBook(book)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }

}
