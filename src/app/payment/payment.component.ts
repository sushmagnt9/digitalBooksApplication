import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Payment } from '../models/payment';
import { paymentService } from '../service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title = 'payment';
  payments:Payment[] = [];
  payment : Payment = {
    paymentId:0,
    buyerEmail:'',
    buyerName:'',
    bookId:0,
    paymentDate:new Date()
  }
  constructor(private paymentService : paymentService,private router : Router) { }

  ngOnInit(): void {
  }
  response:any;
  onSubmit(): void {
    if(this.payment.buyerEmail!='' ){
        this.paymentService.CreatePayment(this.payment)
        .subscribe(
          response => {
            this.response = response;
            console.log(response);
            this.router.navigate(['/getpayment']);
          }
        )
      }else{
        console.log('Payment failed');
      }
  }
}
