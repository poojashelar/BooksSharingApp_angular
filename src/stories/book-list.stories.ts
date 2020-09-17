import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../app/state/app.states';
import { BookListComponent } from '../app/books/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

const dummyBooks = [
    {
        name: 'THE NATURE OF THINGS',
        description: ' This is regarded as a seminal text of Epicurean science and philosophy.',
        category: 'Science',
        id: 2
      },
      {
        name: 'Mrityunjay',
        description: 'Karna\'s Story of MAHABHARAT',
        category: 'Novel',
        id: 5
      }

];
export default {
  title: 'Example/Book-List',
  component: BookListComponent,
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

const Template: Story<BookListComponent> = (args: BookListComponent) => ({
  component: BookListComponent,
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [BookListComponent],
    providers: [provideMockStore({})],
  },
  props: { args, books: dummyBooks, userAuthenticated: true },
});

export const list = Template.bind({});
list.args = {
  user: {},
};
