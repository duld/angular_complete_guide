import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  onHandleError() {
    this.error = null;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;
    const email = form.value.email;
    const password = form.value.password;
    form.reset();

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      response => {
        // console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error => {
        this.isLoading = false;
        this.error = error;
        // console.log(error);
      }
    );
  }
}
