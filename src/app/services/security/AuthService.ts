export class AuthService {
  loggedIn = false;

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

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
