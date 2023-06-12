import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Redirect the user to the login screen
  onLogin() {
    this.apiService.login().subscribe((res) => {
      if (this.apiService.isLoggedIn) {
        const redirect = this.apiService.redirectUrl
          ? this.router.parseUrl(this.apiService.redirectUrl)
          : 'login';
        // this.message = 'status: logged in'

        this.router.navigateByUrl(redirect);
      }
    });
  }

  // Redirect the user to the sign-up screen
  onSignUp() {
    this.router.navigateByUrl('sign-up');
  }

  // convenience getter for easy access to form fields
  get loginControls() {
    return this.loginForm.controls;
  }
  get emailControls() {
    return this.loginForm.value.email;
  }
  get passwordControls() {
    return this.loginForm.value.password;
  }

  //
  logout() {
    this.apiService.logout();
    // this.message = 'status: logged out'
  }
}
