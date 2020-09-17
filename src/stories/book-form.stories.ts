import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../app/state/app.states';
import { BookFormComponent } from '../app/books/book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Example/Book-Forms',
  component: BookFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<BookFormComponent> = (args: BookFormComponent) => ({
  component: BookFormComponent,
  props: args,
});

export const add = Template.bind({});
add.args = {
  user: {},
};

export const edit = Template.bind({});
edit.args = {
 id: '2'
};
