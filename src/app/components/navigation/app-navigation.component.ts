import { Component, OnInit } from '@angular/core';
import {faStore} from '@fortawesome/free-solid-svg-icons/faStore';
import {faUser, faUserCog, faWrench} from '@fortawesome/free-solid-svg-icons';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons/faPowerOff';
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
  faHeart = faHeart;
  faUser = faUser;
  faAccount = faPowerOff;
  faSettings = faWrench;
  faAdmin = faUserCog;
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
