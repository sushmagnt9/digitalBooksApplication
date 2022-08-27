import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './service/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatebooksComponent } from './createbooks/createbooks.component';
import { GetpaymentComponent } from './getpayment/getpayment.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { DeletebooksComponent } from './deletebooks/deletebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    BooksComponent,
    SignupComponent,
    PaymentComponent,
    NavbarComponent,
    CreatebooksComponent,
    GetpaymentComponent,
    SearchbookComponent,
    DeletebooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }