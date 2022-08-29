import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
import { paymentService } from '../service/payment.service';

@Component({
  selector: 'app-getpayment',
  templateUrl: './getpayment.component.html',
  styleUrls: ['./getpayment.component.css']
})
export class GetpaymentComponent implements OnInit {
  title = 'payment';
  payments:Payment[] = [];
  constructor(private paymentService : paymentService) { }

  ngOnInit(): void {
    this.getAllPayment();
  }
  getAllPayment() {
    this.paymentService.getAllPayment()
    .subscribe(
      response => { this.payments = response}
    );
    return this.payments.filter(Payment => Payment.buyerEmail);
  }
}
