import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/bookmodel';
import { BookSearch } from '../models/booksearch';

@Injectable({
  providedIn: 'root'
})
export class bookService {

  baseUrl = 'https://localhost:7030/Book';
  baseUrl1 = 'https://localhost:7030/Book/CreateBook';
  baseUrl2 = 'https://localhost:7030/Book/SearchBooks';
  baseUrl3 = 'https://localhost:7030/Book/bookId';

  constructor(private http: HttpClient) { }

  //Get all books
  getAllBooks():Observable<Book[]>{
      return this.http.get<Book[]>(this.baseUrl);
  }

  //Add book
  CreateBook(book: Book):Observable<Book[]> {
  //  book.bookId = 0;//'00000000-0000-0000-0000-00000000000';
    return this.http.post<Book[]>(this.baseUrl1, book);
  }
  //Search books
  SearchBooks(book: BookSearch):Observable<BookSearch[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("title",book.title);
    queryParams = queryParams.append("category",book.category);
    queryParams = queryParams.append("author",book.authorName);
    queryParams = queryParams.append("publisher",book.publisher);
    queryParams = queryParams.append("content",book.content);

    return this.http.get<Book[]>(this.baseUrl2,{params:queryParams});
  }
  deleteBook(bookId:number):Observable<Book>{
    return this.http.delete<Book>(this.baseUrl3 +'/'+bookId);
  }

  updateBook(book: Book):Observable<Book>{
    return this.http.put<Book>(this.baseUrl +'/'+book.bookId,book);
  }
}
