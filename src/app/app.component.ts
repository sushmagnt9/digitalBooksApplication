import { Component, OnInit } from '@angular/core';
import { Book } from './models/bookmodel';
import { bookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'books';
  books:Book[] = [];
  book : Book = {
    id:'',
    BookTitle:'',
    Category:'',
    Price:'',
    UserId:'',
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
    if(this.book.id === ''){
      this.bookService.addBook(this.book)
      .subscribe(
        response => {
          this.getAllBooks();
          this.book = {
            id:'',
            BookTitle:'',
            UserId:'',
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
