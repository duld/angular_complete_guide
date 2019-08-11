import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { User } from './user.model';


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiKey = 'AIzaSyCy3G79sTekB-G9Zj3aFYmiILp2TboucRs';
  user = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private router: Router) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError( this.handleError ),
      tap( response => {
        this.handleAuthentication(
          response.email,
          response.localId,
          response.idToken,
          +response.expiresIn
        );
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError( this.handleError ),
      tap(response => {
        this.handleAuthentication(
          response.email,
          response.localId,
          response.idToken,
          +response.expiresIn
        );
      })
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already in use.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Invalid email.';
        break;
      case 'USER_DISABLED':
        errorMessage = 'User Account is currently disabled.';
        break;
      case 'default':
        errorMessage = 'An Error has Occured.';
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new User(
      email,
      userId,
      token,
      expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
