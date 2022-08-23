import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { PaymentComponent } from '../payment/payment.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [{path : 'Signin' , component : SigninComponent},
{path : 'Books' , component : BooksComponent},
{path : 'Signup' , component : SignupComponent },
{path : 'payment', component : PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }