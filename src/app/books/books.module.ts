import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { AppRoutingModule } from '../app-routing.module';

const bookRoutes: Routes = [
  {path: 'book-form', component: BookFormComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forChild(bookRoutes),
  ],
  declarations: [BookFormComponent]
})
export class BooksModule { }
