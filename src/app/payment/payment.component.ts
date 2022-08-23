import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
import { paymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title = 'users';
  payments:Payment[] = [];
  payment : Payment = {
    PaymentId:0,
    Email:'',
    UserId:0,
    BookId:0,
    PaymentDate:new Date()
  }
  constructor(private paymentService : paymentService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if(this.payment.Email!=''  ){
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
