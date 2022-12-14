import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { CreatebooksComponent } from '../createbooks/createbooks.component';
import { DeletebooksComponent } from '../deletebooks/deletebooks.component';
import { GetpaymentComponent } from '../getpayment/getpayment.component';
import { PaymentComponent } from '../payment/payment.component';
import { SearchbookComponent } from '../searchbook/searchbook.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [{path : 'Signin' , component : SigninComponent},
{path : 'Books' , component : BooksComponent},
{path : 'Signup' , component : SignupComponent },
{path : 'Payment', component : PaymentComponent},
{path : 'createbooks', component : CreatebooksComponent},
{path : 'getpayment', component : GetpaymentComponent},
{path : 'searchbooks', component : SearchbookComponent},
{path : 'Deletebooks', component : DeletebooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }