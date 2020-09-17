import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from '../app/state/app.states';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Example/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent],
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

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
  isAuthenticated: true
};
