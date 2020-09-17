import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../app/store/effects/auth.effects';
import { BookEffect } from '../app/store/effects/book.effects';
import { reducers } from '../app/state/app.states';
import { AppComponent } from '../app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { LogInComponent } from '../app/log-in/log-in.component';
import { BookComponent } from '../app/books/book/book.component';
import { BookFormComponent } from '../app/books/book-form/book-form.component';
import { BookListComponent } from '../app/books/book-list/book-list.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { AuthService } from 'src/app/Services/auth.service';
import { BookService } from 'src/app/Services/book.service';

export default {
  title: 'Example/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
        NavbarComponent,
        LogInComponent,
        SignUpComponent,
        BookComponent,
        BookListComponent,
        BookFormComponent
      ],
      imports: [
          AppRoutingModule,
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          EffectsModule.forRoot([BookEffect, AuthEffects]),
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [AuthService, BookService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
};
