import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../app/state/app.states';
import { BookComponent } from '../app/books/book/book.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Example/Book',
  component: BookComponent,
  decorators: [
    moduleMetadata({
      declarations: [BookComponent],
      imports: [
          CommonModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<BookComponent> = (args: BookComponent) => ({
  component: BookComponent,
  props: args,
});

export const book = Template.bind({});
book.args = {
  user: {},
};
