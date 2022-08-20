import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class bookService {

  baseUrl = 'https://localhost:7030/Book';

  constructor(private http: HttpClient) { }

  //Get all books
  getAllBooks():Observable<Book[]>{
      return this.http.get<Book[]>(this.baseUrl);
  }

  //Add book
  addBook(book: Book):Observable<Book> {
    book.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Book>(this.baseUrl, book);
  }

  deleteBook(id:string):Observable<Book>{
    return this.http.delete<Book>(this.baseUrl +'/'+id);
  }

  updateBook(book: Book):Observable<Book>{
    return this.http.put<Book>(this.baseUrl +'/'+book.id,book);
  }
}
