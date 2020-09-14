import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/security/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn :boolean;
  isLoading: boolean;
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private authenticationService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [ Validators.email, Validators.required]),
      'password' : new FormControl(null)
    })
    this.isLoading = false;
    this.errorMessage = null;
  }

  onLoginSubmit() {
    console.log(this.loginForm.get('email').value, this.loginForm.get('password').value);
    this.isLoading = true;
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(
        successfulLogin => {
          this.isLoading = false;
          this.isLoggedIn = true;
          console.log(successfulLogin);
          this.router.navigateByUrl('/products')
        },
        failedLogin => {
          this.isLoading = false;
          this.isLoggedIn = false;
          this.errorMessage = failedLogin.error;
          console.log(failedLogin)
        }
      )
  }

}
