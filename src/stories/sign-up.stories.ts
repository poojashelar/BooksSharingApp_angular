import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../app/state/app.states';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

export default {
  title: 'Example/SignUp',
  component: SignUpComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducers, {})
        ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: []
    }),
  ],
} as Meta;

const Template: Story<SignUpComponent> = (args: SignUpComponent) => ({
  component: SignUpComponent,
  props: args,
});

export const register = Template.bind({});
register.args = {
  user: {},
};
