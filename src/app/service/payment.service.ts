import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class paymentService {

  baseUrl = 'https://localhost:7030/Payment';
  baseUrl1 = 'https://localhost:7030/Payment/CreatePayment';

  constructor(private http: HttpClient) { }

  //Get all books
  getAllPayment():Observable<Payment[]>{
      return this.http.get<Payment[]>(this.baseUrl);
  }

  //Add book
  CreatePayment(payment: Payment):Observable<Payment[]> {
   payment.paymentId = 0;//'00000000-0000-0000-0000-00000000000';
    return this.http.post<Payment[]>(this.baseUrl1, payment);
  }

 
}
