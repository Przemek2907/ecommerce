import { Component, OnInit } from '@angular/core';
import {faStore} from '@fortawesome/free-solid-svg-icons/faStore';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons/faPowerOff';
import {faReceipt} from '@fortawesome/free-solid-svg-icons/faReceipt';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {AuthService} from '../../services/security/AuthService';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  faShop = faStore;
  faCart = faShoppingCart;
  faHeart = faHeart;
  faMessage = faEnvelopeOpenText;
  faUser = faUser;
  faAccount = faPowerOff;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
    console.log('You are now logged in');
  }

  onLogout() {
    this.authService.logout();
    console.log('You are now logged out');
  }

}
