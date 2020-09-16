import { AfterViewInit, Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, selectAuthState } from '../state/app.states';
import { LogOut } from '../store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  getState: Observable<any>;
  isAuthenticated: false;
  checkBoxValue: boolean;
  user = null;
  errorMessage = null;

  constructor(
    private store: Store<AppState>, private el: ElementRef, private renderer: Renderer2
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logOut(): void {
    this.store.dispatch(new LogOut());
  }

  changeTheme(): void {
    this.checkBoxValue = ( document.getElementById('theme') as HTMLInputElement).checked;
    if (this.checkBoxValue) {
         this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'lavender');
    } else {
        this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'white');
    }
  }
}
