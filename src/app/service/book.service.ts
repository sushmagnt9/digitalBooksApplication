import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class bookService {

  baseUrl = 'https://localhost:7030/Book';
  baseUrl1 = 'https://localhost:7030/Book/CreateBook'

  constructor(private http: HttpClient) { }

  //Get all books
  getAllBooks():Observable<Book[]>{
      return this.http.get<Book[]>(this.baseUrl);
  }

  //Add book
  CreateBook(book: Book):Observable<Book[]> {
   book.BookId = 0;//'00000000-0000-0000-0000-00000000000';
    return this.http.post<Book[]>(this.baseUrl1, book);
  }

  deleteBook(id:string):Observable<Book>{
    return this.http.delete<Book>(this.baseUrl +'/'+id);
  }

  updateBook(book: Book):Observable<Book>{
    return this.http.put<Book>(this.baseUrl +'/'+book.BookId,book);
  }
}
