import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private apiKey = 'AIzaSyCy3G79sTekB-G9Zj3aFYmiILp2TboucRs';

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError( error => {
        let errorMessage = 'An unknown error occured!';
        if (!error.error || !error.error.error) {
          return throwError(errorMessage);
        }

        switch (error.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email is already in use.';
            break;
          case 'default':
            errorMessage = 'An Error has Occured.';
        }

        return throwError(errorMessage);
      })
    );
  }
}
