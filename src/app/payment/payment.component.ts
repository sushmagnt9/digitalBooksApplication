import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
import { paymentService } from '../service/payment.service';

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
  constructor(private paymentService : paymentService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if(this.payment.buyerEmail!=''  ){
        this.paymentService.CreatePayment(this.payment)
        .subscribe(
          response => {
            console.log(response);
            
          }
        )
      }else{
        console.log('Payment failed');
      }
  }
}
