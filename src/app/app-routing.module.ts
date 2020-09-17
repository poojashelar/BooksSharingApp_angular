import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookComponent } from './books/book/book.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: BookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BookComponent },
  { path: 'book-form', component: BookFormComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
