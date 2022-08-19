import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { SigninComponent } from '../signin/signin.component';

const routes: Routes = [{path : 'Signin' , component : SigninComponent},
{path : 'Books' , component : BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }