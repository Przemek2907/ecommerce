import { Component, OnInit } from '@angular/core';
import {faStore} from '@fortawesome/free-solid-svg-icons/faStore';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons/faPowerOff';
import {faReceipt} from '@fortawesome/free-solid-svg-icons/faReceipt';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {AuthService} from '../../services/security/AuthService';
import {Router} from "@angular/router";

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
  userMenuHidden: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userMenuHidden = true;
  }

  onLogin() {
    this.router.navigateByUrl('/login')
  }

  onLogout() {
    this.authService.logout();
    console.log('You are now logged out');
  }

  onUserMenuClick() {
    console.log('User menu has been clicked');
    this.userMenuHidden = !this.userMenuHidden;
  }

}
