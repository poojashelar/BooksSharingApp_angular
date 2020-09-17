import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../app/state/app.states';
import { LogInComponent } from '../app/log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BookComponent } from 'src/app/books/book/book.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { AuthEffects } from 'src/app/store/effects/auth.effects';
import { BookEffect } from 'src/app/store/effects/book.effects';

export default {
  title: 'Example/login',
  component: LogInComponent,
  decorators: [
    moduleMetadata({
      declarations: [LogInComponent],
      imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot(reducers, {}),
          EffectsModule.forRoot([AuthEffects, BookEffect])
          // RouterModule.forRoot([
          //   { path: 'log-in', component: LogInComponent },
          //   { path: 'sign-up', component: SignUpComponent },
          //   { path: '', component: BookComponent },
          // ]),
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<LogInComponent> = (args: LogInComponent) => ({
  component: LogInComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
};
