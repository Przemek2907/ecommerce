import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";
import {AuthenticatedUser} from "../../model/AuthenticatedUser";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthService {
  loggedIn = false;
  authenticatedUser = new BehaviorSubject<AuthenticatedUser>(null);

  constructor(private httpClient: HttpClient) {

  }

  isAuthenticated() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          console.log('You are not allowed to access this resource');
          resolve(this.loggedIn);
        }, 5000);
      }
    );
  }

  login(email: string, password: string) {
    return this.httpClient.post('http://localhost:8200/login', {
      username: email,
      password: password,
    }, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    }).pipe(
      tap(responseData => {
        const authUser = new AuthenticatedUser(email, JSON.stringify(responseData));
        console.log(`My authenticated user is : ${authUser.email } and has token ${authUser.token}`)
        this.authenticatedUser.next(authUser);
    })
    )
  }

  logout() {
    this.loggedIn = false;
  }
}
