export class AuthenticatedUser {
  private _email: string
  private _token: string;


  constructor(email: string, token: string) {
    this._email = email;
    this._token = token;
  }


  get email(): string {
    return this._email;
  }

  get token(): string {
    return this._token;
  }
}
