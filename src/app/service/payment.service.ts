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

  getAllPayment():Observable<Payment[]>{
      return this.http.get<Payment[]>(this.baseUrl);
  }

  CreatePayment(payment: Payment):Observable<Payment[]> {
   payment.paymentId = 0;
    return this.http.post<Payment[]>(this.baseUrl1, payment);
  }

 
}
